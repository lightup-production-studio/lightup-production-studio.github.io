import { chromium } from "playwright";
import { PDFDocument } from "pdf-lib";
import { writeFileSync, mkdirSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "../../Lightup_Site_Preview.pdf");
const BASE = process.env.SITE_URL || "http://127.0.0.1:3006";

const ROUTES = [{ path: "/", label: "Home" }];

const VIEWPORT = { width: 1440, height: 900 };

function log(msg) {
  console.log(`[${new Date().toISOString().slice(11, 19)}] ${msg}`);
}

async function withTimeout(promise, ms, label) {
  let timer;
  try {
    return await Promise.race([
      promise,
      new Promise((_, reject) => {
        timer = setTimeout(() => reject(new Error(`Timeout: ${label} (${ms}ms)`)), ms);
      }),
    ]);
  } finally {
    clearTimeout(timer);
  }
}

async function capturePage(page, path) {
  log(`  goto ${BASE}${path}`);
  await page.goto(`${BASE}${path}`, { waitUntil: "domcontentloaded", timeout: 30000 });
  log(`  domcontentloaded`);

  try {
    await withTimeout(
      page.evaluate(() => document.fonts.ready.then(() => true)),
      5000,
      "fonts.ready",
    );
    log(`  fonts ready`);
  } catch (e) {
    log(`  fonts skipped: ${e.message}`);
  }

  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-delay: 0s !important;
        transition-duration: 0.01ms !important;
      }
      iframe { visibility: hidden !important; }
    `,
  });

  // Nudge lazy content into view, then return to top
  await page.evaluate(async () => {
    const step = window.innerHeight;
    const max = Math.min(document.body.scrollHeight, 20000);
    for (let y = 0; y < max; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 50));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(500);
  log(`  scrolling done`);

  const png = await withTimeout(
    page.screenshot({ fullPage: true, type: "png", animations: "disabled" }),
    60000,
    "screenshot",
  );
  log(`  screenshot ${png.length} bytes`);
  return png;
}

async function main() {
  log(`Exporting site PDF from ${BASE}`);
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  const pdf = await PDFDocument.create();
  pdf.setTitle("Light Up Production Studio — Site Preview");
  pdf.setAuthor("Light Up Production Studio");
  pdf.setSubject("Local site preview for client review");

  for (const route of ROUTES) {
    log(`Capturing ${route.label} (${route.path})`);
    const pngBytes = await capturePage(page, route.path);
    const image = await pdf.embedPng(pngBytes);
    const pdfPage = pdf.addPage([image.width, image.height]);
    pdfPage.drawImage(image, {
      x: 0,
      y: 0,
      width: image.width,
      height: image.height,
    });
    log(`  embedded ${image.width}×${image.height}`);
  }

  await browser.close();

  const bytes = await pdf.save();
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, bytes);
  log(`Wrote ${OUT}`);
  log(`Size: ${(bytes.length / 1024 / 1024).toFixed(2)} MB`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

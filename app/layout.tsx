import type { Metadata } from "next";
import { Bebas_Neue, Bodoni_Moda, Source_Sans_3 } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import site from "@/content/site-settings.json";
import "./globals.css";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const didone = Bodoni_Moda({
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz"],
  variable: "--font-didone",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lightupproduction.com"),
  title: {
    default: `${site.businessName} | Video · Copywriting · Storytelling`,
    template: `%s | ${site.businessName}`,
  },
  description:
    "Hong Kong studio for video, copywriting, branding, and graphic & visual — capturing moments and crafting stories.",
  openGraph: {
    title: `${site.businessName} | Video · Copywriting · Storytelling`,
    description:
      "Hong Kong studio for video, copywriting, branding, and graphic & visual — capturing moments and crafting stories.",
    siteName: site.businessName,
    url: "https://lightupproduction.com",
    images: [
      {
        url: "/images/logo/lightup-logo.jpg",
        width: 800,
        height: 806,
        alt: "Light Up Production",
      },
    ],
  },
  twitter: {
    card: "summary",
    images: ["/images/logo/lightup-logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${didone.variable} ${body.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

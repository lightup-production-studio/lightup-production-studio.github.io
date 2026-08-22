"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const COPIED_MESSAGE =
  "Email address copied. Feel free to paste it into your mail app.";

type Props = {
  email: string;
  className?: string;
  children: ReactNode;
};

export function CopyEmailButton({ email, className, children }: Props) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy this email address", email);
    }
  }

  return (
    <div className="inline-flex flex-col items-start gap-2">
      <button type="button" onClick={copy} className={className}>
        {children}
      </button>
      <p
        aria-live="polite"
        className={`text-sm text-sand transition-opacity ${
          copied ? "opacity-100" : "opacity-0"
        }`}
      >
        {COPIED_MESSAGE}
      </p>
    </div>
  );
}

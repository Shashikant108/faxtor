import type { ComponentPropsWithoutRef } from "react";

export type FoldTone = "light" | "tint" | "lavender" | "deep";

type FoldProps = ComponentPropsWithoutRef<"section"> & {
  /** which colour the page background takes while this fold is on screen (see app/globals.css) */
  tone?: FoldTone;
};

/**
 * One screen-sized part of the page. Every section of the site is a Fold, so the moving background
 * (components/scroll-backdrop.tsx) knows where each one is and what colour it asks for.
 */
export function Fold({ tone = "light", className = "", ...props }: FoldProps) {
  return <section data-fold={tone} className={`relative ${className}`} {...props} />;
}

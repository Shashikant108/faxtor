"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/site-config";
import { Logo } from "./logo";
import { ArrowIcon } from "./arrow-icon";
import { ContactDialogButton } from "./contact-dialog";
import { SOLUTIONS, SolutionsList, SolutionsMenu } from "./solutions-menu";

// what the contact form offers under "What are you looking for?"
const NEEDS = SOLUTIONS.map((solution) => solution.title);

/** The header: fixed at the top of the screen, always solid frosted white so it never looks see-through. */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container-page flex items-center justify-between py-5 lg:py-[1vw]">
        <div className="flex items-center gap-14 lg:gap-[5.5vw]">
          <Logo />
          <nav className="hidden items-center lg:flex lg:gap-[2.7vw]" aria-label="Main">
            {NAV_LINKS.map((link) =>
              link.label === "Solutions" ? (
                <SolutionsMenu key={link.label} />
              ) : (
                <Link key={link.label} href={link.href} className="nav-link">
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>

        {/* opens the contact form over the page, like the hero's call button */}
        <ContactDialogButton needs={NEEDS} className="btn btn-md max-lg:hidden">
          Contact us
          <ArrowIcon className="h-5 w-5" />
        </ContactDialogButton>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-brand-navy lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open ? (
        <nav
          className="container-page lg:hidden"
          aria-label="Mobile"
        >
          <div className="max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur">
            {NAV_LINKS.map((link) =>
              link.label === "Solutions" ? (
                <div key={link.label}>
                  {/* the solutions fold open under their name */}
                  <button
                    type="button"
                    className="nav-link solutions-toggle w-full justify-between px-3 py-3 text-base"
                    aria-expanded={solutionsOpen}
                    data-open={solutionsOpen || undefined}
                    onClick={() => setSolutionsOpen((value) => !value)}
                  >
                    {link.label}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="solutions-chevron" aria-hidden="true">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  {solutionsOpen && (
                    <div className="px-1 pb-2">
                      <SolutionsList onPick={() => setOpen(false)} />
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.label} href={link.href} onClick={() => setOpen(false)} className="nav-link block px-3 py-3 text-base">
                  {link.label}
                </Link>
              ),
            )}
            <ContactDialogButton needs={NEEDS} className="btn btn-md mt-2 w-full justify-center">
              Contact us
              <ArrowIcon className="h-5 w-5" />
            </ContactDialogButton>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

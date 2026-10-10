import Link from "next/link";

/** The Faxtor logo, from the supplied artwork in public/logo.svg. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="Faxtor home" className={`inline-flex items-center ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.svg" alt="Faxtor" width={1055} height={320} className="h-8 w-auto sm:h-10 lg:h-[clamp(36px,2.4vw,48px)]" />
    </Link>
  );
}

// The marks of the technologies we build with (About Us page, "Our technology"), drawn in code in each one's
// colours like the integration logos. They are pictures only (aria-hidden): the name under each one is real text.

import type { ReactNode } from "react";
import { AwsLogo } from "./integration-logos";

type LogoProps = { className?: string };

const svg = (viewBox: string, className: string | undefined, children: ReactNode) => (
  <svg viewBox={viewBox} className={className} aria-hidden="true" fontFamily="var(--font-jakarta), system-ui, sans-serif">
    {children}
  </svg>
);

export const ReactLogo = ({ className }: LogoProps) =>
  svg(
    "0 0 40 40",
    className,
    <g fill="none" stroke="#149eca" strokeWidth="1.8">
      <ellipse cx="20" cy="20" rx="17" ry="6.6" />
      <ellipse cx="20" cy="20" rx="17" ry="6.6" transform="rotate(60 20 20)" />
      <ellipse cx="20" cy="20" rx="17" ry="6.6" transform="rotate(120 20 20)" />
      <circle cx="20" cy="20" r="3.2" fill="#149eca" stroke="none" />
    </g>,
  );

export const PhpLogo = ({ className }: LogoProps) =>
  svg(
    "0 0 60 36",
    className,
    <>
      <ellipse cx="30" cy="18" rx="28" ry="15" fill="#777bb3" />
      <text x="30" y="24" textAnchor="middle" fontSize="17" fontWeight="800" fontStyle="italic" fill="#fff">
        php
      </text>
    </>,
  );

export const MySqlLogo = ({ className }: LogoProps) =>
  svg(
    "0 0 64 36",
    className,
    <>
      <path d="M44 6c6 1 11 5 14 11-4-3-8-4-12-3 3 2 5 5 5 9-3-6-8-9-14-9 3-3 5-6 7-8Z" fill="#f29111" />
      <text x="2" y="30" fontSize="15" fontWeight="800" fill="#00758f">
        My<tspan fill="#f29111">SQL</tspan>
      </text>
    </>,
  );

export const TailwindLogo = ({ className }: LogoProps) =>
  svg(
    "0 0 24 24",
    className,
    <path
      d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.47 6 12 6Zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.53 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.47 12 7 12Z"
      fill="#38bdf8"
    />,
  );

export const RedisLogo = ({ className }: LogoProps) =>
  svg(
    "0 0 44 36",
    className,
    <>
      {/* three stacked layers, the top one with its star */}
      <path d="M22 26 3 19v4l19 7 19-7v-4Z" fill="#a41e11" />
      <path d="M22 19 3 12v4l19 7 19-7v-4Z" fill="#c6302b" />
      <path d="M22 3 3 10l19 7 19-7Z" fill="#dc382d" />
      <path d="m22 7 1.2 2.4 2.6.4-1.9 1.8.5 2.6-2.4-1.3-2.4 1.3.5-2.6-1.9-1.8 2.6-.4Z" fill="#fff" />
    </>,
  );

export const DockerLogo = ({ className }: LogoProps) =>
  svg(
    "0 0 48 36",
    className,
    <g fill="#2496ed">
      {/* the containers on the whale's back */}
      {[
        [8, 14],
        [14, 14],
        [20, 14],
        [26, 14],
        [14, 8],
        [20, 8],
        [26, 8],
        [20, 2],
      ].map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="5" height="5" rx="0.6" />
      ))}
      <path d="M2 20h36c1.5-3 4.5-4 7-3.4-.6 2.2-2 3.6-4 4-2.6 7.4-10 12.4-20 12.4C10 33 4 28 2 20Z" />
    </g>,
  );

export const LinuxLogo = ({ className }: LogoProps) =>
  svg(
    "0 0 36 40",
    className,
    <>
      {/* Tux, simply: body, belly, eyes, beak and feet */}
      <path d="M18 2c-5 0-8 4-8 9 0 3-4 7-5 12-1 6 3 11 6 12h14c3-1 7-6 6-12-1-5-5-9-5-12 0-5-3-9-8-9Z" fill="#1d1d1b" />
      <ellipse cx="18" cy="25" rx="7.5" ry="9.5" fill="#fff" />
      <circle cx="15" cy="10" r="2" fill="#fff" />
      <circle cx="21" cy="10" r="2" fill="#fff" />
      <circle cx="15.3" cy="10.3" r="1" fill="#1d1d1b" />
      <circle cx="20.7" cy="10.3" r="1" fill="#1d1d1b" />
      <path d="M14.5 13.5h7l-3.5 3.2Z" fill="#f8b81b" />
      <path d="M4 36c2-3 6-4 9-2l-1 4H5Zm28 0c-2-3-6-4-9-2l1 4h7Z" fill="#f8b81b" />
    </>,
  );

/** The eight, in the order the About Us page shows them. */
export const TECH_STACK = [
  { name: "React / Next.js", Logo: ReactLogo },
  { name: "PHP / Laravel", Logo: PhpLogo },
  { name: "MySQL", Logo: MySqlLogo },
  { name: "AWS", Logo: AwsLogo },
  { name: "Tailwind CSS", Logo: TailwindLogo },
  { name: "Redis", Logo: RedisLogo },
  { name: "Docker", Logo: DockerLogo },
  { name: "Linux", Logo: LinuxLogo },
];

"use client";

import { useEffect, useRef, useState } from "react";

// the clip's own background is a soft lavender; fading its four edges lets it melt into the hero
const EDGE_FADE = "linear-gradient(to right, transparent, #000 7%, #000 93%, transparent)";
const EDGE_FADE_Y = "linear-gradient(to bottom, transparent, #000 7%, #000 93%, transparent)";

const VIDEO_SRC = "/hero-animation.mp4";

type SlowConnection = { saveData?: boolean; effectiveType?: string };

// the story the clip tells, with the second each part starts; on phones the laptop is too small to read, so a
// caption under the video says what is happening
const STORY = [
  { from: 0, text: "Your work is scattered across calls, chats and sheets" },
  { from: 4.5, text: "Faxtor brings it all into one place" },
  { from: 8, text: "One dashboard for your whole business" },
  { from: 12.5, text: "Your work is scattered across calls, chats and sheets" },
];
const stepAt = (time: number) => {
  let step = 0;
  STORY.forEach((part, index) => {
    if (time >= part.from) step = index;
  });
  return step % 3;
};

/**
 * The hero animation: muted, looping, inline. The poster (the clip's first frame) is on screen from the
 * start, together with the hero text, and the video takes over from it without a jump. The clip (about 4 MB)
 * is only fetched once the page itself has loaded, so it never competes with the text, fonts and pictures;
 * on data saver or a 2G connection, and for people who ask for less motion, the poster simply stays. It
 * plays only while it is on screen. Below desktop a short caption follows the clip, part by part.
 */
export function HeroVideo({ className = "" }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const connection = (navigator as Navigator & { connection?: SlowConnection }).connection;
    const slow = connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType ?? "");
    if (reduceMotion || slow) return undefined;

    const follow = () => setStep(stepAt(video.currentTime));
    video.addEventListener("timeupdate", follow);

    let started = false;
    const start = () => {
      if (started) return;
      started = true;
      video.src = VIDEO_SRC;
      video.load();
      if (video.getBoundingClientRect().bottom > 0) video.play().catch(() => {});
    };
    // once the page has loaded, and the browser has a quiet moment
    const idle = () => {
      if (typeof window.requestIdleCallback === "function") window.requestIdleCallback(start, { timeout: 1500 });
      else window.setTimeout(start, 300);
    };
    if (document.readyState === "complete") idle();
    else window.addEventListener("load", idle, { once: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!started) return;
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // autoplay can be blocked (low power mode); the poster stays
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(video);
    return () => {
      observer.disconnect();
      video.removeEventListener("timeupdate", follow);
      window.removeEventListener("load", idle);
    };
  }, []);

  return (
    <div className={className}>
      <div
        style={{
          WebkitMaskImage: `${EDGE_FADE}, ${EDGE_FADE_Y}`,
          maskImage: `${EDGE_FADE}, ${EDGE_FADE_Y}`,
          WebkitMaskComposite: "source-in",
          maskComposite: "intersect",
        }}
      >
        <video
          ref={videoRef}
          className="block h-auto w-full"
          poster="/hero-poster.jpg"
          width={1080}
          height={720}
          muted
          loop
          playsInline
          preload="none"
          disablePictureInPicture
          aria-hidden="true"
          tabIndex={-1}
        />
      </div>

      {/* what the clip is showing, for screens where the laptop is too small to read; decorative, so screen
          readers skip it rather than hear it change every few seconds */}
      <div className="hero-story" aria-hidden="true">
        <p key={step} className="hero-story-text">
          {STORY[step].text}
        </p>
        <span className="hero-story-steps">
          {[0, 1, 2].map((index) => (
            <span key={index} className="hero-story-step" data-current={index === step || undefined} />
          ))}
        </span>
      </div>
    </div>
  );
}

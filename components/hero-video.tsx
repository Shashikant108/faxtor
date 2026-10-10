"use client";

import { useEffect, useRef, useState } from "react";

// the clip's own background is a soft lavender; fading its four edges lets it melt into the hero
const EDGE_FADE = "linear-gradient(to right, transparent, #000 7%, #000 93%, transparent)";
const EDGE_FADE_Y = "linear-gradient(to bottom, transparent, #000 7%, #000 93%, transparent)";

/**
 * The hero animation: muted, looping, inline. The poster (the clip's first frame) shows until the video
 * can play, then it fades in so nothing jumps. It plays only while it is on screen and holds still for
 * people who ask for less motion.
 */
export function HeroVideo({ className = "" }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    // the clip can finish loading before React attaches onLoadedData, so read the state once here too
    if (video.readyState >= 2) setReady(true);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      video.pause();
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
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
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={className}
      style={{
        WebkitMaskImage: `${EDGE_FADE}, ${EDGE_FADE_Y}`,
        maskImage: `${EDGE_FADE}, ${EDGE_FADE_Y}`,
        WebkitMaskComposite: "source-in",
        maskComposite: "intersect",
      }}
    >
      <video
        ref={videoRef}
        className={`block h-auto w-full transition-opacity duration-700 ease-out ${ready ? "opacity-100" : "opacity-0"}`}
        src="/hero-animation.mp4"
        poster="/hero-poster.jpg"
        width={1080}
        height={720}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        aria-hidden="true"
        tabIndex={-1}
        onLoadedData={() => setReady(true)}
      />
    </div>
  );
}

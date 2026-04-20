import { useEffect, useRef, useState } from "react";
import bg1 from "@/assets/auth-bg-1-bride.mp4.asset.json";
import bg2 from "@/assets/auth-bg-2-couple.mp4.asset.json";
import bg3 from "@/assets/auth-bg-3-crew.mp4.asset.json";
import bg4 from "@/assets/auth-bg-4-meeting.mp4.asset.json";
import bg5 from "@/assets/auth-bg-5-outing.mp4.asset.json";
import bg6 from "@/assets/auth-bg-6-dinner.mp4.asset.json";
import authPoster from "@/assets/auth-poster.jpg";

const SOURCES = [bg1, bg2, bg3, bg4, bg5, bg6].map(
  (a) => (a as { url: string }).url
);

// How long each clip stays fully visible (ms) before crossfading to the next
const CLIP_DURATION_MS = 6000;
// Crossfade duration (ms) — must match the CSS duration below
const FADE_MS = 1500;

interface AuthBackgroundProps {
  zoomed?: boolean;
}

/**
 * Two stacked <video> layers crossfading between 6 cinematic clips.
 * Videos never reset across UI state changes — they keep playing seamlessly.
 */
const AuthBackground = ({ zoomed = false }: AuthBackgroundProps) => {
  const [activeLayer, setActiveLayer] = useState<0 | 1>(0);
  const [layerSrcs, setLayerSrcs] = useState<[string, string]>([
    SOURCES[0],
    SOURCES[1 % SOURCES.length],
  ]);
  const nextIndexRef = useRef(2 % SOURCES.length);
  const videoRefs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLayer((prev) => {
        const next = prev === 0 ? 1 : 0;
        // Preload the upcoming clip into the layer that's about to fade out
        setLayerSrcs((srcs) => {
          const updated = [...srcs] as [string, string];
          updated[prev] = SOURCES[nextIndexRef.current];
          nextIndexRef.current = (nextIndexRef.current + 1) % SOURCES.length;
          return updated;
        });
        return next;
      });
    }, CLIP_DURATION_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden transition-transform ease-out"
      style={{
        transform: zoomed ? "scale(1.08)" : "scale(1)",
        transitionDuration: "1400ms",
      }}
    >
      {[0, 1].map((i) => (
        <video
          key={i}
          ref={videoRefs[i]}
          className="absolute inset-0 h-full w-full object-cover"
          src={layerSrcs[i]}
          poster={authPoster}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          style={{
            opacity: activeLayer === i ? 1 : 0,
            transition: `opacity ${FADE_MS}ms ease-in-out`,
          }}
        />
      ))}
    </div>
  );
};

export default AuthBackground;

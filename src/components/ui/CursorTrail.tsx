"use client";

import { useEffect, useRef } from "react";

/**
 * Soft gradient blob that follows the cursor with a gentle delay.
 * No pointer events; lightweight and global-safe.
 */
export default function CursorTrail() {
  const blobRef = useRef<HTMLDivElement | null>(null);
  const frame = useRef<number | null>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (frame.current) cancelAnimationFrame(frame.current);
      const animate = () => {
        const { x, y } = pos.current;
        const tx = target.current.x;
        const ty = target.current.y;
        // simple easing toward target
        const nx = x + (tx - x) * 0.12;
        const ny = y + (ty - y) * 0.12;
        pos.current = { x: nx, y: ny };
        if (blobRef.current) {
          blobRef.current.style.transform = `translate3d(${nx}px, ${ny}px, 0) scale(1)`;
        }
        frame.current = requestAnimationFrame(animate);
      };
      frame.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <>
      <div
        ref={blobRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative h-20 w-20">
          <span
            className="absolute inset-0 rounded-full opacity-80 blur-xl"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.6), rgba(168,85,247,0.35), rgba(59,130,246,0.15))",
              animation: "cursor-drift 6s ease-in-out infinite alternate",
              filter: "drop-shadow(0 10px 30px rgba(79,70,229,0.35))",
            }}
          />
          <span
            className="absolute inset-2 rounded-[45%] opacity-70 blur-lg mix-blend-screen"
            style={{
              background:
                "radial-gradient(circle at 70% 40%, rgba(236,72,153,0.35), rgba(59,130,246,0.25))",
              animation: "cursor-wave 5s ease-in-out infinite alternate",
            }}
          />
          <span
            className="absolute inset-4 rounded-[55%] opacity-65 blur-md mix-blend-screen"
            style={{
              background:
                "radial-gradient(circle at 40% 70%, rgba(56,189,248,0.28), rgba(139,92,246,0.25))",
              animation: "cursor-wobble 7s ease-in-out infinite alternate",
            }}
          />
        </div>
      </div>
      <style jsx global>{`
        @keyframes cursor-drift {
          0% {
            transform: rotate(0deg) scale(1);
            border-radius: 48% 52% 50% 50%;
          }
          50% {
            transform: rotate(6deg) scale(1.08);
            border-radius: 60% 45% 55% 50%;
          }
          100% {
            transform: rotate(-5deg) scale(0.96);
            border-radius: 50% 60% 45% 55%;
          }
        }
        @keyframes cursor-wave {
          0% {
            transform: rotate(-8deg) scale(1);
            border-radius: 55% 45% 60% 50%;
          }
          50% {
            transform: rotate(10deg) scale(1.05);
            border-radius: 45% 60% 50% 55%;
          }
          100% {
            transform: rotate(-6deg) scale(0.98);
            border-radius: 60% 50% 55% 45%;
          }
        }
        @keyframes cursor-wobble {
          0% {
            transform: rotate(4deg) scale(1);
            border-radius: 60% 50% 48% 55%;
          }
          50% {
            transform: rotate(-6deg) scale(1.07);
            border-radius: 52% 58% 50% 60%;
          }
          100% {
            transform: rotate(8deg) scale(0.97);
            border-radius: 58% 48% 60% 50%;
          }
        }
      `}</style>
    </>
  );
}


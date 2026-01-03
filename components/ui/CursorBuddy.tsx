"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight cursor-following character. Fixed position with no pointer events.
 */
export default function CursorBuddy() {
  const buddyRef = useRef<HTMLDivElement | null>(null);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!buddyRef.current) return;
      const { clientX, clientY } = e;
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        if (!buddyRef.current) return;
        buddyRef.current.style.transform = `translate3d(${clientX + 14}px, ${
          clientY + 14
        }px, 0)`;
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div
      ref={buddyRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] transition-transform duration-150 will-change-transform"
    >
      <div className="relative">
        <div className="absolute inset-0 blur-2xl bg-indigo-300/40 animate-pulse" />
        <div className="relative h-10 w-10 flex items-center justify-center text-2xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
          🧑‍💻
        </div>
      </div>
    </div>
  );
}


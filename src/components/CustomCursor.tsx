"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show on devices with a mouse pointer
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    document.documentElement.classList.add("custom-cursor-enabled");
    setVisible(true);

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.closest(".cursor-pointer") ||
        target.closest(".cursor-zoom-in")
      ) {
        setHovering(true);
      }
    };

    const out = () => setHovering(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);

    return () => {
      document.documentElement.classList.remove("custom-cursor-enabled");
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        className={`custom-cursor ${hovering ? "hovering" : ""}`}
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className={`custom-cursor-dot ${hovering ? "hovering" : ""}`}
        style={{ left: pos.x, top: pos.y }}
      />
    </>
  );
}

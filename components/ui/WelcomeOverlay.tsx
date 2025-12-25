"use client";

import { useState, useEffect } from "react";

interface WelcomeOverlayProps {
  onClose: () => void;
}

export function WelcomeOverlay({ onClose }: WelcomeOverlayProps) {
  const [visible, setVisible] = useState(true);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((b) => !b);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setVisible(false);
    setTimeout(onClose, 500); // Wait for fade out
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black cursor-pointer transition-opacity duration-500"
      onClick={handleClick}
    >
      <div className="text-center">
        {/* GTA Style Logo */}
        <h1
          className="text-8xl font-black mb-4 tracking-tighter"
          style={{ fontFamily: "Impact, sans-serif" }}
        >
          <span className="text-[#ff00cc] drop-shadow-[0_0_10px_rgba(255,0,204,0.8)]">
            X402
          </span>
          <span className="text-[#00d9ff] drop-shadow-[0_0_10px_rgba(0,217,255,0.8)] ml-4">
            CITY
          </span>
        </h1>

        <p
          className="text-[#ff00cc] text-2xl font-bold tracking-widest mt-12 transition-opacity duration-100"
          style={{ opacity: blink ? 1 : 0, fontFamily: "var(--font-carter)" }}
        >
          CLICK TO START
        </p>
      </div>

      <div
        className="absolute bottom-8 text-gray-500 text-xl"
        style={{
          fontFamily: "var(--font-yellowtail)",
          transform: "rotate(-5deg)",
        }}
      >
        Vice City Update
      </div>
    </div>
  );
}

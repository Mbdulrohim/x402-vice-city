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
      {/* Background Image */}
      <img
        src="/vice_splash_v3.png"
        alt="Vice City Splash"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
        {/* GTA Style Logo */}
        <h1
          className="text-8xl md:text-9xl font-black mb-8 tracking-tighter drop-shadow-2xl"
          style={{ fontFamily: "var(--font-carter)" }}
        >
          <span className="text-[#ff00cc] drop-shadow-[0_0_20px_rgba(255,0,204,0.6)]">
            X402
          </span>
          <span className="text-[#00d9ff] drop-shadow-[0_0_20px_rgba(0,217,255,0.6)] ml-4">
            CITY
          </span>
        </h1>

        <div className="mt-auto mb-20">
          <p
            className="text-[#ff00cc] text-2xl md:text-3xl font-bold tracking-[0.2em] transition-opacity duration-100 drop-shadow-md"
            style={{
              opacity: blink ? 1 : 0,
              fontFamily: "var(--font-montserrat)",
            }}
          >
            CLICK TO START
          </p>
        </div>

        <div
          className="absolute bottom-8 right-8 text-white/80 text-xl transform -rotate-2"
          style={{ fontFamily: "var(--font-yellowtail)" }}
        >
          The Vice City Update
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { OFFICIAL_TOKEN_ADDRESS } from "@/data/constants";

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
          className="text-5xl md:text-9xl font-black mb-8 tracking-tighter drop-shadow-2xl"
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
            className="text-[#ff00cc] text-xl md:text-3xl font-bold tracking-[0.2em] transition-opacity duration-100 drop-shadow-md"
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
          Powered by PayAI
        </div>

        {/* Official Token - Bottom Left */}
        <div
          className="absolute bottom-8 left-8 hidden md:flex flex-col items-start p-3 rounded-xl bg-black/30 backdrop-blur-md border border-white/10 hover:bg-black/50 hover:border-[#00d9ff]/50 transition-all cursor-pointer group z-20"
          onClick={(e) => {
            e.stopPropagation();
            navigator.clipboard.writeText(OFFICIAL_TOKEN_ADDRESS);
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest font-montserrat group-hover:text-[#00d9ff] transition-colors">
              Official Token
            </span>
            <span className="text-[10px] text-white/50 opacity-0 group-hover:opacity-100 transition-opacity">
              (Copy)
            </span>
          </div>
          <code className="text-sm font-mono text-white tracking-wider">
            {OFFICIAL_TOKEN_ADDRESS.slice(0, 4)}...
            {OFFICIAL_TOKEN_ADDRESS.slice(-4)}
          </code>
        </div>
      </div>
    </div>
  );
}

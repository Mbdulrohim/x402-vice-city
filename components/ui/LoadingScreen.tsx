"use client";

export function LoadingScreen() {
  return (
    <div className="loading-screen fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-6">
        {/* x402 Logo Animation */}
        <div className="text-6xl font-bold text-white animate-pulse-glow">
          <span className="text-white">x</span>
          <span className="text-[#00d9ff]">402</span>
        </div>

        {/* Loading Text */}
        <p className="text-xl text-gray-400 animate-pulse">
          Entering x402 City...
        </p>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#00d9ff] to-[#ff00cc] animate-pulse w-full"></div>
        </div>
      </div>
    </div>
  );
}

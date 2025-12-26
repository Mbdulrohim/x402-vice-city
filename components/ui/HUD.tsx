"use client";

import { x402Stats } from "@/data/stats";
import { useCityStore } from "@/store/cityStore";

export function HUD() {
  const { currentDistrict, setCurrentDistrict } = useCityStore();
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* Top Left - Logo and Title */}
      <div className="absolute top-6 left-6 pointer-events-auto">
        <div className="glass p-6 pr-12">
          <h1
            className="text-2xl font-bold font-carter"
            style={{ fontFamily: "var(--font-carter)" }}
          >
            <span className="text-white">x</span>
            <span className="text-[#ff00cc] text-3xl">402</span>
            <span
              className="text-gray-400 text-sm ml-2 font-montserrat"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              City
            </span>
          </h1>
          <p
            className="text-xs text-gray-400 mt-1 font-montserrat"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Explore the Ecosystem
          </p>
        </div>
      </div>

      {/* Top Right - Stats */}
      <div className="absolute top-6 right-6 pointer-events-auto">
        <div className="glass p-6 min-w-[280px]">
          <h3
            className="text-xs text-gray-400 uppercase mb-4 font-montserrat tracking-wider"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Last 30 Days
          </h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div>
              <p
                className="text-2xl font-bold text-[#00d9ff]"
                style={{ fontFamily: "var(--font-carter)" }}
              >
                {x402Stats.transactions}
              </p>
              <p className="text-xs text-gray-400 font-montserrat mt-1">
                Transactions
              </p>
            </div>
            <div>
              <p
                className="text-2xl font-bold text-[#ffaa00]"
                style={{ fontFamily: "var(--font-carter)" }}
              >
                {x402Stats.volume}
              </p>
              <p className="text-xs text-gray-400 font-montserrat mt-1">
                Volume
              </p>
            </div>
            <div>
              <p
                className="text-lg font-bold text-[#39ff14]"
                style={{ fontFamily: "var(--font-carter)" }}
              >
                {x402Stats.buyers}
              </p>
              <p className="text-xs text-gray-400 font-montserrat mt-1">
                Buyers
              </p>
            </div>
            <div>
              <p
                className="text-lg font-bold text-[#ff006e]"
                style={{ fontFamily: "var(--font-carter)" }}
              >
                {x402Stats.sellers}
              </p>
              <p className="text-xs text-gray-400 font-montserrat mt-1">
                Sellers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Left - Navigation Hints */}
      <div className="absolute bottom-6 left-6 pointer-events-auto">
        <div
          className="glass p-6 text-sm text-gray-400 font-montserrat space-y-2 min-w-[200px]"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          <p>🖱️ Drag to Rotate</p>
          <p>🔍 Scroll to Zoom</p>
          <p>⌨️ WASD to Move</p>
          <p>🖱️ Click Buildings for Info</p>
        </div>
      </div>

      {/* Bottom Right - District Labels */}
      <div className="absolute bottom-6 right-6 pointer-events-auto">
        <div className="glass p-6 w-[320px] rounded-xl backdrop-blur-md bg-black/60 border border-white/10">
          <p
            className="text-xs text-[#00d9ff] uppercase font-bold tracking-widest mb-4 font-montserrat"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Select District
          </p>
          <div className="flex flex-col gap-3">
            {[
              {
                id: "facilitator-plaza",
                name: "Facilitator Plaza",
                color: "border-[#ff00cc]",
                hover: "hover:bg-[#ff00cc]/20",
                active: "bg-[#ff00cc]/30",
              },
              {
                id: "service-skyline",
                name: "Service Skyline",
                color: "border-[#00d9ff]",
                hover: "hover:bg-[#00d9ff]/20",
                active: "bg-[#00d9ff]/30",
              },
              {
                id: "builders-district",
                name: "Builder's District",
                color: "border-[#39ff14]",
                hover: "hover:bg-[#39ff14]/20",
                active: "bg-[#39ff14]/30",
              },
              {
                id: "integration-avenue",
                name: "Integration Avenue",
                color: "border-[#ff006e]",
                hover: "hover:bg-[#ff006e]/20",
                active: "bg-[#ff006e]/30",
              },
            ].map((d) => (
              <button
                key={d.id}
                onClick={() => setCurrentDistrict(d.id)}
                className={`
                  relative overflow-hidden w-full text-left px-5 py-4 rounded-lg border transition-all duration-300
                  ${d.color}
                  ${
                    currentDistrict === d.id
                      ? `${d.active} border-opacity-100 shadow-[0_0_15px_rgba(0,0,0,0.5)] scale-[1.02]`
                      : "bg-black/40 border-opacity-30 hover:border-opacity-80"
                  }
                  ${d.hover}
                  group
                `}
              >
                <div className="flex items-center justify-between relative z-10">
                  <span
                    className={`font-montserrat text-sm font-medium tracking-wide ${
                      currentDistrict === d.id
                        ? "text-white"
                        : "text-gray-300 group-hover:text-white"
                    }`}
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {d.name}
                  </span>
                  {currentDistrict === d.id && (
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

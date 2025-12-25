"use client";

import { x402Stats } from "@/data/stats";
import { useCityStore } from "@/store/cityStore";

export function HUD() {
  const { currentDistrict, setCurrentDistrict } = useCityStore();
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* Top Left - Logo and Title */}
      <div className="absolute top-6 left-6 pointer-events-auto">
        <div className="glass p-4">
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
        <div className="glass p-4 min-w-[200px]">
          <h3
            className="text-xs text-gray-400 uppercase mb-3 font-montserrat"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Last 30 Days
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p
                className="text-2xl font-bold text-[#00d9ff]"
                style={{ fontFamily: "var(--font-carter)" }}
              >
                {x402Stats.transactions}
              </p>
              <p className="text-xs text-gray-400 font-montserrat">
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
              <p className="text-xs text-gray-400 font-montserrat">Volume</p>
            </div>
            <div>
              <p
                className="text-lg font-bold text-[#39ff14]"
                style={{ fontFamily: "var(--font-carter)" }}
              >
                {x402Stats.buyers}
              </p>
              <p className="text-xs text-gray-400 font-montserrat">Buyers</p>
            </div>
            <div>
              <p
                className="text-lg font-bold text-[#ff006e]"
                style={{ fontFamily: "var(--font-carter)" }}
              >
                {x402Stats.sellers}
              </p>
              <p className="text-xs text-gray-400 font-montserrat">Sellers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Left - Navigation Hints */}
      <div className="absolute bottom-6 left-6 pointer-events-auto">
        <div
          className="glass p-3 text-xs text-gray-400 font-montserrat"
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
        <div className="glass p-3">
          <p
            className="text-xs text-gray-400 uppercase font-montserrat"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Current District
          </p>
          <div className="mt-1 space-y-1">
            {[
              {
                id: "facilitator-plaza",
                name: "Facilitator Plaza",
                color: "#00d9ff",
              },
              {
                id: "service-skyline",
                name: "Service Skyline",
                color: "#00d9ff",
              },
              {
                id: "builders-district",
                name: "Builder's District",
                color: "#39ff14",
              },
              {
                id: "integration-avenue",
                name: "Integration Avenue",
                color: "#ff006e",
              },
            ].map((d) => (
              <div
                key={d.id}
                className={`text-sm cursor-pointer hover:opacity-80 transition-opacity ${
                  currentDistrict === d.id ? "font-bold" : ""
                }`}
                onClick={() => setCurrentDistrict(d.id)}
              >
                <span
                  style={{
                    color: currentDistrict === d.id ? "#ff00cc" : "gray",
                  }}
                >
                  ●
                </span>{" "}
                <span
                  className={
                    currentDistrict === d.id ? "text-white" : "text-gray-600"
                  }
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {d.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

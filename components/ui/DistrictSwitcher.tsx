"use client";

import { useCityStore } from "@/store/cityStore";
import { useThree } from "@react-three/fiber";

interface District {
  id: string;
  name: string;
  color: string;
  position: [number, number, number];
}

const districts: District[] = [
  {
    id: "facilitator-plaza",
    name: "Facilitator Plaza",
    color: "#00d9ff",
    position: [0, 50, 100],
  },
  {
    id: "service-skyline",
    name: "Service Skyline",
    color: "#00d9ff",
    position: [0, 50, -60],
  },
  {
    id: "builders-district",
    name: "Builder's District",
    color: "#39ff14",
    position: [60, 50, 50],
  },
  {
    id: "integration-avenue",
    name: "Integration Avenue",
    color: "#ff006e",
    position: [-50, 50, 50],
  },
];

export function DistrictSwitcher() {
  const { currentDistrict, setCurrentDistrict } = useCityStore();

  const handleDistrictClick = (district: District) => {
    setCurrentDistrict(district.id);
    // Camera will animate to position in the Scene component
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-auto">
      <div className="glass p-2 flex gap-3">
        {districts.map((district) => {
          const isActive = currentDistrict === district.id;

          return (
            <button
              key={district.id}
              onClick={() => handleDistrictClick(district)}
              className={`
                px-6 py-3 rounded-lg font-medium transition-all
                ${
                  isActive
                    ? "bg-white/20 scale-105"
                    : "bg-white/5 hover:bg-white/10"
                }
              `}
              style={{
                borderLeft: `4px solid ${district.color}`,
              }}
            >
              <div
                className="text-sm font-bold"
                style={{ color: district.color }}
              >
                {district.name}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

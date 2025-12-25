"use client";

import { Text } from "@react-three/drei";
import { getServices } from "@/data/ecosystem";
import { Building } from "@/components/buildings/Building";
import { useCityStore } from "@/store/cityStore";

export function ServiceSkyline() {
  const services = getServices();
  const { setSelectedProject } = useCityStore();

  return (
    <group position={[0, 0, 0]}>
      {/* Create a skyline of diverse skyscrapers */}
      {services.map((service, i) => {
        const side = i % 2 === 0 ? 1 : -1;
        // 3 columns per side
        const col = (i % 6) / 2;
        const row = Math.floor(i / 6);

        const x = side * (30 + col * 12);
        const z = row * 15 - 20;

        const height = 15 + (i % 4) * 5; // Varying heights
        const variant = i % 2 === 0 ? "skyscraper" : "tower";

        return (
          <group key={service.id} position={[x, 0, z]}>
            <Building
              position={[0, 0, 0]}
              height={height}
              variant={variant as "tower" | "skyscraper"}
              label={service.name}
              logoPath={service.logoPath}
              onClick={() => setSelectedProject(service)}
              color=""
              emissive=""
            />

            {/* Service label */}
            <Text
              position={[0, height + 3, 0]}
              fontSize={0.8}
              color="#ffffff"
              outlineWidth={0.05}
              outlineColor="#000000"
              anchorX="center"
              anchorY="bottom"
              maxWidth={9}
            >
              {service.name}
            </Text>
          </group>
        );
      })}

      {/* District label */}
      <Text
        position={[0, 0.1, 50]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={6}
        color="#333333"
        anchorX="center"
        anchorY="middle"
      >
        SERVICE SKYLINE
      </Text>
    </group>
  );
}

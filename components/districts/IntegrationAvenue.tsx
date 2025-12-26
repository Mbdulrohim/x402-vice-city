"use client";

import { Text } from "@react-three/drei";
import { getIntegrations } from "@/data/ecosystem";
import { Building } from "@/components/buildings/Building";
import { useCityStore } from "@/store/cityStore";
import { TrafficGantry } from "@/components/env/TrafficGantry";

export function IntegrationAvenue() {
  const integrations = getIntegrations();
  const { setSelectedProject } = useCityStore();

  return (
    <group position={[0, 0, 0]}>
      {/* Create creative storefronts in an organic layout */}
      {integrations.map((project, i) => {
        const side = i % 2 === 0 ? 1 : -1;
        const x = side * (30 + (i % 3) * 12);
        const z = Math.floor(i / 2) * 15;
        const height = 5 + (i % 2) * 3; // Shorter, storefront style

        return (
          <group key={project.id} position={[x, 0, z]}>
            <Building
              position={[0, 0, 0]}
              height={height}
              variant="storefront"
              label={project.name}
              logoPath={project.logoPath}
              onClick={() => setSelectedProject(project)}
              color=""
              emissive=""
            />

            {/* Label */}
            <Text
              position={[0, height + 3, 0]}
              fontSize={0.8}
              color="#ffffff"
              outlineWidth={0.05}
              outlineColor="#000000"
              anchorX="center"
              anchorY="bottom"
              maxWidth={9}
              depthOffset={0}
            >
              {project.name}
            </Text>
          </group>
        );
      })}

      {/* Integration Avenue Gantry */}
      <TrafficGantry
        text="INTEGRATION AVENUE"
        color="#ff006e"
        position={[0, 0, 50]}
      />
    </group>
  );
}

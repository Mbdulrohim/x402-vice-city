"use client";

import { Text } from "@react-three/drei";
import { getInfrastructure } from "@/data/ecosystem";
import { Building } from "@/components/buildings/Building";
import { useCityStore } from "@/store/cityStore";

export function BuildersDistrict() {
  const infrastructure = getInfrastructure();
  const { setSelectedProject } = useCityStore();

  return (
    <group position={[0, 0, 0]}>
      {/* Create a grid of tech campus buildings */}
      {infrastructure.map((project, i) => {
        const side = i % 2 === 0 ? 1 : -1;
        const x = side * (40 + (i % 3) * 16);
        const z = Math.floor(i / 2) * 20;
        const height = 6 + (i % 3) * 3; // Shorter buildings, industrial style

        return (
          <group key={project.id} position={[x, 0, z]}>
            <Building
              position={[0, 0, 0]}
              height={height}
              variant="campus"
              label={project.name}
              logoPath={project.logoPath}
              onClick={() => setSelectedProject(project)}
              color=""
              emissive=""
            />

            {/* Label */}
            <Text
              position={[0, height + 3, 0]}
              fontSize={0.7}
              color="#ffffff"
              outlineWidth={0.05}
              outlineColor="#000000"
              anchorX="center"
              anchorY="bottom"
              maxWidth={10}
            >
              {project.name}
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
        BUILDER'S DISTRICT
      </Text>
    </group>
  );
}

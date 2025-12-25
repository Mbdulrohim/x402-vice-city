"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { getFacilitators } from "@/data/ecosystem";
import { Building } from "@/components/buildings/Building";
import { useCityStore } from "@/store/cityStore";
import * as THREE from "three";

export function FacilitatorPlaza() {
  const groupRef = useRef<THREE.Group>(null);
  const facilitators = getFacilitators();
  const { setSelectedProject } = useCityStore();

  // Gentle rotation animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  // PayAI is the first facilitator
  const payai = facilitators[0];

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* PayAI Tower - Left side */}
      <Building
        position={[-30, 0, 0]}
        height={30}
        variant="tower"
        label="PayAI"
        logoPath={payai.logoPath}
        onClick={() => setSelectedProject(payai)}
        // Deprecated props removed
        color=""
        emissive=""
      />

      {/* PayAI Logo/Label on tower */}
      <Text
        position={[-30, 36, 0]}
        fontSize={3}
        color="#ffffff"
        outlineWidth={0.1}
        outlineColor="#000000"
        anchorX="center"
        anchorY="bottom"
      >
        PayAI
      </Text>

      {/* Other facilitator buildings split left/right */}
      {facilitators.slice(1).map((facilitator, i) => {
        // Distribute left and right of the road (road is width 40, so x < -25 or x > 25)
        const side = i % 2 === 0 ? 1 : -1;
        const x = side * (35 + (i % 3) * 10);
        const z = Math.floor(i / 2) * 15 - 10;
        const height = 12 + (i % 3) * 4;
        const variant = i % 2 === 0 ? "skyscraper" : "tower";

        return (
          <group key={facilitator.id} position={[x, 0, z]}>
            <Building
              position={[0, 0, 0]}
              height={height}
              variant={variant as "tower" | "skyscraper"}
              label={facilitator.name}
              logoPath={facilitator.logoPath}
              onClick={() => setSelectedProject(facilitator)}
              color=""
              emissive=""
            />

            {/* Building label */}
            <Text
              position={[0, height + 4, 0]}
              fontSize={1}
              color="#ffffff"
              outlineWidth={0.05}
              outlineColor="#000000"
              anchorX="center"
              anchorY="bottom"
              maxWidth={10}
            >
              {facilitator.name.replace(" Facilitator", "")}
            </Text>
          </group>
        );
      })}

      {/* Plaza label */}
      <Text
        position={[0, 0.1, 50]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={6}
        color="#333333"
        anchorX="center"
        anchorY="middle"
      >
        FACILITATOR PLAZA
      </Text>
    </group>
  );
}

"use client";

import { Cloud } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export function FloatingClouds() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Slow drift of the entire cloud layer
      groupRef.current.position.x += delta * 1;

      // Reset if too far
      if (groupRef.current.position.x > 500) {
        groupRef.current.position.x = -500;
      }
    }
  });

  return (
    <group ref={groupRef} position={[0, 100, 0]}>
      {/* Scattered clouds */}
      <Cloud
        position={[-300, 20, -500]}
        opacity={0.5}
        speed={0.4}
        segments={20}
        bounds={[50, 10, 50]}
      />
      <Cloud
        position={[300, 10, -300]}
        opacity={0.5}
        speed={0.4}
        segments={20}
        bounds={[50, 10, 50]}
      />
      <Cloud
        position={[0, 40, -800]}
        opacity={0.6}
        speed={0.3}
        segments={30}
        bounds={[100, 20, 100]}
      />
      <Cloud
        position={[-150, 15, 200]}
        opacity={0.4}
        speed={0.5}
        segments={15}
        bounds={[30, 5, 30]}
      />
      <Cloud
        position={[150, 25, 600]}
        opacity={0.4}
        speed={0.5}
        segments={15}
        bounds={[40, 5, 40]}
      />
    </group>
  );
}

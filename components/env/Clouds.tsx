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
      {/* Massive ambient cloud layer */}
      <Cloud
        position={[0, 100, -500]}
        opacity={0.8}
        speed={0.1}
        segments={100}
        bounds={[3000, 400, 3000]}
        volume={80}
        color="#c0e6ff"
      />

      {/* Foreground heavy clouds */}
      <Cloud
        position={[-500, 50, 200]}
        opacity={0.7}
        speed={0.15}
        segments={60}
        bounds={[1000, 200, 1000]}
        volume={50}
      />
      <Cloud
        position={[500, 80, 500]}
        opacity={0.7}
        speed={0.15}
        segments={60}
        bounds={[1000, 200, 1000]}
        volume={50}
      />
    </group>
  );
}

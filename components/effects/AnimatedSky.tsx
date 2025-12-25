"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function AnimatedSky() {
  const skyRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (skyRef.current) {
      // Subtle rotation for dynamic feel
      skyRef.current.rotation.y += 0.0001;
    }
  });

  return (
    <group>
      {/* Gradient Sky Sphere */}
      <mesh ref={skyRef}>
        <sphereGeometry args={[450, 32, 32]} />
        <meshBasicMaterial
          side={THREE.BackSide}
          color="#0a0a1a"
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Atmospheric glow layers */}
      <mesh>
        <sphereGeometry args={[440, 32, 32]} />
        <meshBasicMaterial
          side={THREE.BackSide}
          color="#1a1a3e"
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Horizon glow */}
      <mesh position={[0, -50, 0]}>
        <ringGeometry args={[200, 300, 64]} />
        <meshBasicMaterial
          color="#00d9ff"
          transparent
          opacity={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

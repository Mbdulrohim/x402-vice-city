"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Monorail() {
  const trainRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (trainRef.current) {
      trainRef.current.position.z += 30 * delta; // Fast train

      // Loop
      if (trainRef.current.position.z > 2000) {
        trainRef.current.position.z = -800;
      }
    }
  });

  return (
    <group>
      {/* The Track (Raised) - Moved further out to avoid Stadium */}
      <mesh position={[150, 25, 600]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[2, 2, 3000, 8]} />
        <meshStandardMaterial color="#333" />
      </mesh>

      {/* Support Pillars for Track */}
      {Array.from({ length: 30 }).map((_, i) => (
        <mesh key={i} position={[150, 12.5, -800 + i * 100]}>
          <cylinderGeometry args={[1, 1.5, 25, 8]} />
          <meshStandardMaterial color="#444" />
        </mesh>
      ))}

      {/* The Train */}
      <group ref={trainRef} position={[150, 28, -800]}>
        {/* Train Engine */}
        <mesh position={[0, 0, 10]}>
          <boxGeometry args={[4, 3, 12]} />
          <meshStandardMaterial
            color="#00d9ff"
            emissive="#00d9ff"
            emissiveIntensity={0.5}
          />
        </mesh>

        {/* Train Cars */}
        {Array.from({ length: 4 }).map((_, i) => (
          <mesh key={i} position={[0, 0, -i * 13]}>
            <boxGeometry args={[4, 3, 12]} />
            <meshStandardMaterial color="#ffffff" metalness={0.8} />
          </mesh>
        ))}

        {/* Train Headlight */}
        <pointLight
          position={[0, 0, 17]}
          color="#00d9ff"
          intensity={5}
          distance={50}
        />
      </group>
    </group>
  );
}

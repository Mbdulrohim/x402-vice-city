"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Cylinder } from "@react-three/drei";
import * as THREE from "three";

export function PayAIDome(props: any) {
  const domeRef = useRef<THREE.Mesh>(null);
  const logoRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    if (domeRef.current) {
      // Pulsing effect on the dome opacity/emissive
      const material = domeRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 0.5 + Math.sin(t * 1.5) * 0.2;
    }

    if (logoRef.current) {
      // Float logo (no rotation)
      logoRef.current.position.y = 45 + Math.sin(t) * 2;
    }

    if (ringRef.current) {
      // Spin the energy ring
      ringRef.current.rotation.z = -t * 0.2;
    }
  });

  return (
    <group {...props}>
      {/* Stadium Bowl - Exterior */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI, 0, 0]}>
        <cylinderGeometry args={[55, 45, 25, 64, 1, true]} />
        <meshPhysicalMaterial
          color="#1a1a40"
          metalness={0.8}
          roughness={0.2}
          transmission={0.2}
          thickness={1}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Stadium Rim / Roof */}
      <mesh position={[0, 12.5, 0]}>
        <ringGeometry args={[45, 55, 64]} />
        <meshStandardMaterial color="#ffffff" side={THREE.DoubleSide} />
      </mesh>

      {/* Interior Field Glow */}
      <pointLight
        position={[0, 10, 0]}
        color="#00d9ff"
        intensity={5}
        distance={100}
      />

      {/* Floating Holographic Logo Group */}
      <group ref={logoRef} position={[0, 45, 0]}>
        {/* Text Logo */}
        <Text
          position={[0, 0, 0]}
          fontSize={10}
          anchorX="center"
          anchorY="middle"
          depthOffset={0}
          letterSpacing={0.05}
        >
          PayAI
          <meshStandardMaterial
            color="#00d9ff"
            emissive="#00d9ff"
            emissiveIntensity={2}
            toneMapped={false}
          />
        </Text>

        {/* Subtitle */}
        <Text
          position={[0, -6, 0]}
          fontSize={2.5}
          anchorX="center"
          anchorY="middle"
          color="#ffffff"
          letterSpacing={0.2}
          depthOffset={0}
        >
          STADIUM
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={1}
            toneMapped={false}
          />
        </Text>
      </group>

      {/* Base Platform */}
      <mesh
        ref={ringRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -12, 0]}
      >
        <circleGeometry args={[65, 64]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.8} />
      </mesh>
    </group>
  );
}

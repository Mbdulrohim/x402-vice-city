"use client";

import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

export function PlazaClock() {
  const groupRef = useRef<THREE.Group>(null);
  const hourHandRef = useRef<THREE.Mesh>(null);
  const minuteHandRef = useRef<THREE.Mesh>(null);
  const secondHandRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    const now = new Date();

    // Calculate angles (in radians)
    // -Math.PI / 2 because mesh points up by default, we need to correct rotation origin or start from 12 o'clock
    // Actually, let's just rotate standard meshes

    const seconds = now.getUTCSeconds() + now.getMilliseconds() / 1000;
    const minutes = now.getUTCMinutes() + seconds / 60;
    const hours = (now.getUTCHours() % 12) + minutes / 60;

    if (secondHandRef.current) {
      secondHandRef.current.rotation.z = -seconds * (Math.PI / 30);
    }
    if (minuteHandRef.current) {
      minuteHandRef.current.rotation.z = -minutes * (Math.PI / 30);
    }
    if (hourHandRef.current) {
      hourHandRef.current.rotation.z = -hours * (Math.PI / 6);
    }

    if (groupRef.current) {
      // Slow rotation of decorative outer rings
      groupRef.current.rotation.z += 0.002;
    }
  });

  return (
    <group position={[0, 55, -350]}>
      {/* Clock Aura / "Sun" Glow */}
      <pointLight color="#00d9ff" intensity={5} distance={500} decay={2} />
      <mesh position={[0, 0, -1]}>
        <circleGeometry args={[80, 64]} />
        <meshBasicMaterial color="#00d9ff" transparent opacity={0.3} />
      </mesh>

      <mesh>
        <ringGeometry args={[45, 50, 64]} />
        <meshStandardMaterial
          color="#00d9ff"
          emissive="#00d9ff"
          emissiveIntensity={2}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      <mesh>
        <circleGeometry args={[44, 64]} />
        <meshStandardMaterial
          color="#001133"
          emissive="#001133"
          emissiveIntensity={0.8}
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>

      {/* Hour Markers */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * Math.PI) / 6;
        const x = Math.sin(angle) * 38;
        const y = Math.cos(angle) * 38;
        const isCardinal = i % 3 === 0;

        return (
          <mesh
            key={`marker-${i}`}
            position={[x, y, 0.1]}
            rotation={[0, 0, -angle]}
          >
            <planeGeometry args={[isCardinal ? 2 : 1, isCardinal ? 6 : 4]} />
            <meshStandardMaterial
              color={isCardinal ? "#00d9ff" : "#ffffff"}
              emissive={isCardinal ? "#00d9ff" : "#ffffff"}
              emissiveIntensity={isCardinal ? 2 : 1}
            />
          </mesh>
        );
      })}

      {/* Hands Container - Center Pivot */}
      <group position={[0, 0, 0.2]}>
        {/* Hour Hand */}
        <group ref={hourHandRef}>
          <mesh position={[0, 10, 0]}>
            <planeGeometry args={[3, 20]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#ffffff"
              emissiveIntensity={1.5}
            />
          </mesh>
        </group>

        {/* Minute Hand */}
        <group ref={minuteHandRef}>
          <mesh position={[0, 15, 0.1]}>
            <planeGeometry args={[2, 30]} />
            <meshStandardMaterial
              color="#00d9ff"
              emissive="#00d9ff"
              emissiveIntensity={1.5}
            />
          </mesh>
        </group>

        {/* Second Hand */}
        <group ref={secondHandRef}>
          <mesh position={[0, 15, 0.2]}>
            <planeGeometry args={[0.5, 38]} />
            <meshStandardMaterial
              color="#ff00cc"
              emissive="#ff00cc"
              emissiveIntensity={2}
            />
          </mesh>
        </group>

        {/* Center Cap */}
        <mesh position={[0, 0, 0.3]}>
          <circleGeometry args={[2, 32]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" />
        </mesh>
      </group>

      {/* Decorative Rotating Elements */}
      <group ref={groupRef}>
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <mesh
            key={angle}
            position={[
              Math.cos((angle * Math.PI) / 180) * 35,
              Math.sin((angle * Math.PI) / 180) * 35,
              0.1,
            ]}
          >
            <circleGeometry args={[1.5, 16]} />
            <meshBasicMaterial color="#ff00cc" />
          </mesh>
        ))}
      </group>

      <Text
        position={[0, -20, 0.2]}
        fontSize={8}
        color="#00d9ff"
        anchorX="center"
        anchorY="middle"
        depthOffset={0}
      >
        UTC
        <meshStandardMaterial
          color="#00d9ff"
          emissive="#00d9ff"
          emissiveIntensity={2}
          toneMapped={false}
        />
      </Text>

      {/* Grid pattern overlay */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh
          key={`line-${i}`}
          position={[0, 0, 0.01]}
          rotation={[0, 0, (i * Math.PI) / 8]}
        >
          <planeGeometry args={[0.1, 80]} />
          <meshBasicMaterial color="#00d9ff" opacity={0.05} transparent />
        </mesh>
      ))}
    </group>
  );
}

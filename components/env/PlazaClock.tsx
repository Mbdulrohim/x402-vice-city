"use client";

import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

export function PlazaClock() {
  const [time, setTime] = useState("--:--:--");
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getUTCHours()).padStart(2, "0");
      const minutes = String(now.getUTCMinutes()).padStart(2, "0");
      const seconds = String(now.getUTCSeconds()).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime(); // Initial update
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = clock.elapsedTime * 0.1;
    }
  });

  return (
    <group position={[0, 55, -350]}>
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
          color="#0a0a0a"
          emissive="#001a33"
          emissiveIntensity={0.5}
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>

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

      <Text
        position={[0, 0, 0.2]}
        fontSize={14}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.05}
        depthOffset={0}
      >
        {time}
        <meshStandardMaterial
          color="#ffffff"
          emissive="#00d9ff"
          emissiveIntensity={1}
          toneMapped={false}
        />
      </Text>

      {Array.from({ length: 8 }).map((_, i) => (
        <mesh
          key={`line-${i}`}
          position={[0, 0, 0.01]}
          rotation={[0, 0, (i * Math.PI) / 8]}
        >
          <planeGeometry args={[0.1, 35]} />
          <meshBasicMaterial color="#00d9ff" opacity={0.1} transparent />
        </mesh>
      ))}
    </group>
  );
}

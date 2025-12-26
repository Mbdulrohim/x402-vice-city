"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Car({
  initialZ,
  speed,
  laneX,
  color,
}: {
  initialZ: number;
  speed: number;
  laneX: number;
  color: string;
}) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.position.z += speed * delta * 60; // Move forward

      // Loop resetting
      if (meshRef.current.position.z > 1600) {
        meshRef.current.position.z = -200;
      } else if (meshRef.current.position.z < -200) {
        meshRef.current.position.z = 1600;
      }
    }
  });

  return (
    <group ref={meshRef} position={[laneX, 1, initialZ]}>
      {/* Car Body (Cybertruck-ish) */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[2.5, 1.2, 5]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Cabin/Glass */}
      <mesh position={[0, 1.2, 0.5]}>
        <boxGeometry args={[2.2, 0.8, 2.5]} />
        <meshStandardMaterial color="#111" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Headlights (Front) */}
      <mesh position={[0, 0.5, 2.6]}>
        <boxGeometry args={[2.2, 0.2, 0.1]} />
        <meshBasicMaterial color="#ccff00" /> {/* Yellow/White headlights */}
      </mesh>

      {/* Taillights (Rear) */}
      <mesh position={[0, 0.8, -2.6]}>
        <boxGeometry args={[2.5, 0.2, 0.1]} />
        <meshBasicMaterial color="#ff0000" /> {/* Red taillights */}
      </mesh>

      {/* Underglow - Fake Glow using Plane */}
      <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[3, 6]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

export function MovingTraffic() {
  // Generate random cars
  const cars = useMemo(() => {
    const items = [];
    const colors = ["#00d9ff", "#ff00cc", "#ffffff", "#ffaa00"];
    const lanes = [-8, -4, 4, 8]; // 4 lanes

    for (let i = 0; i < 20; i++) {
      const lane = lanes[Math.floor(Math.random() * lanes.length)];
      // Cars in negative x lanes move towards camera (positive Z), positive x lanes move away (positive Z)
      // Actually standard road: right side drives forward, left side comes back?
      // Let's make right lanes (positive X) go forward (+Z) and left lanes (-X) go backward (-Z)
      const direction = lane > 0 ? 1 : -1;

      items.push({
        id: i,
        initialZ: Math.random() * 1800 - 200, // Spread across the whole road length
        speed: (0.5 + Math.random() * 0.5) * direction, // Random speed
        laneX: lane,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    return items;
  }, []);

  return (
    <group>
      {cars.map((car) => (
        <Car
          key={car.id}
          initialZ={car.initialZ}
          speed={car.speed}
          laneX={car.laneX}
          color={car.color}
        />
      ))}
    </group>
  );
}

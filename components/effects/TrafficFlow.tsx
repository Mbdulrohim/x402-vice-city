"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function TrafficFlow() {
  const particlesRef = useRef<THREE.Points>(null);

  const particleCount = 200;

  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    for (let i = 0; i < particleCount; i++) {
      // Spread particles across the city
      positions[i * 3] = (Math.random() - 0.5) * 200; // x
      positions[i * 3 + 1] = Math.random() * 3 + 0.5; // y (street level)
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200; // z

      // Random velocities
      velocities.push({
        x: (Math.random() - 0.5) * 0.2,
        z: (Math.random() - 0.5) * 0.2,
      });
    }

    return { positions, velocities };
  }, []);

  useFrame(() => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position
        .array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        // Move particles
        positions[i * 3] += particles.velocities[i].x;
        positions[i * 3 + 2] += particles.velocities[i].z;

        // Wrap around boundaries
        if (Math.abs(positions[i * 3]) > 100) {
          positions[i * 3] *= -1;
        }
        if (Math.abs(positions[i * 3 + 2]) > 100) {
          positions[i * 3 + 2] *= -1;
        }
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
          count={particleCount}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.3}
        color="#00d9ff"
        transparent
        opacity={0.6}
        sizeAttenuation={true}
      />
    </points>
  );
}

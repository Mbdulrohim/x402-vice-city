"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function AnimatedBackground() {
  const starsRef = useRef<THREE.Points>(null);
  const gridRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (starsRef.current) {
      starsRef.current.rotation.y = clock.elapsedTime * 0.02;
      starsRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.05) * 0.1;
    }
    if (gridRef.current) {
      gridRef.current.position.z = (clock.elapsedTime * 10) % 100;
    }
  });

  // Create stars
  const starCount = 1000;
  const starPositions = new Float32Array(starCount * 3);
  const starColors = new Float32Array(starCount * 3);

  for (let i = 0; i < starCount; i++) {
    const i3 = i * 3;
    // Distribute stars in a large sphere around the scene
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const radius = 500 + Math.random() * 500;

    starPositions[i3] = radius * Math.sin(phi) * Math.cos(theta);
    starPositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta) + 200;
    starPositions[i3 + 2] = radius * Math.cos(phi) - 800;

    // Random star colors (cyan, pink, white)
    const colorChoice = Math.random();
    if (colorChoice < 0.33) {
      // Cyan
      starColors[i3] = 0;
      starColors[i3 + 1] = 0.85;
      starColors[i3 + 2] = 1;
    } else if (colorChoice < 0.66) {
      // Pink
      starColors[i3] = 1;
      starColors[i3 + 1] = 0;
      starColors[i3 + 2] = 0.8;
    } else {
      // White
      starColors[i3] = 1;
      starColors[i3 + 1] = 1;
      starColors[i3 + 2] = 1;
    }
  }

  return (
    <group>
      <points ref={starsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={starCount}
            array={starPositions}
            itemSize={3}
            args={[starPositions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            count={starCount}
            array={starColors}
            itemSize={3}
            args={[starColors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={2}
          sizeAttenuation
          vertexColors
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {Array.from({ length: 20 }).map((_, i) => (
        <mesh
          key={`horizon-${i}`}
          position={[0, 0, -800 + i * 50]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[2000, 1]} />
          <meshBasicMaterial
            color="#ff00cc"
            transparent
            opacity={0.15}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}

      {Array.from({ length: 40 }).map((_, i) => (
        <mesh
          key={`vertical-${i}`}
          position={[-1000 + i * 50, 20, -400]}
          rotation={[0, 0, 0]}
        >
          <planeGeometry args={[1, 100]} />
          <meshBasicMaterial
            color="#00d9ff"
            transparent
            opacity={0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}

      <mesh
        ref={gridRef}
        position={[0, -0.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[2000, 100]} />
        <meshBasicMaterial
          color="#ff00cc"
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>

      <mesh position={[0, 0, -800]} rotation={[0, 0, 0]}>
        <planeGeometry args={[3000, 1]} />
        <meshBasicMaterial color="#ff5500" transparent opacity={0.8} />
      </mesh>

      {[
        { x: -400, scale: 1.2, z: -600 },
        { x: -100, scale: 0.8, z: -700 },
        { x: 200, scale: 1.5, z: -650 },
        { x: 500, scale: 1.0, z: -720 },
      ].map((mountain, i) => (
        <mesh key={`mountain-${i}`} position={[mountain.x, 0, mountain.z]}>
          <coneGeometry args={[80 * mountain.scale, 150 * mountain.scale, 4]} />
          <meshBasicMaterial color="#1a0033" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
}

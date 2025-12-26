"use client";

import { useMemo } from "react";
import * as THREE from "three";

const trunkCurve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(1, 4, 1),
  new THREE.Vector3(2, 8, 2),
  new THREE.Vector3(2.5, 12, 2.5),
]);

const trunkGeometry = new THREE.TubeGeometry(trunkCurve, 20, 0.4, 8, false);

export function PalmTree({
  position,
  scale = 1,
  rotation = [0, 0, 0],
}: {
  position: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
}) {
  const leaves = useMemo(() => {
    return Array.from({ length: 9 }).map((_, i) => ({
      rotation: [Math.PI / 4, (i / 9) * Math.PI * 2, 0],
    }));
  }, []);

  return (
    <group
      position={position}
      scale={[scale, scale, scale]}
      rotation={rotation as any}
    >
      {/* Trunk - Using a TubeGeometry for curve, or simple cylinders for ease.
          Let's use a simple detailed cylinder bent via rotation logic or just a Tube.
          Tube is easy. */}
      <mesh castShadow geometry={trunkGeometry}>
        <meshStandardMaterial color="#8B4513" roughness={0.8} />
      </mesh>

      {/* Fronds (Leaves) Top */}
      <group position={[2.5, 11.5, 2.5]}>
        {leaves.map((leaf, i) => (
          <group key={i} rotation={leaf.rotation as any}>
            {/* Leaf Blade */}
            <mesh position={[0, 0.5, 2]} rotation={[-0.5, 0, 0]} castShadow>
              {/* Curved leaf shape approximated by scaling */}
              <boxGeometry args={[0.2, 0.1, 5]} />
              <meshStandardMaterial color="#2d9e26" />
            </mesh>
          </group>
        ))}
        {/* Coconuts */}
        <group position={[0, -0.5, 0]}>
          <mesh position={[0.4, 0, 0]}>
            <sphereGeometry args={[0.4]} />
            <meshStandardMaterial color="#352315" />
          </mesh>
          <mesh position={[-0.4, 0, 0]}>
            <sphereGeometry args={[0.4]} />
            <meshStandardMaterial color="#352315" />
          </mesh>
          <mesh position={[0, 0, 0.4]}>
            <sphereGeometry args={[0.4]} />
            <meshStandardMaterial color="#352315" />
          </mesh>
        </group>
      </group>
    </group>
  );
}

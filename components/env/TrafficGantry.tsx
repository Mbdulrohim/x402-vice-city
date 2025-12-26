"use client";

import { Text } from "@react-three/drei";

interface TrafficGantryProps {
  text: string;
  color: string; // Neon accent color
  position: [number, number, number];
}

export function TrafficGantry({ text, color, position }: TrafficGantryProps) {
  const width = 40; // Road width is 40
  const height = 14; // Clearance height
  const poleRadius = 0.8;
  const trussHeight = 1.5;

  return (
    <group position={position}>
      {/* Pillars */}
      {[-1, 1].map((side) => (
        <mesh
          key={side}
          position={[side * (width / 2 + 4), height / 2, 0]}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[2, height, 2]} />
          <meshStandardMaterial color="#222" roughness={0.7} metalness={0.5} />
        </mesh>
      ))}

      {/* Horizontal Truss */}
      <mesh position={[0, height, 0]} castShadow receiveShadow>
        <boxGeometry args={[width + 12, trussHeight, 2]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.7} metalness={0.8} />
      </mesh>

      {/* Sign Board Background */}
      <mesh position={[0, height + 3, 0.6]}>
        <boxGeometry args={[30, 5, 0.2]} />
        <meshStandardMaterial color="#000" />
      </mesh>

      {/* Sign Border Glow */}
      <mesh position={[0, height + 3, 0.55]}>
        <boxGeometry args={[30.5, 5.5, 0.1]} />
        <meshBasicMaterial color={color} />
      </mesh>

      {/* Text on Sign */}
      <Text
        position={[0, height + 3, 0.71]}
        fontSize={2.5}
        color={color}
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.1}
        outlineWidth={0.05}
        outlineColor="#000000"
      >
        {text.toUpperCase()}
      </Text>

      {/* Warning Lights atop pillars */}
      {[-1, 1].map((side) => (
        <mesh
          key={`light-${side}`}
          position={[side * (width / 2 + 4), height + 0.5, 0]}
        >
          <sphereGeometry args={[0.4]} />
          <meshStandardMaterial
            color="red"
            emissive="red"
            emissiveIntensity={2}
          />
        </mesh>
      ))}
    </group>
  );
}

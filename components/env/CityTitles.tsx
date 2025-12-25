import { Text } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export function CityTitles() {
  const skyRef = useRef<THREE.Mesh>(null);

  // Optional: Gentle float animation for sky title
  useFrame(({ clock }) => {
    if (skyRef.current) {
      skyRef.current.position.y = 80 + Math.sin(clock.elapsedTime * 0.5) * 2;
    }
  });

  return (
    <group>
      {/* Sky Title - Massive, on horizon */}
      <Text
        ref={skyRef}
        position={[0, 80, -250]}
        fontSize={60}
        font="https://fonts.gstatic.com/s/carterone/v17/q5uCsoe5IOB2-pXcx9gxbw.woff" // Using Google Fonts direct URL for Carter One (or similar heavy font)
        anchorX="center"
        anchorY="middle"
      >
        x402 CITY
        <meshStandardMaterial
          color="#ff00cc"
          emissive="#ff00cc"
          emissiveIntensity={2}
          toneMapped={false}
        />
      </Text>

      {/* Ground Title - Embedded in road */}
      <group position={[0, 0.3, 50]} rotation={[-Math.PI / 2, 0, 0]}>
        <Text
          fontSize={15}
          font="https://fonts.gstatic.com/s/carterone/v17/q5uCsoe5IOB2-pXcx9gxbw.woff"
          anchorX="center"
          anchorY="middle"
        >
          x402 PAYMENT PROTOCOL
          <meshStandardMaterial
            color="#00d9ff"
            emissive="#00d9ff"
            emissiveIntensity={1}
            toneMapped={false}
          />
        </Text>
      </group>
    </group>
  );
}

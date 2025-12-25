import { useRef, useState } from "react";
import { ThreeEvent } from "@react-three/fiber";
import { Image, RoundedBox } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import * as THREE from "three";

interface BuildingProps {
  position: [number, number, number];
  height: number;
  variant?: "tower" | "skyscraper" | "campus" | "storefront";
  color: string;
  emissive: string;
  label: string;
  logoPath?: string;
  onClick?: () => void;
}

export function Building({
  position,
  height,
  variant = "tower",
  color,
  emissive,
  label,
  logoPath,
  onClick,
}: BuildingProps) {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  const { scale, emissiveInt } = useSpring({
    scale: active ? 0.95 : hovered ? 1.05 : 1,
    emissiveInt: hovered ? 0.8 : 0.3,
    config: { mass: 1, tension: 400, friction: 30 }, // Snappy spring
  });

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    setActive(true);
    setTimeout(() => setActive(false), 150); // Quick bounce back
    if (onClick) onClick();
  };

  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setHovered(true);
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    setHovered(false);
    document.body.style.cursor = "auto";
  };

  // Fixed Windows helper
  const Windows = ({
    bottomY,
    buildingHeight,
    buildingWidth,
    buildingDepth,
  }: {
    bottomY: number;
    buildingHeight: number;
    buildingWidth: number;
    buildingDepth: number;
  }) => {
    const windows = [];
    const windowHeight = 1.5;
    const floorHeight = 3;
    const floors = Math.floor(buildingHeight / floorHeight);
    const windowsPerFloor = Math.floor(buildingWidth / 1.5);

    for (let floor = 0; floor < floors; floor++) {
      for (let window = 0; window < windowsPerFloor; window++) {
        const x = (window - windowsPerFloor / 2) * 1.2 + 0.6; // Center horizontally
        const y = bottomY + floor * floorHeight + windowHeight / 2 + 1; // Start from bottomY, add spacing

        // Front face
        windows.push(
          <mesh
            key={`front-${floor}-${window}`}
            position={[x, y, buildingDepth / 2 + 0.05]}
          >
            <planeGeometry args={[0.8, windowHeight]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#00d9ff"
              emissiveIntensity={0.5}
              transparent
              opacity={0.6}
            />
          </mesh>
        );

        // Back face
        windows.push(
          <mesh
            key={`back-${floor}-${window}`}
            position={[x, y, -buildingDepth / 2 - 0.05]}
            rotation={[0, Math.PI, 0]}
          >
            <planeGeometry args={[0.8, windowHeight]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#00d9ff"
              emissiveIntensity={0.5}
              transparent
              opacity={0.6}
            />
          </mesh>
        );
      }
    }
    return <>{windows}</>;
  };

  // Helper to render logo - Fixed Z position
  const Logo = ({ y, z }: { y: number; z: number }) => {
    if (!logoPath) return null;
    return (
      <group position={[0, y, z]}>
        {/* Backing plate for visibility */}
        <mesh position={[0, 0, -0.01]}>
          <planeGeometry args={[6.5, 6.5]} />
          <meshStandardMaterial color="#000000" roughness={1} />
        </mesh>
        <Image
          url={logoPath}
          position={[0, 0, 0.05]} // Slightly projected
          scale={[6, 6]}
          transparent
          opacity={1}
        />
      </group>
    );
  };

  // Animated Material Component to handle spring values
  const AnimatedStandardMaterial = animated("meshStandardMaterial");

  return (
    <animated.group
      ref={meshRef}
      position={position}
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      scale={scale}
    >
      {variant === "tower" && (
        <>
          <RoundedBox
            args={[8, height * 0.7, 8]}
            radius={0.15}
            smoothness={4}
            position={[0, height * 0.35, 0]}
            castShadow
          >
            <AnimatedStandardMaterial
              color={color}
              emissive={emissive}
              emissiveIntensity={emissiveInt}
              metalness={0.8}
              roughness={0.2}
            />
          </RoundedBox>
          <Windows
            bottomY={0}
            buildingHeight={height * 0.7}
            buildingWidth={8}
            buildingDepth={8}
          />
          <Logo y={height * 0.7 - 5} z={4.1} />

          {/* Tapered top */}
          <mesh position={[0, height * 0.85, 0]} castShadow>
            <cylinderGeometry args={[4, 4, height * 0.3, 6]} />
            <AnimatedStandardMaterial
              color={color}
              emissive={emissive}
              emissiveIntensity={emissiveInt}
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
        </>
      )}

      {variant === "skyscraper" && (
        <>
          {/* Base */}
          <RoundedBox
            args={[6, height * 0.2, 6]}
            radius={0.15}
            smoothness={4}
            position={[0, height * 0.1, 0]}
            castShadow
          >
            <AnimatedStandardMaterial
              color={color}
              emissive={emissive}
              emissiveIntensity={emissiveInt}
              metalness={0.7}
              roughness={0.3}
            />
          </RoundedBox>
          <Windows
            bottomY={0}
            buildingHeight={height * 0.2}
            buildingWidth={6}
            buildingDepth={6}
          />

          {/* Mid section */}
          <RoundedBox
            args={[5, height * 0.5, 5]}
            radius={0.15}
            smoothness={4}
            position={[0, height * 0.45, 0]}
            castShadow
          >
            <AnimatedStandardMaterial
              color={color}
              emissive={emissive}
              emissiveIntensity={emissiveInt}
              metalness={0.8}
              roughness={0.2}
            />
          </RoundedBox>
          <Windows
            bottomY={height * 0.2}
            buildingHeight={height * 0.5}
            buildingWidth={5}
            buildingDepth={5}
          />

          <Logo y={height * 0.6} z={2.6} />

          {/* Top */}
          <RoundedBox
            args={[4, height * 0.3, 4]}
            radius={0.15}
            smoothness={4}
            position={[0, height * 0.85, 0]}
            castShadow
          >
            <AnimatedStandardMaterial
              color={color}
              emissive={emissive}
              emissiveIntensity={emissiveInt}
              metalness={0.9}
              roughness={0.1}
            />
          </RoundedBox>
        </>
      )}

      {variant === "campus" && (
        <>
          <RoundedBox
            args={[10, height, 7]}
            radius={0.15}
            smoothness={4}
            position={[0, height / 2, 0]}
            castShadow
          >
            <AnimatedStandardMaterial
              color={color}
              emissive={emissive}
              emissiveIntensity={emissiveInt}
              metalness={0.5}
              roughness={0.5}
            />
          </RoundedBox>
          <Windows
            bottomY={0}
            buildingHeight={height}
            buildingWidth={10}
            buildingDepth={7}
          />
          <Logo y={height * 0.8} z={3.6} />

          <RoundedBox
            args={[3, height * 0.6, 5]}
            radius={0.15}
            smoothness={4}
            position={[-6, height * 0.3, 0]}
            castShadow
          >
            <AnimatedStandardMaterial
              color={color}
              emissive={emissive}
              emissiveIntensity={emissiveInt}
              metalness={0.6}
              roughness={0.4}
            />
          </RoundedBox>
          <RoundedBox
            args={[3, height * 0.6, 5]}
            radius={0.15}
            smoothness={4}
            position={[6, height * 0.3, 0]}
            castShadow
          >
            <AnimatedStandardMaterial
              color={color}
              emissive={emissive}
              emissiveIntensity={emissiveInt}
              metalness={0.6}
              roughness={0.4}
            />
          </RoundedBox>
        </>
      )}

      {variant === "storefront" && (
        <>
          <RoundedBox
            args={[10, height, 5]}
            radius={0.15}
            smoothness={4}
            position={[0, height / 2, 0]}
            castShadow
          >
            <AnimatedStandardMaterial
              color={color}
              emissive={emissive}
              emissiveIntensity={emissiveInt}
              metalness={0.4}
              roughness={0.6}
            />
          </RoundedBox>
          <Windows
            bottomY={2} // Start windows above "door" level
            buildingHeight={height}
            buildingWidth={10}
            buildingDepth={5}
          />

          {/* Awning */}
          <mesh position={[0, height * 0.4, 3]} rotation={[Math.PI / 6, 0, 0]}>
            <boxGeometry args={[10.5, 0.2, 2]} />
            <meshStandardMaterial
              color={emissive}
              emissive={emissive}
              emissiveIntensity={0.8}
            />
          </mesh>
          <Logo y={height * 0.7} z={2.6} />
        </>
      )}
    </animated.group>
  );
}

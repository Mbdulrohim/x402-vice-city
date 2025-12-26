"use client";

import { useRef, useEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { FacilitatorPlaza } from "@/components/districts/FacilitatorPlaza";
import { ServiceSkyline } from "@/components/districts/ServiceSkyline";
import { BuildersDistrict } from "@/components/districts/BuildersDistrict";
import { IntegrationAvenue } from "@/components/districts/IntegrationAvenue";
import { PalmTree } from "@/components/env/PalmTree";
import { AnimatedBackground } from "@/components/env/AnimatedBackground";
import { PlazaClock } from "@/components/env/PlazaClock";
import { PayAIDome } from "@/components/buildings/PayAIDome";
import { MovingTraffic } from "@/components/env/MovingTraffic";
import { Monorail } from "@/components/env/Monorail";
import { FloatingClouds } from "@/components/env/Clouds";
import { useCityStore } from "@/store/cityStore";
import * as THREE from "three";
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

// Camera controller that responds to district changes
function CameraController() {
  const { camera, size } = useThree();
  const controlsRef = useRef<any>(null);
  const currentDistrict = useCityStore((state) => state.currentDistrict);

  const districtPositions: Record<
    string,
    { position: THREE.Vector3; target: THREE.Vector3 }
  > = {
    "facilitator-plaza": {
      position: new THREE.Vector3(4, 12, 139),
      target: new THREE.Vector3(0, 5, 0),
    },
    "service-skyline": {
      position: new THREE.Vector3(0, 40, 480),
      target: new THREE.Vector3(0, 5, 400),
    },
    "builders-district": {
      position: new THREE.Vector3(0, 40, 880),
      target: new THREE.Vector3(0, 5, 800),
    },
    "integration-avenue": {
      position: new THREE.Vector3(0, 40, 1280),
      target: new THREE.Vector3(0, 5, 1200),
    },
  };

  useEffect(() => {
    const config = districtPositions[currentDistrict];
    if (config && controlsRef.current) {
      const startPosition = camera.position.clone();
      const startTarget = controlsRef.current.target.clone();
      const duration = 2000; // 2 seconds
      const startTime = Date.now();

      // Mobile Adjustment
      const isMobile = size.width < size.height; // Simple portrait check
      const distMult = isMobile ? 1.5 : 1;

      const targetVec = config.target.clone();
      const posVec = config.position.clone();

      // Calculate offset from target to position
      const offset = posVec.sub(targetVec);
      // Scale offset (move back)
      offset.multiplyScalar(distMult);
      // Apply new position
      const finalPosition = targetVec.clone().add(offset);

      // Lift camera slightly more on mobile to see ground
      if (isMobile) {
        finalPosition.y += 20;
      }

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const eased =
          progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        camera.position.lerpVectors(startPosition, finalPosition, eased);

        if (controlsRef.current) {
          controlsRef.current.target.lerpVectors(
            startTarget,
            config.target, // Target remains same
            eased
          );
          controlsRef.current.update();
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    }
  }, [currentDistrict, camera, size.width, size.height]);

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={true}
      enableZoom={true}
      enableRotate={true}
      minDistance={10}
      maxDistance={300}
      minAzimuthAngle={-Math.PI / 4} // Restrict left rotation (45 deg)
      maxAzimuthAngle={Math.PI / 4} // Restrict right rotation (45 deg)
      maxPolarAngle={Math.PI / 2 - 0.05} // Don't go below ground
      autoRotate={false}
    />
  );
}

const Decorations = () => {
  const trees = [];
  for (let z = -50; z < 1400; z += 60) {
    trees.push(
      <PalmTree
        key={`left-${z}`}
        position={[-25, 0, z]}
        scale={0.8}
        rotation={[0, Math.random(), 0]}
      />
    );
    trees.push(
      <PalmTree
        key={`right-${z}`}
        position={[25, 0, z]}
        scale={0.8}
        rotation={[0, Math.random(), 0]}
      />
    );
  }
  return <group>{trees}</group>;
};

export function Scene() {
  return (
    <Canvas className="w-full h-screen">
      <PerspectiveCamera makeDefault position={[0, 40, 100]} fov={60} />
      <fog attach="fog" args={["#87CEEB", 50, 1200]} />
      <color attach="background" args={["#2e0c3a"]} />{" "}
      <color attach="background" args={["#104e8b"]} />
      <ambientLight intensity={0.5} color="#ff00cc" />
      <directionalLight
        position={[-50, 50, 100]}
        intensity={1.5}
        color="#ffaa00"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />{" "}
      <pointLight
        position={[0, 20, 0]}
        intensity={2}
        color="#00ffff"
        distance={100}
      />{" "}
      <CameraController />
      {/* Sun removed - replaced by PlazaClock */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[10000, 10000]} />
        <meshStandardMaterial
          color="#006994"
          roughness={0}
          metalness={0.9}
          emissive="#001133"
          emissiveIntensity={0.2}
        />
      </mesh>
      <group position={[0, 0.1, 600]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[40, 2000]} />
          <meshStandardMaterial color="#333" roughness={0.8} />
        </mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.05, 0]}>
          <planeGeometry args={[1, 2000]} />
          <meshBasicMaterial color="#ffcc00" />
        </mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-18, 0.05, 0]}>
          <planeGeometry args={[0.5, 2000]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[18, 0.05, 0]}>
          <planeGeometry args={[0.5, 2000]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </group>
      {/* Living City Elements */}
      <MovingTraffic />
      <Monorail />
      <FloatingClouds />
      <Decorations />
      {/* <AnimatedBackground /> */}
      <PlazaClock />
      <Suspense fallback={null}>
        <group position={[0, 0, 0]}>
          <FacilitatorPlaza />
        </group>

        {/* Major Landmark: PayAI Payment Hub Dome */}
        <PayAIDome position={[80, 0, -80]} />

        <group position={[0, 0, 400]}>
          <ServiceSkyline />
        </group>

        <group position={[0, 0, 800]}>
          <BuildersDistrict />
        </group>

        <group position={[0, 0, 1200]}>
          <IntegrationAvenue />
        </group>
      </Suspense>
      <EffectComposer multisampling={0}>
        <Bloom
          luminanceThreshold={0.5}
          luminanceSmoothing={0.9}
          height={300}
          intensity={1.5}
        />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={0.5} />
        <ChromaticAberration offset={[0.002, 0.002] as any} />
      </EffectComposer>
    </Canvas>
  );
}

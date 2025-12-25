"use client";

import { Scene } from "@/components/Scene";
import { HUD } from "@/components/ui/HUD";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { WelcomeOverlay } from "@/components/ui/WelcomeOverlay";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { DistrictSwitcher } from "@/components/ui/DistrictSwitcher";
import { useState, useEffect } from "react";

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);

  // No auto-close timer. User must click to enter.

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-black">
      {/* 3D Scene - Always render to load in background */}
      <Scene />

      {/* Entry Overlay */}
      {showWelcome && <WelcomeOverlay onClose={() => setShowWelcome(false)} />}

      {/* Main UI - Only show after entry */}
      {!showWelcome && (
        <>
          <HUD />
          <ProjectModal />
          <DistrictSwitcher />
        </>
      )}
    </main>
  );
}

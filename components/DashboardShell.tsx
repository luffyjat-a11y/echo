"use client";

import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";

import LevelUpModal from "@/components/levelup/LevelUpModal";
import AnimatedBackground from "@/components/effects/AnimatedBackground";

import { useGameContext } from "@/context/GameContext";

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    player,
    showLevelUp,
    closeLevelUp,
  } = useGameContext();

  return (
    <>
      <LevelUpModal
        open={showLevelUp}
        level={player.level}
        onClose={closeLevelUp}
      />

      <main className="relative flex min-h-screen overflow-hidden bg-zinc-950 text-white">

        {/* Animated Background */}
        <AnimatedBackground />

        {/* Sidebar */}
        <div className="relative z-10">
          <Sidebar />
        </div>

        {/* Main Content */}
        <section className="relative z-10 flex-1 p-8">

          <DashboardHeader />

          <div className="mt-8">
            {children}
          </div>

        </section>

      </main>
    </>
  );
}
"use client";

import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import LevelUpModal from "@/components/levelup/LevelUpModal";

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

      <main className="flex min-h-screen bg-zinc-950 text-white">
        <Sidebar />

        <section className="flex-1 p-8">
          <DashboardHeader />

          <div className="mt-8">
            {children}
          </div>
        </section>
      </main>
    </>
  );
}
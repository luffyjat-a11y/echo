import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";

import { GameProvider } from "@/context/GameContext";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GameProvider>
      <main className="flex min-h-screen bg-zinc-950 text-white">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <section className="flex-1 p-8">

          <DashboardHeader />

          <div className="mt-8">
            {children}
          </div>

        </section>

      </main>
    </GameProvider>
  );
}
import DashboardShell from "@/components/DashboardShell";
import { GameProvider } from "@/context/GameContext";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GameProvider>
      <DashboardShell>
        {children}
      </DashboardShell>
    </GameProvider>
  );
}
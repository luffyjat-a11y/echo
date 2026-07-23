"use client";

import PlayerProfile from "@/components/dashboard/PlayerProfile";
import QuestList from "@/components/dashboard/QuestList";
import AchievementList from "@/components/dashboard/AchievementList";
import LevelUpModal from "@/components/dashboard/LevelUpModal";
import StatCard from "@/components/StatCard";

import { useGameContext } from "@/context/GameContext";

export default function DashboardPage() {
  const {
    player,
    quests,
    achievements,
    completeQuest,
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

      <div className="space-y-8">
        <PlayerProfile
          name={player.name}
          level={player.level}
          xp={player.xp}
          maxXp={player.maxXp}
          coins={player.coins}
          streak={player.streak}
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <QuestList
            quests={quests}
            onComplete={completeQuest}
          />

          <div>
            <h2 className="mb-4 text-2xl font-bold">
              📊 Stats
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <StatCard title="💪 Strength" value={10} />
              <StatCard title="🧠 Focus" value={12} />
              <StatCard title="⚡ Discipline" value={15} />
              <StatCard title="❤️ Energy" value={9} />
            </div>
          </div>
        </div>

        <AchievementList
          achievements={achievements}
        />
      </div>
    </>
  );
}
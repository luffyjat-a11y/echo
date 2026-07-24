"use client";

import ParticleField from "./ParticleField";
import LevelNumber from "./LevelNumber";
import RewardCard from "./RewardCard";
import ContinueButton from "./ContinueButton";

type LevelUpModalProps = {
  open: boolean;
  level: number;
  xpReward?: number;
  coinReward?: number;
  rank?: string;
  onClose: () => void;
};

export default function LevelUpModal({
  open,
  level,
  xpReward = 100,
  coinReward = 50,
  rank = "New Rank Unlocked",
  onClose,
}: LevelUpModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black/80 backdrop-blur-md">

      {/* Animated Background */}
      <ParticleField />

      {/* Main Card */}
      <div className="relative w-full max-w-3xl rounded-3xl border border-purple-500/40 bg-zinc-900/90 p-10 shadow-[0_0_80px_rgba(168,85,247,.45)]">

        {/* Glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 via-transparent to-fuchsia-500/10" />

        <div className="relative z-10">

          {/* Animated Level */}
          <LevelNumber level={level} />

          {/* Subtitle */}
          <p className="mt-6 text-center text-lg text-zinc-300">
            Congratulations! You've become stronger.
          </p>

          {/* Rewards */}
          <div className="mt-10 grid gap-5 md:grid-cols-2">

            <RewardCard
              icon="⭐"
              title="Experience"
              value={`+${xpReward} XP`}
            />

            <RewardCard
              icon="💰"
              title="Echo Coins"
              value={`+${coinReward}`}
            />

            <RewardCard
              icon="🏆"
              title="Rank"
              value={rank}
            />

            <RewardCard
              icon="⚡"
              title="Power"
              value="Increased"
            />

          </div>

          {/* Continue */}
          <div className="mt-12 flex justify-center">
            <ContinueButton onClick={onClose} />
          </div>

        </div>

      </div>
    </div>
  );
}
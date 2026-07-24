"use client";

type RewardCardProps = {
  icon: string;
  title: string;
  value: string;
};

export default function RewardCard({
  icon,
  title,
  value,
}: RewardCardProps) {
  return (
    <div className="group flex items-center gap-4 rounded-2xl border border-purple-500/30 bg-zinc-900/80 p-5 backdrop-blur transition-all duration-300 hover:scale-105 hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,.4)]">

      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-600 text-3xl shadow-lg">
        {icon}
      </div>

      <div className="flex flex-col">
        <span className="text-sm uppercase tracking-widest text-zinc-400">
          {title}
        </span>

        <span className="text-2xl font-bold text-white">
          {value}
        </span>
      </div>

    </div>
  );
}
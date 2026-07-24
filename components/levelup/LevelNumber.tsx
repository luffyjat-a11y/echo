"use client";

type LevelNumberProps = {
  level: number;
};

export default function LevelNumber({
  level,
}: LevelNumberProps) {
  return (
    <div className="flex flex-col items-center">

      <p className="mb-3 animate-pulse text-xl font-bold uppercase tracking-[0.5em] text-purple-300">
        LEVEL UP
      </p>

      <h1
        className="
          animate-pulse
          text-[120px]
          font-black
          leading-none
          text-white
          drop-shadow-[0_0_40px_rgba(168,85,247,1)]
        "
      >
        {level}
      </h1>

      <div className="mt-6 h-1 w-72 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-400 to-purple-500" />

    </div>
  );
}
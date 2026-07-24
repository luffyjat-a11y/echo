"use client";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

      {/* Main Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-purple-950" />

      {/* Orb 1 */}
      <div className="absolute left-10 top-10 h-96 w-96 animate-pulse rounded-full bg-purple-600/20 blur-3xl" />

      {/* Orb 2 */}
      <div className="absolute right-20 top-40 h-[500px] w-[500px] animate-pulse rounded-full bg-fuchsia-600/10 blur-3xl" />

      {/* Orb 3 */}
      <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] animate-pulse rounded-full bg-violet-500/10 blur-3xl" />

      {/* Small Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-pulse rounded-full bg-purple-400/40"
          style={{
            width: `${4 + Math.random() * 6}px`,
            height: `${4 + Math.random() * 6}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${2 + Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
}
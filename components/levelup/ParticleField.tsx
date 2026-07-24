"use client";

export default function ParticleField() {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 4,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 8 + 4,
    delay: Math.random() * 4,
    opacity: Math.random() * 0.6 + 0.2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-purple-400 animate-pulse"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            opacity: particle.opacity,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            boxShadow: "0 0 20px rgba(168,85,247,.8)",
          }}
        />
      ))}

      {/* Extra glowing orbs */}
      <div className="absolute left-20 top-16 h-72 w-72 rounded-full bg-purple-700/20 blur-3xl animate-pulse" />

      <div className="absolute right-16 bottom-10 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl animate-pulse" />

      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl animate-pulse" />
    </div>
  );
}
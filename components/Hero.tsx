export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[85vh] max-w-7xl items-center justify-between px-8">

      {/* Left Side */}
      <div className="max-w-xl">

        <p className="mb-4 text-purple-400 font-semibold uppercase tracking-widest">
          Welcome to ECHO
        </p>

        <h1 className="text-6xl font-extrabold leading-tight">
          Level Up
          <br />
          Your Real Life
        </h1>

        <p className="mt-6 text-lg text-zinc-400">
          Complete missions, earn Echoes, unlock new ranks and transform your
          fitness journey into an adventure.
        </p>

        <div className="mt-10 flex gap-4">

          <button className="rounded-xl bg-purple-600 px-8 py-4 font-semibold hover:bg-purple-500 transition">
            Begin Journey
          </button>

          <button className="rounded-xl border border-zinc-700 px-8 py-4 hover:border-purple-500 transition">
            Learn More
          </button>

        </div>

      </div>

      {/* Right Side */}
      <div className="w-[420px] rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">

        <h2 className="text-2xl font-bold text-purple-400">
          SYSTEM STATUS
        </h2>

        <div className="mt-8 space-y-5">

          <div>
            <p className="text-zinc-400">Rank</p>
            <h3 className="text-xl font-bold">Seed</h3>
          </div>

          <div>
            <p className="text-zinc-400">Level</p>
            <h3 className="text-xl font-bold">1</h3>
          </div>

          <div>
            <p className="text-zinc-400">Echoes</p>

            <div className="mt-2 h-3 rounded-full bg-zinc-700">

              <div className="h-3 w-1/3 rounded-full bg-purple-500"></div>

            </div>

            <p className="mt-2 text-sm text-zinc-400">
              35 / 100 XP
            </p>

          </div>

          <div className="rounded-xl bg-zinc-800 p-4">
            <p className="text-purple-400">
              Daily Mission
            </p>

            <p className="mt-2">
              Walk 6000 Steps
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
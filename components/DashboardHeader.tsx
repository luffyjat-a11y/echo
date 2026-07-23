export default function DashboardHeader() {
  return (
    <header className="flex items-center justify-between border-b border-zinc-800 pb-6">
      <div>
        <h1 className="text-4xl font-bold text-purple-400">
          ECHO
        </h1>

        <p className="text-zinc-400">
          Welcome Back
        </p>
      </div>

      <div className="rounded-xl bg-zinc-900 px-5 py-3">
        👤 Seed Hunter
      </div>
    </header>
  );
}
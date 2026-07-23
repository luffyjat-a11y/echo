import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-950 via-black to-purple-950 px-4">
      <div className="w-full max-w-md rounded-3xl border border-purple-500/20 bg-zinc-900/70 p-8 shadow-2xl backdrop-blur-lg">

        {/* Logo */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-extrabold text-purple-400">
            ECHO
          </h1>

          <p className="mt-3 text-zinc-400">
            Create Your Account
          </p>
        </div>

        {/* Register Form */}
        <form className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-purple-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-purple-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-purple-500"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-purple-500"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-purple-600 py-3 text-lg font-bold transition hover:bg-purple-500"
          >
            Create Account
          </button>

        </form>

        {/* Bottom */}
        <div className="mt-8 border-t border-zinc-700 pt-6 text-center">

          <p className="text-zinc-400">
            Already have an account?
          </p>

          <Link
            href="/login"
            className="mt-3 inline-block text-purple-400 hover:text-purple-300"
          >
            Login
          </Link>

          <div className="mt-6">
            <Link
              href="/"
              className="text-sm text-zinc-400 hover:text-white"
            >
              ← Back to Home
            </Link>
          </div>

        </div>

      </div>
    </main>
  );
}
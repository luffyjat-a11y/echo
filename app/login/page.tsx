"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-950 via-black to-purple-950 px-4">
      <div className="w-full max-w-md rounded-3xl border border-purple-500/20 bg-zinc-900/70 p-8 shadow-2xl backdrop-blur-lg">

        {/* Logo */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-extrabold text-purple-400">
            ECHO
          </h1>

          <p className="mt-3 text-zinc-400">
            Every Action Shapes You
          </p>
        </div>

        {/* Login Form */}
        <form
  className="space-y-5"
 onSubmit={(e) => {
  e.preventDefault();
  router.push("/dashboard");
}}
>
          <div>
            <label className="mb-2 block text-sm text-zinc-300">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-purple-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-300">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-purple-500"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-purple-400 hover:text-purple-300"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-purple-600 py-3 text-lg font-bold transition hover:bg-purple-500"
          >
            Login
          </button>

        </form>

        {/* Bottom Links */}
        <div className="mt-8 border-t border-zinc-700 pt-6 text-center">

          <p className="text-zinc-400">
            Don't have an account?
          </p>

          <Link
            href="/register"
            className="mt-3 inline-block rounded-xl border border-purple-500 px-6 py-3 text-purple-400 transition hover:bg-purple-600 hover:text-white"
          >
            Create Account
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
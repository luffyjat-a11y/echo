import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6">

      {/* Logo */}
      <Link
        href="/"
        className="text-2xl font-bold text-purple-400"
      >
        ECHO
      </Link>

      {/* Navigation */}
      <div className="flex gap-6">
        <Link href="/" className="hover:text-purple-400 transition">
          Home
        </Link>

        <Link href="#features" className="hover:text-purple-400 transition">
          Features
        </Link>

        <Link href="#about" className="hover:text-purple-400 transition">
          About
        </Link>

        <Link href="#contact" className="hover:text-purple-400 transition">
          Contact
        </Link>
      </div>

      {/* Login Button */}
      <Link
        href="/login"
        className="rounded-lg bg-purple-600 px-5 py-2 font-semibold text-white transition hover:bg-purple-500"
      >
        Login
      </Link>

    </nav>
  );
}
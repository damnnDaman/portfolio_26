import Link from "next/link";

export default function Header() {
  return (
    <header className="flex gap-[24px] flex-wrap items-center justify-center">
      <Link
        className="nav-link flex items-center gap-2 hover:underline hover:underline-offset-4 transition-all duration-200"
        href="/"
      >
        Home
      </Link>
      <Link
        className="nav-link flex items-center gap-2 hover:underline hover:underline-offset-4 transition-all duration-200"
        href="/about"
      >
        About Daman
      </Link>
      <Link
        className="nav-link flex items-center gap-2 hover:underline hover:underline-offset-4 transition-all duration-200"
        href="/projects"
      >
        Projects
      </Link>
      <Link
        className="nav-link flex items-center gap-2 hover:underline hover:underline-offset-4 transition-all duration-200"
        href="/experience"
      >
        Experience
      </Link>
      <Link
        className="nav-link flex items-center gap-2 hover:underline hover:underline-offset-4 transition-all duration-200"
        href="/coop-reports"
      >
        Co-op Reports
      </Link>
    </header>
  );
}


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Daman" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/coop-reports", label: "Co-op Reports" },
];

export default function Header() {
  const pathname = usePathname();
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header className="w-full flex justify-center px-3 sm:px-4">
      <div
        className="mx-auto mt-3 flex h-[70px] w-full max-w-6xl items-center justify-center rounded-full border border-[#E5E5E5] bg-white px-5 sm:px-8 transition-all duration-250 ease-out hover:-translate-y-1 hover:shadow-[0_16px_40px_-18px_rgba(0,0,0,0.22)]"
        style={{
          boxShadow: "0 10px 30px -18px rgba(0, 0, 0, 0.18)",
          backgroundImage:
            "radial-gradient(120% 120% at 0% 0%, rgba(0,0,0,0.05), transparent 55%), radial-gradient(120% 120% at 100% 100%, rgba(0,0,0,0.05), transparent 55%)",
        }}
      >
        <nav className="flex items-center gap-6 sm:gap-8">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm sm:text-base transition-colors duration-150 ${
                  active ? "text-[#1A1A1A] font-semibold" : "text-[#4A4A4A] font-medium"
                } hover:text-[#1A1A1A] hover:underline hover:underline-offset-4 hover:decoration-[#0F2F6B] focus-visible:outline-none focus-visible:text-[#0F2F6B] focus-visible:underline focus-visible:underline-offset-4 focus-visible:decoration-[#0F2F6B] active:text-[#0F2F6B]`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}


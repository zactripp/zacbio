"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { href: "https://linkedin.com/in/zactripp1", label: "LINKEDIN" },
  { href: "https://github.com/zactripp", label: "GITHUB" },
  { href: "https://instagram.com/zactripp", label: "INSTAGRAM" },
  { href: "https://x.com/zactripp10", label: "X" },
];

export default function MonoFooter() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 items-center z-50 border-neutral-950 bg-neutral-50 font-mono">
      <div className="flex h-8 items-center justify-center gap-1 px-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex h-6 items-center border border-transparent px-3 text-sm transition-colors hover:border-neutral-950 hover:bg-neutral-100 ${
              pathname === item.href ? "border-neutral-950 bg-neutral-100" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

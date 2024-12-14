"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/writing", label: "WRITING" },
];

export default function MonoNav() {
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

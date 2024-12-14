import React from "react";

interface MonoCardProps {
  title: string;
  children: React.ReactNode;
}

export default function MonoCard({ title, children }: MonoCardProps) {
  return (
    <div className="w-full max-w-3xl border border-neutral-950 font-mono">
      <div className="font-bold border-b border-neutral-950 px-4 py-2 text-center text-sm uppercase">
        {title}
      </div>
      <div className="px-4 py-2">
        <div className="text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

import React from "react";

interface MonoHeaderProps {
  title: string;
}

export default function MonoHeader({ title }: MonoHeaderProps) {
  return (
    <div className="w-full max-w-3xl border border-neutral-950 font-mono">
      <div className="border-neutral-950 px-4 py-2 text-center text-sm uppercase">
        {title}
      </div>
    </div>
  );
}

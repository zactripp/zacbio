import React from "react";

interface MonoSubHeaderProps {
  text: string;
}

export default function MonoSubHeader({ text }: MonoSubHeaderProps) {
  return (
    <div className="w-full max-w-3xl border-b border-l border-r border-neutral-950 font-mono -mt-[1px]">
      <div className="px-4 py-2 text-sm text-muted-foreground">
        {text}
      </div>
    </div>
  );
} 
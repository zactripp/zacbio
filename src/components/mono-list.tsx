import React from "react";

interface ListProps {
  children: React.ReactNode;
}

export function List({ children }: ListProps) {
  return <ul className="font-mono text-sm space-y-1">{children}</ul>;
}

interface ListItemProps {
  children: React.ReactNode;
}

export function ListItem({ children }: ListItemProps) {
  return (
    <li className="flex items-start rounded transition-colors hover:bg-emerald-400 cursor-pointer">
      <span className="mr-2">→</span>
      <span>{children}</span>
    </li>
  );
}

interface MonoBadgeProps {
  value: string;
}

export default function MonoBadge({ value }: MonoBadgeProps) {
  return (
    <div className="inline-flex items-center font-mono text-xs">
      <span className="bg-neutral-200 px-1.5 py-0.5">{value}</span>
    </div>
  );
}

type MissionCardProps = {
  title: string;
  done: boolean;
  onToggle: () => void;
};

export default function MissionCard({
  title,
  done,
  onToggle,
}: MissionCardProps) {
  return (
    <button
      onClick={onToggle}
      className="flex w-full items-center justify-between rounded-xl bg-zinc-900 p-4 transition hover:bg-zinc-800"
    >
      <h3 className={done ? "line-through text-zinc-500" : ""}>
        {title}
      </h3>

      <span className="text-2xl">
        {done ? "✅" : "⬜"}
      </span>
    </button>
  );
}
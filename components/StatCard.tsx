type Props = {
  title: string;
  value: number;
};

export default function StatCard({ title, value }: Props) {
  return (
    <div className="rounded-xl bg-zinc-900 p-6 text-center">

      <h3 className="text-zinc-400">
        {title}
      </h3>

      <p className="mt-3 text-4xl font-bold text-purple-400">
        {value}
      </p>

    </div>
  );
}
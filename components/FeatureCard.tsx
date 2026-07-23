type FeatureCardProps = {
  title: string;
  description: string;
};

export default function FeatureCard({
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-purple-500">
      <h3 className="mb-3 text-xl font-bold text-purple-400">
        {title}
      </h3>

      <p className="text-zinc-400">
        {description}
      </p>
    </div>
  );
}
export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Complete Missions",
      description:
        "Finish real-life fitness and wellness tasks assigned every day.",
    },
    {
      number: "02",
      title: "Earn Echoes",
      description:
        "Every completed mission rewards you with Echoes and Momentum.",
    },
    {
      number: "03",
      title: "Level Up",
      description:
        "Unlock new levels, achievements, and personalize your journey.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-8 py-24">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold">How ECHO Works</h2>
        <p className="mt-4 text-zinc-400">
          Three simple steps to turn real-life progress into a rewarding journey.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.number}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-8 transition hover:border-purple-500"
          >
            <p className="text-5xl font-extrabold text-purple-500">
              {step.number}
            </p>

            <h3 className="mt-6 text-2xl font-bold">
              {step.title}
            </h3>

            <p className="mt-4 text-zinc-400">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
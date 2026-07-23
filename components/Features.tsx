import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-24">
      <h2 className="mb-12 text-center text-4xl font-bold">
        Why Choose ECHO?
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        <FeatureCard
          title="🎯 Daily Missions"
          description="Complete personalized fitness and wellness quests every day."
        />

        <FeatureCard
          title="⚡ Level System"
          description="Earn Echoes and unlock new ranks as you grow stronger."
        />

        <FeatureCard
          title="🤖 AI Coach"
          description="Receive adaptive workouts, feedback, and motivation."
        />
      </div>
    </section>
  );
}
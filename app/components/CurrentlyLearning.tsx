// Configure what you're currently learning here
export interface LearningItem {
  title: string;
  description: string;
  why: string;
  icon: string;
  progress?: number;
}

export const CURRENTLY_LEARNING: LearningItem[] = [
  {
    title: "Smart Drone Software Development",
    description: "Developing autonomous flight systems, computer vision for object detection, and real-time navigation algorithms",
    why: "Drones represent the future of delivery, surveillance, and agricultural monitoring. Building expertise in autonomous systems positions me at the forefront of this transformative technology.",
    icon: "🚁",
    progress: 65,
  },
  {
    title: "Advanced Deep Learning",
    description: "Exploring cutting-edge architectures including Vision Transformers, Diffusion Models, and Reinforcement Learning from Human Feedback (RLHF)",
    why: "The rapid evolution of AI demands continuous learning. Mastering these advanced techniques enables me to build next-generation intelligent systems and contribute to AI research.",
    icon: "🧠",
    progress: 70,
  },
];

export default function CurrentlyLearning() {
  return (
    <section className="relative py-24 px-6 bg-[var(--background-secondary)]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Currently Learning
        </h2>
        <p className="text-center text-[var(--foreground-secondary)] mb-12 max-w-2xl mx-auto">
          Continuous growth through exploring emerging technologies and expanding technical horizons
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {CURRENTLY_LEARNING.map((item, index) => (
            <div
              key={index}
              className="glass-effect p-8 rounded-xl hover:border-[var(--accent-orange)] transition-all hover:shadow-lg hover:shadow-[var(--accent-orange)]/20"
            >
              <div className="text-6xl mb-4">{item.icon}</div>
              
              <h3 className="text-2xl font-bold mb-3 text-[var(--foreground)]">
                {item.title}
              </h3>
              
              <p className="text-[var(--foreground-secondary)] mb-4">
                {item.description}
              </p>

              <div className="border-l-4 border-[var(--accent-orange)] pl-4 mb-4">
                <p className="text-sm font-semibold text-[var(--accent-orange)] mb-1">
                  {"Why I'm Learning This"}
                </p>
                <p className="text-sm text-[var(--foreground-secondary)] italic">
                  {item.why}
                </p>
              </div>

              {item.progress && (
                <div className="mt-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[var(--foreground-secondary)]">Progress</span>
                    <span className="text-[var(--accent-orange)] font-semibold">{item.progress}%</span>
                  </div>
                  <div className="w-full bg-[var(--border-color)] rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-orange-light)] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Configure your achievements here
export interface Achievement {
  title: string;
  organization?: string;
  date?: string;
  description: string;
  icon: string;
  type: "certification" | "award" | "publication" | "other";
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services",
    date: "2025",
    description: "Professional-level certification in cloud architecture and AWS services",
    icon: "☁️",
    type: "certification",
  },
  {
    title: "Best Innovation Award",
    organization: "Tech Hackathon 2024",
    date: "2024",
    description: "Awarded for AI-powered IoT solution at national-level hackathon",
    icon: "🏆",
    type: "award",
  },
  {
    title: "Deep Learning Specialization",
    organization: "Coursera - DeepLearning.AI",
    date: "2024",
    description: "Completed comprehensive deep learning curriculum including CNNs, RNNs, and Transformers",
    icon: "🎓",
    type: "certification",
  },
  {
    title: "Open Source Contributor",
    organization: "TensorFlow Community",
    date: "2023-Present",
    description: "Active contributor to TensorFlow documentation and issue resolution",
    icon: "💻",
    type: "other",
  },
  {
    title: "IoT Research Publication",
    organization: "IEEE Conference",
    date: "2023",
    description: "Published research paper on energy-efficient IoT protocols",
    icon: "📄",
    type: "publication",
  },
  {
    title: "Embedded Systems Certificate",
    organization: "University of Texas",
    date: "2023",
    description: "Advanced certification in ARM Cortex microcontroller programming",
    icon: "⚙️",
    type: "certification",
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Achievements & Certifications
        </h2>
        <p className="text-center text-(--foreground-secondary) mb-12 max-w-2xl mx-auto">
          Recognition of technical excellence and continuous learning
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((achievement, idx) => (
            <div
              key={idx}
              className="glass-effect p-6 rounded-xl hover:border-accent transition-all hover:shadow-lg hover:shadow-(--accent-orange)/20"
            >
              <div className="text-5xl mb-4">{achievement.icon}</div>
              
              <h3 className="text-xl font-bold mb-2 text-foreground">
                {achievement.title}
              </h3>
              
              {achievement.organization && (
                <p className="text-sm text-accent mb-1 font-medium">
                  {achievement.organization}
                </p>
              )}
              
              {achievement.date && (
                <p className="text-xs text-(--foreground-secondary) mb-3">
                  {achievement.date}
                </p>
              )}
              
              <p className="text-sm text-(--foreground-secondary)">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

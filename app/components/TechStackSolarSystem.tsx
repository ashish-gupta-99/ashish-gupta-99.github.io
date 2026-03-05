"use client";

// Define your tech stack here - easily configurable
export interface SubSkill {
  name: string;
  icon?: string; // Optional custom icon
}

export interface SkillCategory {
  title: string;
  color: string;
  subSkills: SubSkill[];
}

export const TECH_STACK: SkillCategory[] = [
  {
    title: "AI & Machine Learning",
    color: "#ff6b35",
    subSkills: [
      { name: "PyTorch" },
      { name: "TensorFlow" },
      { name: "LLMs" },
      { name: "Transformers" },
      { name: "Hugging Face" },
      { name: "OpenCV" },
    ],
  },
  {
    title: "IoT & Embedded Systems",
    color: "#00d4ff",
    subSkills: [
      { name: "Arduino" },
      { name: "Raspberry Pi" },
      { name: "ESP32" },
      { name: "MQTT" },
      { name: "Sensors" },
      { name: "Microcontrollers" },
    ],
  },
  {
    title: "Full Stack Development",
    color: "#61dafb",
    subSkills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "HTML/CSS" },
      { name: "JavaScript" },
    ],
  },
  {
    title: "Backend & Databases",
    color: "#47a248",
    subSkills: [
      { name: "Python" },
      { name: "Node.js" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "FastAPI" },
      { name: "REST APIs" },
    ],
  },
];

// Generic tech icon SVG component
function TechIcon({ color }: { color: string }) {
  return (
    <svg
      className="w-8 h-8"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" opacity="0.3" />
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        fill={color}
        opacity="0.8"
      />
    </svg>
  );
}

interface SkillCardProps {
  category: SkillCategory;
}

function SkillCard({ category }: SkillCardProps) {
  return (
    <div className="glass-effect p-6 rounded-xl hover:border-accent transition-all group hover:shadow-lg hover:shadow-(--accent-orange)/20">
      {/* Card Header */}
      <div className="mb-6">
        <div
          className="w-12 h-1 rounded-full mb-4"
          style={{ backgroundColor: category.color }}
        />
        <h3 className="text-2xl font-bold text-foreground">
          {category.title}
        </h3>
      </div>

      {/* Sub Skills Grid */}
      <div className="grid grid-cols-2 gap-4">
        {category.subSkills.map((skill, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 p-3 rounded-lg bg-(--background-secondary) hover:bg-(--border-color) transition-all"
          >
            <div className="flex-shrink-0">
              <TechIcon color={category.color} />
            </div>
            <span className="text-sm font-medium text-(--foreground-secondary) group-hover:text-foreground transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStackSolarSystem() {
  return (
    <section id="tech-stack" className="relative py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Tech Stack
        </h2>
        <p className="text-center text-(--foreground-secondary) mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit spanning AI, embedded systems, full-stack development, and beyond
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {TECH_STACK.map((category, idx) => (
            <SkillCard key={idx} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

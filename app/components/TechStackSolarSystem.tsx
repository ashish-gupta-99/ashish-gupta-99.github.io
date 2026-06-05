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
    title: "Programming Languages",
    color: "#a855f7",
    subSkills: [
      { name: "C/C++" },
      { name: "Rust" },
      { name: "Python" },
      { name: "JavaScript/TypeScript" },
      { name: "Golang" },
      { name: "C#/.NET" },
      { name: "Java" },
      { name: "Shell Scripting" },
    ],
  },
  {
    title: "AI & Machine Learning",
    color: "#ff6b35",
    subSkills: [
      { name: "TensorFlow & PyTorch" },
      { name: "RAG Pipelines" },
      { name: "Llama & Gemma LLMs" },
      { name: "Hugging Face" },
      { name: "LangChain" },
      { name: "OpenCV / Vision" },
      { name: "Deep Learning & NLP" },
      { name: "TensorRT Optimization" },
    ],
  },
  {
    title: "Embedded & Edge Systems",
    color: "#00d4ff",
    subSkills: [
      { name: "ESP32 (Arduino) / Bluetooth" },
      { name: "FreeRTOS RTOS" },
      { name: "Yocto Project Builder" },
      { name: "Embedded Linux" },
      { name: "Raspberry Pi & Drivers" },
      { name: "IoT Protocols & MQTT" },
      { name: "HIL Controls" },
      { name: "Modbus Telemetry" },
    ],
  },
  {
    title: "Cloud, DevOps & Databases",
    color: "#10b981",
    subSkills: [
      { name: "AWS & GCP Cloud" },
      { name: "Docker & Containerization" },
      { name: "CI/CD & Git Actions" },
      { name: "PostgreSQL & MySQL" },
      { name: "MongoDB & Cassandra" },
      { name: "Linux Server Administration" },
      { name: "Nginx & SSL/TLS" },
      { name: "GraphQL & REST APIs" },
    ],
  },
];

// Generic tech icon SVG component
function TechIcon({ color }: { color: string }) {
  return (
    <svg
      className="w-4 h-4"
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

      {/* Sub Skills Flexible Wrap */}
      <div className="flex flex-wrap gap-2">
        {category.subSkills.map((skill, idx) => (
          <div
            key={idx}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--background)]/60 border border-[var(--border-color)] hover:border-accent transition-all"
          >
            <div className="flex-shrink-0">
              <TechIcon color={category.color} />
            </div>
            <span className="text-xs sm:text-sm font-medium text-[var(--foreground-secondary)] group-hover:text-foreground transition-colors">
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
    <section id="tech-stack" className="relative py-12 px-6 bg-[var(--background-secondary)]/25 backdrop-blur-sm">
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

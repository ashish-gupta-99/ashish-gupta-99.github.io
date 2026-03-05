// Configure your projects here - easily editable
export interface Project {
  title: string;
  description: string;
  techStack: string[];
  category: "featured" | "diy";
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
}

export const PROJECTS: Project[] = [
  // Featured Projects
  {
    title: "Intelligent IoT Monitoring System",
    description: "Real-time sensor data collection and analysis platform with ML-powered anomaly detection",
    techStack: ["Python", "TensorFlow", "MQTT", "React", "TimescaleDB"],
    category: "featured",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    highlights: [
      "Reduced false alerts by 75% using LSTM networks",
      "Processing 1M+ sensor readings per day",
      "Real-time dashboard with sub-second latency",
    ],
  },
  {
    title: "AI-Powered Code Review Assistant",
    description: "LLM-based tool for automated code review with security vulnerability detection",
    techStack: ["GPT-4", "Python", "FastAPI", "React", "Docker"],
    category: "featured",
    githubUrl: "https://github.com/yourusername/project",
    highlights: [
      "Identifies 85% of common security issues",
      "Integrates with GitHub Actions",
      "Supports 10+ programming languages",
    ],
  },
  {
    title: "Smart Home Automation Hub",
    description: "Centralized control system for IoT devices with voice command integration",
    techStack: ["ESP32", "Node.js", "WebSockets", "Flutter", "SQLite"],
    category: "featured",
    highlights: [
      "Controls 20+ smart devices simultaneously",
      "Voice recognition with 95% accuracy",
      "Energy consumption reduced by 30%",
    ],
  },

  // DIY Projects
  {
    title: "Gesture-Controlled Robot Arm",
    description: "6-DOF robotic arm controlled via computer vision and hand gesture recognition",
    techStack: ["OpenCV", "MediaPipe", "Arduino", "Python"],
    category: "diy",
    highlights: [
      "Real-time gesture tracking with 60fps",
      "Custom-designed 3D printed components",
      "Precision control within 2mm tolerance",
    ],
  },
  {
    title: "Plant Health Monitor",
    description: "IoT sensor system that monitors soil moisture, temperature, and light levels with automated watering",
    techStack: ["Raspberry Pi", "Arduino", "Python", "MQTT"],
    category: "diy",
    highlights: [
      "Automated watering based on soil moisture",
      "Mobile notifications via Telegram bot",
      "Solar-powered for outdoor use",
    ],
  },
  {
    title: "AI Chatbot for Personal Knowledge Base",
    description: "RAG-based chatbot that answers questions from personal notes and documents",
    techStack: ["LangChain", "ChromaDB", "FastAPI", "React"],
    category: "diy",
    highlights: [
      "Processes 1000+ personal documents",
      "Context-aware responses using embeddings",
      "Privacy-first, runs locally",
    ],
  },
];

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="glass-effect p-6 rounded-xl hover:border-accent transition-all hover:shadow-lg hover:shadow-(--accent-orange)/20 h-full flex flex-col">
      <h3 className="text-2xl font-bold mb-3 text-foreground">
        {project.title}
      </h3>
      
      <p className="text-(--foreground-secondary) mb-4 flex-grow">
        {project.description}
      </p>

      <div className="space-y-4">
        {/* Tech Stack */}
        <div>
          <p className="text-sm font-semibold text-accent mb-2">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-(--accent-orange)/10 border border-(--border-color) rounded-full text-xs text-(--foreground-secondary)"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div>
          <p className="text-sm font-semibold text-accent mb-2">Key Highlights</p>
          <ul className="space-y-1 text-sm text-(--foreground-secondary)">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-accent mr-2">▹</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-(--accent-orange-light) transition-colors text-sm font-medium"
            >
              Live Demo →
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-(--accent-orange-light) transition-colors text-sm font-medium"
            >
              GitHub →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const featuredProjects = PROJECTS.filter((p) => p.category === "featured");
  const diyProjects = PROJECTS.filter((p) => p.category === "diy");

  return (
    <section id="projects" className="relative py-24 px-6 bg-(--background-secondary)">
      <div className="container mx-auto max-w-6xl">
        {/* Featured Projects */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-center text-(--foreground-secondary) mb-12 max-w-2xl mx-auto">
            Professional and impactful solutions demonstrating technical expertise
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>

        {/* DIY Projects */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            DIY Projects
          </h2>
          <p className="text-center text-(--foreground-secondary) mb-12 max-w-2xl mx-auto">
            Personal experiments and creative technical explorations
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diyProjects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

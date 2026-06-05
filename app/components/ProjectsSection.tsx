// Configure your projects here - easily editable
export interface Project {
  title: string;
  description: string;
  techStack: string[];
  category: "featured" | "independent";
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
}

export const PROJECTS: Project[] = [
  // Featured Projects
  {
    title: "Automated Enterprise Deployment Pipeline",
    description: "Engineered an end-to-end orchestration framework using Ansible to automate deployment of Java applications in single and multi-node clusters.",
    techStack: ["Ansible", "Nginx", "Cassandra", "Java", "Python", "Pytest", "SSL/TLS", "GitHub Copilot"],
    category: "featured",
    highlights: [
      "Automated Nginx setup, Cassandra DB configurations, and HTTPS security via SSL certificates.",
      "Implemented automated component and deployment testing using Python Pytest.",
      "Optimized security compliance and deployment times across distributed Linux servers."
    ]
  },
  {
    title: "Julius Baer Portfolio Management System",
    description: "Led the performance migration and feature integration of a high-throughput bank portfolio dashboard.",
    techStack: ["React.js", "TypeScript", "Rust (Axum)", "C++", "Hugging Face (Gemma)", "Vue.js", "MySQL", "Webpack"],
    category: "featured",
    highlights: [
      "Migrated resource-intensive Vue components to React & TypeScript following performance best practices.",
      "Re-engineered legacy C#/.NET backend services into high-performance Rust and C++ native engines.",
      "Integrated local Gemma-3 SLMs for AI customer support with safety boundaries and exception handling."
    ]
  },
  {
    title: "Medicard AI Support & RAG Modules",
    description: "Built a production RAG (Retrieval-Augmented Generation) pipeline for a secure customer support chatbot.",
    techStack: ["Python", "Vector DBs", "RAG Frameworks", "Flutter", "Dart", "GitHub SpecKit", "Copilot"],
    category: "featured",
    highlights: [
      "Optimized agent memory, vector similarity search, and context retention for medical support queries.",
      "Developed task-delegation agentic modules to assist users dynamically.",
      "Created new Flutter modules for the MediGo mobile app under Spec-Driven Development."
    ]
  },
  {
    title: "Tech Agriculture Plant Diagnostic System",
    description: "An AI-powered agricultural monitoring and plant diagnostics workflow deployed end-to-end on GCP.",
    techStack: ["Python", "TensorFlow (ResNet50)", "PyTorch", "Multi-Agent Frameworks", "Llama-2", "FastAPI", "GCP"],
    category: "featured",
    highlights: [
      "Architected multi-agent reasoning workflows utilizing fine-tuned Llama-2 models.",
      "Implemented planning, execution, and reflection loops (ReAct pattern) to generate diagnostic remedies.",
      "Served lightweight edge inference and computer vision pipelines to analyze plant leaves."
    ]
  },
  {
    title: "Selec IoT Inventory & Energy Monitor",
    description: "Full-scale energy monitoring and hardware asset management system governing industrial sensor networks.",
    techStack: ["AWS IoT Core", "ESP32", "Arduino C++", "FreeRTOS", "React.js", "Node.js", "GraphQL", "MongoDB", "Modbus"],
    category: "featured",
    highlights: [
      "Developed real-time firmware governed by FreeRTOS on ESP32 microcontrollers for sensor polling.",
      "Constructed GraphQL endpoints to handle analytics from Modbus industrial telemetry streams.",
      "Implemented robust device-to-cloud streams via AWS IoT Core MQTT brokers."
    ]
  },
  {
    title: "Penrose Systems multiplayer Match Game",
    description: "A real-time, event-driven multiplayer game featuring fast-match mechanics and smooth animations.",
    techStack: ["Node.js", "NestJS", "Socket.IO", "Redis", "PixiJS", "Vue.js", "MongoDB", "GCP"],
    category: "featured",
    highlights: [
      "Designed high-throughput event architecture for sub-100ms multiplayer state synchronization.",
      "Built matchmaking queue systems powered by Redis key-value storage.",
      "Managed developer team to ship gameplay using PixiJS and Vue layouts."
    ]
  },

  // Independent Projects (Built outside of corporate roles)
  {
    title: "Pawfriend - Pet Identity System",
    description: "An IoT animal identification and QR synchronization platform helping track and care for street animals.",
    techStack: ["ESP32", "Python", "React.js", "GCP", "Firebase", "QR Sync"],
    category: "independent",
    highlights: [
      "Featured in national news media for social impact and hardware integration.",
      "Developed ESP32 QR sync modules linked to cloud-native React dashboards.",
      "Provided a secure, scalable animal tracking system on Firebase and GCP."
    ]
  },
  {
    title: "Raspberry Pi Live Stream & Edge Object Detection",
    description: "High-frame-rate edge video streaming platform with on-device computer vision and object classification.",
    techStack: ["OpenCV", "Python", "Yocto Project", "TensorFlow Lite", "Raspberry Pi"],
    category: "independent",
    highlights: [
      "Developed a custom, minimal Linux OS build for Raspberry Pi using the Yocto Project.",
      "Deployed optimized TensorFlow Lite models for lightweight, sub-50ms edge inference.",
      "Configured camera drivers and live streaming scripts via OpenCV."
    ]
  }
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
  const independentProjects = PROJECTS.filter((p) => p.category === "independent");

  return (
    <section id="projects" className="relative py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Featured Projects */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-center text-(--foreground-secondary) mb-12 max-w-2xl mx-auto">
            Professional and impactful solutions demonstrating technical expertise
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {featuredProjects.map((project, idx) => (
              <div key={idx} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-md flex flex-col">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* Independent Projects */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Independent Projects
          </h2>
          <p className="text-center text-(--foreground-secondary) mb-12 max-w-2xl mx-auto">
            Projects built outside my corporate roles, focusing on independent initiatives, hardware prototyping, and edge software integrations.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {independentProjects.map((project, idx) => (
              <div key={idx} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-md flex flex-col">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

interface TimelineItem {
  role: string;
  organization: string;
  location: string;
  duration: string;
  highlights: string[];
}

const TIMELINE_DATA: TimelineItem[] = [
  {
    role: "Senior Software Engineer - DevOps Automation",
    organization: "NEC Software Solutions",
    location: "Mumbai",
    duration: "Mar 2026 - May 2026",
    highlights: [
      "Architected and maintained high-availability deployments using Ansible for orchestration across remote systems.",
      "Optimized enterprise service reliability by managing data persistence in Cassandra and traffic routing via Nginx.",
      "Engineered Java application pipelines, securing traffic with TLS/SSL, and integrated automated test runs using Pytest."
    ]
  },
  {
    role: "Senior Full Stack & AI Integration Engineer",
    organization: "Snapwork",
    location: "Mumbai",
    duration: "Sept 2024 - Mar 2026",
    highlights: [
      "Built scalable web services and AI agents using Node.js, Python, and C++, improving performance by 45% using React, TS, and Webpack.",
      "Migrated a legacy C#/.NET backend to Rust (Axum) with native C++ services for low-level system efficiency.",
      "Developed RAG (Retrieval-Augmented Generation) pipelines with long-term memory for customer support chatbots and integrated SLMs (Gemma)."
    ]
  },
  {
    role: "Full Stack, AI/ML & Embedded Engineer",
    organization: "CODE-B (Promoted to Senior Engineer)",
    location: "Mumbai",
    duration: "Mar 2021 - Sept 2024",
    highlights: [
      "Designed real-time firmware in Arduino C++ and ESP32 governed by FreeRTOS for deterministic execution loops.",
      "Built low-latency Golang microservices (sub-100ms response) and edge AI tools running TensorFlow Lite and Llama-2.",
      "Developed a full IoT Energy Management System (EMS) combining AWS IoT Core MQTT streams with a React/Node dashboard."
    ]
  },
  {
    role: "Software Engineer - Full Stack & Embedded Integration",
    organization: "Freelancing",
    location: "Mumbai",
    duration: "Mar 2020 - Feb 2021",
    highlights: [
      "Built and deployed responsive MERN-stack dashboards on GCP Cloud Run featuring clean layouts.",
      "Integrated microcontrollers and sensor hardware telemetry with web services via MQTT queues and REST APIs."
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-12 px-6 bg-[var(--background-secondary)]/25 backdrop-blur-sm">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Work Experience
        </h2>
        <p className="text-center text-[var(--foreground-secondary)] mb-16 max-w-2xl mx-auto">
          A timeline of my professional career, milestones, and engineering achievements
        </p>

        <div className="relative border-l border-[var(--border-color)] ml-4 md:ml-32">
          {TIMELINE_DATA.map((item, idx) => (
            <div key={idx} className="mb-12 relative pl-8 md:pl-12">
              {/* Timeline dot */}
              <span className="absolute -left-[11px] top-1.5 w-[22px] h-[22px] rounded-full border-4 border-[var(--background)] bg-[var(--accent-orange)] shadow-lg shadow-[var(--accent-orange)]/40 flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--background)]" />
              </span>

              {/* Sidebar Duration (only visible on md up) */}
              <div className="hidden md:block absolute -left-32 top-1.5 w-24 text-right text-sm text-[var(--foreground-secondary)] font-medium">
                {item.duration.split(" - ").map((d, i) => (
                  <div key={i}>{d}</div>
                ))}
              </div>

              {/* Glassmorphic timeline card */}
              <div className="glass-effect p-6 md:p-8 hover:border-[var(--accent-orange)] transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--foreground)]">
                      {item.role}
                    </h3>
                    <p className="text-md font-semibold text-[var(--accent-orange-light)]">
                      {item.organization}
                    </p>
                  </div>
                  <div className="text-xs md:hidden text-[var(--foreground-secondary)] font-medium bg-[var(--background-secondary)] px-2.5 py-1 rounded border border-[var(--border-color)] self-start">
                    {item.duration}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs text-[var(--foreground-secondary)] mb-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{item.location}</span>
                </div>

                <ul className="space-y-3">
                  {item.highlights.map((highlight, hidx) => (
                    <li key={hidx} className="flex items-start text-sm text-[var(--foreground-secondary)] leading-relaxed">
                      <span className="text-[var(--accent-orange)] mr-2.5 mt-1 select-none flex-shrink-0">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

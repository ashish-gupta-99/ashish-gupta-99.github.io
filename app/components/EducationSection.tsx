"use client";

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  highlights: string[];
}

const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Gurunanak College, University of Mumbai",
    duration: "June 2019 - July 2022",
    location: "Mumbai, India",
    highlights: [
      "Completed a three-year undergraduate program combining mathematics, computer science, and emerging technologies.",
      "Curriculum focused on software development, data structures, database management systems, networking, and applied mathematics.",
      "Engaged in hands-on lab projects covering Embedded Systems engineering and Internet of Things (IoT) protocols."
    ]
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="relative py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Education
        </h2>
        <p className="text-center text-[var(--foreground-secondary)] mb-16 max-w-2xl mx-auto">
          Academic foundation in information technology and computer engineering
        </p>

        <div className="space-y-8">
          {EDUCATION_DATA.map((item, idx) => (
            <div
              key={idx}
              className="glass-effect p-8 md:p-10 hover:border-[var(--accent-orange)] transition-all hover:shadow-lg hover:shadow-[var(--accent-orange)]/10"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--foreground)]">
                    {item.degree}
                  </h3>
                  <p className="text-lg font-semibold text-[var(--accent-orange-light)] mt-1">
                    {item.institution}
                  </p>
                </div>
                <div className="text-xs md:text-sm text-[var(--foreground-secondary)] font-medium bg-[var(--background-secondary)] px-2.5 py-1 rounded border border-[var(--border-color)] self-start md:self-center">
                  {item.duration}
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-sm text-[var(--foreground-secondary)] mb-6">
                <svg className="w-5.5 h-5.5 text-[var(--accent-orange)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{item.location}</span>
              </div>

              <ul className="space-y-4">
                {item.highlights.map((highlight, hidx) => (
                  <li key={hidx} className="flex items-start text-sm md:text-base text-[var(--foreground-secondary)] leading-relaxed">
                    <span className="text-[var(--accent-orange)] mr-3 mt-1.5 select-none flex-shrink-0">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

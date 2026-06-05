import React from "react";

// Configure your achievements here
export interface Achievement {
  title: string;
  organization?: string;
  date?: string;
  description: string;
  icon: React.ReactNode;
  type: "certification" | "award" | "publication" | "other";
  linkUrl?: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Fast-Track Promotion to Senior Engineer",
    organization: "CODE-B",
    date: "2023",
    description: "Promoted from Junior Software Engineer to Senior Software Engineer within 2 years based on outstanding execution, system design capabilities, and mentoring contributions.",
    icon: (
      <svg className="w-12 h-12 text-[var(--accent-orange)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    type: "award",
  },
  {
    title: "5-Star Problem Solving Badge",
    organization: "HackerRank",
    date: "Ongoing",
    description: "Earned the highest rating in Problem Solving, demonstrating strong analytical capability, algorithmic rigor, and data structure proficiency.",
    icon: (
      <svg className="w-12 h-12 text-[var(--accent-orange)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14V20" />
      </svg>
    ),
    type: "certification",
    linkUrl: "https://www.hackerrank.com/profile/princeashish808"
  },
  {
    title: "National Media Recognition",
    organization: "India Today & Major Outlets",
    date: "April 2024",
    description: "The 'Pawfriend' Pet Identity System project was featured in national media outlets for its innovative approach to street animal tracking using ESP32 microcontrollers and cloud systems.",
    icon: (
      <svg className="w-12 h-12 text-[var(--accent-orange)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    type: "publication",
    linkUrl: "https://www.indiatoday.in/information/story/what-are-qr-based-dog-aadhar-cards-that-100-dogs-received-in-delhi-2532972-2024-04-29"
  }
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-12 px-6 bg-[var(--background-secondary)]/25 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Achievements & Certifications
        </h2>
        <p className="text-center text-(--foreground-secondary) mb-12 max-w-2xl mx-auto">
          Recognition of technical excellence and continuous growth
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {ACHIEVEMENTS.map((achievement, idx) => (
            <div
              key={idx}
              className="glass-effect p-6 rounded-xl hover:border-accent transition-all hover:shadow-lg hover:shadow-(--accent-orange)/20 flex flex-col justify-between"
            >
              <div>
                <div className="mb-4">{achievement.icon}</div>
                
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
                
                <p className="text-sm text-(--foreground-secondary) leading-relaxed">
                  {achievement.description}
                </p>
              </div>

              {achievement.linkUrl && (
                <div className="mt-6 pt-4 border-t border-(--border-color)">
                  <a
                    href={achievement.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-(--accent-orange-light) transition-colors text-sm font-semibold inline-flex items-center gap-1.5"
                  >
                    Visit Link
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

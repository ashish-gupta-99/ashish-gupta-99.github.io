export default function SeekingVentures() {
  return (
    <section id="ventures" className="relative pt-12 pb-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-effect p-6 sm:p-10 md:p-12 rounded-2xl border-2 border-[var(--accent-orange)]">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 gradient-text">
            Seeking Deep Tech Ventures
          </h2>

          <p className="text-center text-lg text-[var(--foreground-secondary)] mb-10 mt-3">
            Open to exciting opportunities in cutting-edge technology
          </p>

          <div className="space-y-8">
            {/* Available For */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--accent-orange)] flex items-center">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 16.5c-1.5 1.26-2.5 3.19-2.5 4.5 0 .5.5 1 1 1 1.31 0 3.24-1 4.5-2.5" />
                  <path d="M19.5 4.5c-1.5-1.26-3.75-2.5-5.5-2.5C9.5 2 6.5 5 6.5 9c0 1.25.5 2.5 1.5 3.5l3.5 3.5c1-.8 2.25-1.5 3.5-1.5 4 0 7-3 7-7.5 0-1.75-1.24-4-2.5-5.5z" />
                  <path d="M9 15l-3 3" />
                  <path d="M15 9l-3 3" />
                </svg>
                Available For
              </h3>
              <p className="text-[var(--foreground-secondary)]">
                Early-stage startups in <span className="text-[var(--foreground)] font-semibold">AI/ML</span>, {" "}
                <span className="text-[var(--foreground)] font-semibold">IoT</span>, and {" "}
                <span className="text-[var(--foreground)] font-semibold">Embedded Systems</span>
              </p>
            </div>

            {/* Contribution */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--accent-orange)] flex items-center">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
                How I Can Contribute
              </h3>
              <ul className="space-y-2 text-[var(--foreground-secondary)]">
                <li className="flex items-start">
                  <span className="text-[var(--accent-orange)] mr-2">▹</span>
                  Full-stack development from MVP to production
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent-orange)] mr-2">▹</span>
                  AI/ML model development and deployment
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent-orange)] mr-2">▹</span>
                  IoT system architecture and embedded programming
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent-orange)] mr-2">▹</span>
                  Technical advisory and system design
                </li>
              </ul>
            </div>

            {/* Roles */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--accent-orange)] flex items-center">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
                Seeking Roles
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[var(--accent-orange)]/20 border border-[var(--accent-orange)] rounded-full text-[var(--foreground)]">
                  Software Engineer
                </span>
                <span className="px-4 py-2 bg-[var(--accent-orange)]/20 border border-[var(--accent-orange)] rounded-full text-[var(--foreground)]">
                  Full-Stack Developer
                </span>
                <span className="px-4 py-2 bg-[var(--accent-orange)]/20 border border-[var(--accent-orange)] rounded-full text-[var(--foreground)]">
                  AI/ML Engineer
                </span>
                <span className="px-4 py-2 bg-[var(--accent-orange)]/20 border border-[var(--accent-orange)] rounded-full text-[var(--foreground)]">
                  Embedded Systems Engineer
                </span>
              </div>
            </div>

            {/* UK Jobs */}
            <div className="pt-4 border-t border-[var(--border-color)]">
              <h3 className="text-xl font-semibold mb-3 text-[var(--accent-orange)] flex items-center">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                Open to UK Opportunities
              </h3>
              <p className="text-[var(--foreground-secondary)]">
                Actively seeking engineering positions in the United Kingdom.
                Interested in joining innovative teams working on breakthrough technologies.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center pt-6">
              <a
                href="#contact"
                className="inline-block px-5 py-3 text-sm sm:px-8 sm:py-4 sm:text-base bg-[var(--accent-orange)] text-white font-semibold rounded-full hover:bg-[var(--accent-orange-light)] transition-all transform hover:scale-105 shadow-lg"
              >
                {"Let's Connect"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

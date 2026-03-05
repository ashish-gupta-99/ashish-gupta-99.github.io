export default function SeekingVentures() {
  return (
    <section id="ventures" className="relative py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-effect p-10 md:p-12 rounded-2xl border-2 border-[var(--accent-orange)]">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 gradient-text">
            Seeking Deep Tech Ventures
          </h2>

          <p className="text-center text-lg text-[var(--foreground-secondary)] mb-10">
            Open to exciting opportunities in cutting-edge technology
          </p>

          <div className="space-y-8">
            {/* Available For */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--accent-orange)]">
                🚀 Available For
              </h3>
              <p className="text-[var(--foreground-secondary)]">
                Early-stage startups in <span className="text-[var(--foreground)] font-semibold">AI/ML</span>, {" "}
                <span className="text-[var(--foreground)] font-semibold">IoT</span>, and {" "}
                <span className="text-[var(--foreground)] font-semibold">Embedded Systems</span>
              </p>
            </div>

            {/* Contribution */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--accent-orange)]">
                💡 How I Can Contribute
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
              <h3 className="text-xl font-semibold mb-3 text-[var(--accent-orange)]">
                🎯 Seeking Roles
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
              <h3 className="text-xl font-semibold mb-3 text-[var(--accent-orange)]">
                🇬🇧 Open to UK Opportunities
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
                className="inline-block px-8 py-4 bg-[var(--accent-orange)] text-white font-semibold rounded-full hover:bg-[var(--accent-orange-light)] transition-all transform hover:scale-105 shadow-lg"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-12 px-6 bg-[var(--background-secondary)]/25 backdrop-blur-sm">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Get in Touch
        </h2>
        <p className="text-center text-[var(--foreground-secondary)] mb-12 max-w-2xl mx-auto">
          Have an exciting project, role, or collaboration in mind? Feel free to reach out directly.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Email Contact Card */}
          <a
            href="mailto:gupta.ash8051@gmail.com?subject=Let's%20Connect&body=Hi%20Ashish,%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0ABest%20regards,"
            className="glass-effect p-8 rounded-2xl border border-[var(--border-color)] hover:border-[var(--accent-orange)] transition-all hover:shadow-lg hover:shadow-[var(--accent-orange)]/10 text-center flex flex-col items-center group cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-[var(--accent-orange)]/10 text-[var(--accent-orange)] flex items-center justify-center mb-4 group-hover:bg-[var(--accent-orange)] group-hover:text-white transition-all duration-300">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent-orange-light)] transition-colors">
              Email Me
            </h3>
            <p className="text-[var(--foreground-secondary)] text-sm mb-4">
              Send an inquiry directly to my inbox
            </p>
            <span className="text-sm font-semibold text-[var(--accent-orange)] break-all">
              gupta.ash8051@gmail.com
            </span>
          </a>

          {/* Phone Contact Card */}
          <a
            href="tel:+917304105228"
            className="glass-effect p-8 rounded-2xl border border-[var(--border-color)] hover:border-[var(--accent-orange)] transition-all hover:shadow-lg hover:shadow-[var(--accent-orange)]/10 text-center flex flex-col items-center group cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-[var(--accent-orange)]/10 text-[var(--accent-orange)] flex items-center justify-center mb-4 group-hover:bg-[var(--accent-orange)] group-hover:text-white transition-all duration-300">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent-orange-light)] transition-colors">
              Call Me
            </h3>
            <p className="text-[var(--foreground-secondary)] text-sm mb-4">
              Connect via mobile or voice call
            </p>
            <span className="text-sm font-semibold text-[var(--accent-orange)]">
              +91 7304105228
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

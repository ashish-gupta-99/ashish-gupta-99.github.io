"use client";

import { useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [showCV, setShowCV] = useState(false);

  return (
    <>
      <section id="about" className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          {/* Photo */}
          <div className="flex justify-center mb-8">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-[var(--accent-orange)] shadow-lg shadow-[var(--accent-orange)]/30">
              <Image
                src="/next.svg"
                alt="Ashish Gupta"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Name & Tagline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-[var(--foreground)]">
              Ashish Gupta
            </h1>
            <p className="text-xl md:text-2xl gradient-text font-semibold">
              Deep-Tech Software Engineer | AI, IoT & Embedded Systems
            </p>
          </div>

          {/* Introduction */}
          <p className="text-lg md:text-xl text-[var(--foreground-secondary)] max-w-2xl mx-auto leading-relaxed">
            Passionate about pushing the boundaries of technology through AI/ML, embedded systems, 
            and full-stack development. Building innovative solutions at the intersection of hardware 
            and software with a focus on deep tech applications.
          </p>

          {/* CTA Button */}
          <div className="pt-6">
            <button
              onClick={() => setShowCV(true)}
              className="px-8 py-4 bg-[var(--accent-orange)] text-white font-semibold rounded-full hover:bg-[var(--accent-orange-light)] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-[var(--accent-orange)]/50"
            >
              View My CV
            </button>
          </div>
        </div>
      </section>

      {/* CV Modal */}
      {showCV && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl h-[90vh] glass-effect rounded-lg overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setShowCV(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-[var(--accent-orange)] text-white rounded-full hover:bg-[var(--accent-orange-light)] transition-colors"
              aria-label="Close CV"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>  
            </button>

            {/* PDF Viewer */}
            <div className="w-full h-full overflow-auto p-4">
              <iframe
                src="/new-ashish-gupta-cvi.pdf"
                className="w-full h-full border-0 rounded"
                title="Ashish Gupta CV"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

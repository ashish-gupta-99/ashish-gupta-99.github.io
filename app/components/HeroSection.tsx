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
                src="/my_pic.png"
                alt="Ashish Gupta"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Name & Tagline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[var(--foreground)]">
              Ashish Gupta
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl gradient-text font-semibold">
              High-Impact Technical Partner & Senior AI/ML & Embedded Engineer
            </p>
          </div>

          {/* Introduction */}
          <p className="text-base sm:text-lg md:text-xl text-[var(--foreground-secondary)] max-w-2xl mx-auto leading-relaxed">
            I am an engineer with over 5.5 years of experience building autonomous systems, 
            multi-agent workflows, and scalable full-stack solutions. I specialize in bridging 
            the gap between intelligent software and robust hardware, developing edge AI, custom 
            firmware, and cloud-native systems that solve real-world problems.
          </p>

          {/* CTA Button */}
          <div className="pt-6">
            <button
              onClick={() => setShowCV(true)}
              className="px-5 py-3 text-sm sm:px-8 sm:py-4 sm:text-base bg-[var(--accent-orange)] text-white font-semibold rounded-full hover:bg-[var(--accent-orange-light)] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-[var(--accent-orange)]/50 cursor-pointer"
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
                src="/ashish-gupta-cv.pdf"
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

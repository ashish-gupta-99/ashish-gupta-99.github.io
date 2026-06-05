"use client";

import React from "react";

interface HelpArea {
  title: string;
  description: string;
  icon: React.ReactNode;
  subject: string;
  body: string;
}

const HELP_AREAS: HelpArea[] = [
  {
    title: "Fullstack Web, Mobile & Desktop Apps",
    description: "Architecting high-performance web, mobile, and desktop applications from MVP to enterprise production using React, NestJS, Flutter, and native low-level integrations.",
    icon: (
      <svg className="w-8 h-8 text-[var(--accent-orange)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    subject: "Inquiry: Fullstack Application Development Services",
    body: "Hi Ashish,\n\nI saw your portfolio and am interested in your fullstack development services (Web, Mobile, or Desktop).\n\nLet's connect to discuss our project ideas!\n\nBest regards,"
  },
  {
    title: "Agentic AI, LLM & RAG Systems",
    description: "Designing autonomous agent workflows (ReAct, Plan-Execute-Reflect loops), advanced Retrieval-Augmented Generation (RAG) pipelines, and deploying reasoning patterns for enterprise automation.",
    icon: (
      <svg className="w-8 h-8 text-[var(--accent-orange)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    subject: "Inquiry: Agentic AI & RAG Solutions",
    body: "Hi Ashish,\n\nI saw your portfolio and would like to consult with you on building Agentic AI, LLM workflows, or RAG systems.\n\nLet's connect to discuss this further!\n\nBest regards,"
  },
  {
    title: "AI Fintech & Financial Systems",
    description: "Building secure, high-throughput financial technology systems integrated with predictive deep learning models, transactional safety boundaries, and quantitative analysis tools.",
    icon: (
      <svg className="w-8 h-8 text-[var(--accent-orange)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M6 21v-8m4 8v-8m4 8v-8m4 8v-8M4 10V5a2 2 0 012-2h12a2 2 0 012 2v5M2 21h20" />
      </svg>
    ),
    subject: "Inquiry: AI Fintech & Financial Systems",
    body: "Hi Ashish,\n\nI saw your portfolio and am interested in your AI Fintech and financial systems development services.\n\nLet's connect to discuss our requirements!\n\nBest regards,"
  },
  {
    title: "Game Development",
    description: "Developing responsive 2D/3D multiplayer games, event-driven matchmaking backends, and smooth browser-based gameplay using Nest.js, Socket.IO, Redis, and Pixi.js.",
    icon: (
      <svg className="w-8 h-8 text-[var(--accent-orange)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="6" width="20" height="12" rx="3" />
        <path d="M6 12h4m-2-2v4m10-2h.01M15 12h.01" />
      </svg>
    ),
    subject: "Inquiry: Game Development Services",
    body: "Hi Ashish,\n\nI saw your portfolio and want to talk about game development, multiplayer architectures, or interactive graphics.\n\nLet's connect!\n\nBest regards,"
  },
  {
    title: "Consumer Electronics & AI Edge Devices",
    description: "Integrating deep learning inference on edge hardware, designing custom Linux builds with Yocto, and managing data engineering pipelines for smart consumer devices.",
    icon: (
      <svg className="w-8 h-8 text-[var(--accent-orange)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v3m6-3v3m-6 12v3m6-3v3M3 9h3m12 0h3M3 15h3m12 0h3M9 9h6v6H9V9z" />
      </svg>
    ),
    subject: "Inquiry: Consumer Electronics & AI Edge Devices",
    body: "Hi Ashish,\n\nI saw your portfolio and would like to discuss deploying AI models on edge devices or consumer hardware integrations.\n\nLet's connect!\n\nBest regards,"
  },
  {
    title: "Safe & Secure IoT & Embedded Systems",
    description: "Developing robust ESP32/ARM firmware using C++ and Rust governed by FreeRTOS. Integrating Bluetooth, MQTT, and Modbus protocols under security-focused architectures.",
    icon: (
      <svg className="w-8 h-8 text-[var(--accent-orange)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    subject: "Inquiry: Secure IoT & Embedded Systems",
    body: "Hi Ashish,\n\nI saw your portfolio and have a project requiring secure firmware, FreeRTOS, or ESP32/ARM development.\n\nLet's connect to discuss details!\n\nBest regards,"
  },
  {
    title: "Renewable Energy & Power Monitoring",
    description: "Creating full-stack Energy Management Systems (EMS) with real-time power telemetry, sensor calibration, AWS IoT Core integrations, and custom dashboards.",
    icon: (
      <svg className="w-8 h-8 text-[var(--accent-orange)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    subject: "Inquiry: Energy Management & Power Monitoring Systems",
    body: "Hi Ashish,\n\nI saw your portfolio and am looking for help with renewable energy software or real-time power monitoring dashboards.\n\nLet's connect!\n\nBest regards,"
  },
  {
    title: "Defence, Aerospace & Mechatronics",
    description: "Designing mechatronic control loops, Hardware-in-the-Loop (HIL) environments, and highly secure, deterministic firmware matching rigorous aerospace and defence standards.",
    icon: (
      <svg className="w-8 h-8 text-[var(--accent-orange)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    subject: "Inquiry: Defence, Aerospace & Mechatronics Systems",
    body: "Hi Ashish,\n\nI saw your portfolio and would like to consult on high-reliability embedded software, mechatronics, or HIL controls.\n\nLet's connect!\n\nBest regards,"
  },
  {
    title: "Gaming & Online Business Presence",
    description: "Empowering businesses to establish a strong digital brand through scalable high-availability platforms, interactive marketing games, and optimized UX/UI designs.",
    icon: (
      <svg className="w-8 h-8 text-[var(--accent-orange)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    subject: "Inquiry: Online Business Presence & Interactive Web",
    body: "Hi Ashish,\n\nI saw your portfolio and would like to discuss boosting my business's online presence through scalable web and interactive platforms.\n\nLet's connect!\n\nBest regards,"
  }
];

export default function HelpSection() {
  const getMailtoUrl = (subject: string, body: string) => {
    const email = "gupta.ash8051@gmail.com";
    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="services" className="relative py-12 px-6 bg-[var(--background-secondary)]/25 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Areas Where I Can Help You
        </h2>
        <p className="text-center text-[var(--foreground-secondary)] mb-16 max-w-2xl mx-auto">
          Providing specialized engineering expertise at the intersection of AI, hardware, and scalable software architecture
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HELP_AREAS.map((area, idx) => (
            <div
              key={idx}
              className="glass-effect p-6 rounded-xl hover:border-[var(--accent-orange)] transition-all group hover:shadow-lg hover:shadow-[var(--accent-orange)]/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-shrink-0">
                    {area.icon}
                  </div>
                  {/* Email Anchor Link */}
                  <a
                    href={getMailtoUrl(area.subject, area.body)}
                    className="p-2.5 rounded-full bg-[var(--accent-orange)]/10 text-[var(--accent-orange)] border border-[var(--accent-orange)]/20 hover:bg-[var(--accent-orange)] hover:text-white transition-all transform hover:scale-110 flex items-center justify-center cursor-pointer shadow-sm hover:shadow-[var(--accent-orange)]/30"
                    title={`Send email about ${area.title}`}
                    aria-label={`Send email about ${area.title}`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--foreground)] group-hover:text-[var(--accent-orange-light)] transition-colors">
                  {area.title}
                </h3>
                <p className="text-sm text-[var(--foreground-secondary)] leading-relaxed mb-4">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

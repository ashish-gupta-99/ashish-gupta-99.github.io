"use client";

import { useState } from "react";
import Link from "next/link";

// Social media configuration - easily editable
const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ashish-gupta-b1507b1b7/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/ashish-gupta-99",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/princeashish808",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.996 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.176 15.65c-.015.034-.038.067-.066.096a.23.23 0 0 1-.326 0l-1.077-1.077a.23.23 0 0 1-.067-.163c0-.063.024-.122.067-.165l.412-.413h-4.321v4.321l.412-.412a.23.23 0 0 1 .328 0l1.077 1.077c.09.09.09.237 0 .327l-.096.066a7.618 7.618 0 0 1-3.64.922 7.7 7.7 0 0 1-7.7-7.7c0-2.846 1.545-5.333 3.844-6.65c.033-.016.067-.038.096-.066a.23.23 0 0 1 .326 0l1.077 1.077a.23.23 0 0 1 0 .327l-.412.412h4.321V5.75l-.412.412a.23.23 0 0 1-.327 0L9.363 5.086a.23.23 0 0 1 0-.327l.096-.066a7.7 7.7 0 0 1 11.34 6.729c0 1.579-.475 3.047-1.286 4.269zM12 9.122a2.878 2.878 0 1 0 0 5.756 2.878 2.878 0 0 0 0-5.756z"/>
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/AshishGupt73",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: "Email",
    url: "mailto:gupta.ash8051@gmail.com?subject=Let's%20Connect&body=Hi%20Ashish,%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0ABest%20regards,",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Ventures", href: "#ventures" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-40 bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border-color)]">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo/Name */}
        <Link href="/" className="text-xl font-bold gradient-text">
          AG
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[var(--foreground-secondary)] hover:text-[var(--accent-orange)] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Links - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground-secondary)] hover:text-[var(--accent-orange)] transition-colors"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--foreground)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--background)]/95 backdrop-blur-md border-t border-[var(--border-color)]">
          <div className="px-6 py-4 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-[var(--foreground-secondary)] hover:text-[var(--accent-orange)] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile Social Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-[var(--border-color)]">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--foreground-secondary)] hover:text-[var(--accent-orange)] transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

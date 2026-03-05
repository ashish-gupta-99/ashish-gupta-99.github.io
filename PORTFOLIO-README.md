# Ashish Gupta - Portfolio

A modern, space-themed portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## 🚀 Features

- **Space Theme**: Animated starfield background with configurable density
- **Interactive Elements**: Scroll-reactive metallic gears, solar system tech stack visualization
- **Fully Responsive**: Mobile-first design with hamburger menu
- **Modern Stack**: Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4
- **Easy Configuration**: All content and colors managed through simple config files

## 🎨 Customization Guide

### 1. Colors (app/globals.css)

Edit the CSS variables at the top of `app/globals.css`:

```css
:root {
  --background: #0a0a0a;  /* Main background */
  --accent-orange: #ff6b35;  /* Primary accent color */
  --accent-orange-light: #ff8c42;  /* Hover states */
  /* ... more variables */
}
```

### 2. Star Animation

In `app/components/SpaceBackground.tsx`, change line 16:

```typescript
const STAR_DENSITY_MODE: 'light' | 'medium' = 'medium';
// Options: 'light' (50 stars) or 'medium' (150 stars)
```

### 3. Personal Information

**Hero Section** (`app/components/HeroSection.tsx`):
- Replace Next.js logo: Update `src="/next.svg"` to your photo path
- Edit name, tagline, and introduction text

**Social Links** (`app/components/Header.tsx`, line 8):
```typescript
const SOCIAL_LINKS = [
  { name: "LinkedIn", url: "https://linkedin.com/in/your-profile", ... },
  // Update all URLs
];
```

### 4. Tech Stack

Edit `app/components/TechStackSolarSystem.tsx`, line 16:

```typescript
export const TECH_STACK: MajorSkill[] = [
  {
    name: "AI & ML",
    color: "#ff6b35",
    subSkills: [
      { name: "PyTorch", color: "#ee4c2c" },
      // Add/remove skills
    ],
  },
  // Add more major skills
];
```

### 5. Currently Learning

Edit `app/components/CurrentlyLearning.tsx`, line 11:

```typescript
export const CURRENTLY_LEARNING: LearningItem[] = [
  {
    title: "Your Topic",
    description: "What you're learning",
    why: "Why you're learning it",
    icon: "🚁",
    progress: 65,
  },
];
```

### 6. Projects

Edit `app/components/ProjectsSection.tsx`, line 13:

```typescript
export const PROJECTS: Project[] = [
  {
    title: "Project Name",
    description: "Project description",
    techStack: ["Tech1", "Tech2"],
    category: "featured", // or "diy"
    liveUrl: "https://...",
    githubUrl: "https://...",
    highlights: ["Achievement 1", "Achievement 2"],
  },
];
```

### 7. Achievements

Edit `app/components/AchievementsSection.tsx`, line 12:

```typescript
export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Achievement Title",
    organization: "Organization Name",
    date: "2025",
    description: "Description",
    icon: "🏆",
    type: "certification", // or "award", "publication", "other"
  },
];
```

### 8. Quote

Edit `app/components/QuoteSection.tsx`, line 2:

```typescript
const QUOTE = {
  text: "Your inspirational quote here",
  author: "Author Name",
  context: "Author's title/context",
};
```

### 9. CV/Resume

Place your CV PDF in the `/public` folder and name it `new-ashish-gupta-cvi.pdf`, or update the path in `app/components/HeroSection.tsx` line 74.

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📁 Project Structure

```
app/
├── components/           # All React components
│   ├── SpaceBackground.tsx
│   ├── RotatingGear.tsx
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── TechStackSolarSystem.tsx
│   ├── CurrentlyLearning.tsx
│   ├── SeekingVentures.tsx
│   ├── ProjectsSection.tsx
│   ├── AchievementsSection.tsx
│   └── QuoteSection.tsx
├── globals.css          # Global styles & CSS variables
├── layout.tsx           # Root layout with fonts & metadata
└── page.tsx             # Main page composition

public/                  # Static assets
├── new-ashish-gupta-cvi.pdf
└── *.svg
```

## 🎯 Key Features Explained

### Scroll-Reactive Gears
Gears rotate based on scroll velocity - scroll faster, they spin faster. Implemented in `RotatingGear.tsx`.

### Solar System Tech Stack
Major skills are "suns" with sub-skills orbiting as "planets". Fully animated using HTML Canvas. Add new skills in the `TECH_STACK` array.

### Space Background
Uses HTML Canvas for performance. Stars twinkle at random intervals with different durations for a realistic effect.

### Responsive Design
Mobile-first approach with hamburger menu, optimized touch targets, and flexible layouts.

## 📝 To-Do (Future Enhancements)

- [ ] Add actual photo (replace Next.js logo)
- [ ] Update all social media URLs
- [ ] Add real project screenshots
- [ ] Create actual CV PDF
- [ ] Add hobbies section (future version)
- [ ] Add blog integration (future version)
- [ ] SEO optimization (meta tags, Open Graph)

## 🚀 Deployment

This portfolio is ready to deploy to Vercel, Netlify, or any platform supporting Next.js 16.

### Vercel (Recommended)
```bash
npm run build
# Deploy via Vercel CLI or GitHub integration
```

## 📄 License

Personal portfolio - feel free to use as inspiration, but please don't copy directly.

---

**Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS**

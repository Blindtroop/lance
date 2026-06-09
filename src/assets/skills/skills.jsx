import { motion } from "motion/react";

const skills = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="1" y="3" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 7l3 3-3 3M10 13h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Web Design",
    body: "Figma wireframes, responsive UI and user-centered interfaces built with design principles that are both aesthetically pleasing and easy to navigate.",
    highlighted: true,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 1v3M9 14v3M1 9h3M14 9h3M3.22 3.22l2.12 2.12M12.66 12.66l2.12 2.12M3.22 14.78l2.12-2.12M12.66 5.34l2.12-2.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Search Engine Optimization",
    body: "On-page and technical SEO using Google Analytics and Search Console. Keyword research, content optimization, and backlink building for higher rankings.",
    highlighted: false,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="1" y="4" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="7" y="7" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Responsive Web Design",
    body: "Fluid layouts across all devices using CSS Grid, Flexbox, and Tailwind. Every site I build looks sharp from 320px mobile to 4K desktop.",
    highlighted: false,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="3" cy="5" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="15" cy="5" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="9" cy="14" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 5h8M3 7l6 5M15 7l-6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Version Control",
    body: "Git and GitHub workflows including branching, merging, pull requests, and code reviews. Clean commit history and collaborative development practices.",
    highlighted: false,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M4 9l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: "DOM Manipulation",
    body: "Dynamic page updates with JavaScript and jQuery. Event handling, component interactivity, and clean efficient code that improves performance.",
    highlighted: false,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2a7 7 0 100 14A7 7 0 009 2z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 6v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Soft Skills",
    body: "Strong communicator, team player and problem-solver. Comfortable working cross-functionally and delivering under tight deadlines without compromising quality.",
    highlighted: false,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  return (
    <section id="skills" className="bg-[#008080] py-24 px-10">
      <div className="max-w-6xl mx-auto">

        {/* heading */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-5 h-[1.5px] bg-accent block" />
          </div>
          <h2 className="text-[32px] font-bold tracking-[-0.02em] text-white">
            Services &amp; skills
          </h2>
        </div>

        {/* grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              variants={item}
              className="relative bg-bg-card rounded-[8px] p-5 border border-white/[0.07] hover:border-white/[0.12] transition-colors duration-300 overflow-hidden group"
            >
              {/* subtle hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "radial-gradient(circle at 20% 20%, rgba(212,176,0,0.04) 0%, transparent 60%)" }}
              />

              {/* icon */}
              <div
                className="w-9 h-9 rounded-[6px] flex items-center justify-center mb-4 text-accent text-[#D4B000]"
              >
                {skill.icon}
              </div>

              <h3 className="text-[13px] font-semibold text-white mb-2">
                {skill.title}
              </h3>
              <p
                className="text-[12px] leading-relaxed text-white/90"
              >
                {skill.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
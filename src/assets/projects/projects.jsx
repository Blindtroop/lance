import { motion } from "motion/react";

const projects = [
  {
    title:       "Fredrick Solutions",
    description: "A clean, conversion-focused portfolio writing website. Built with a focus on fast load times, clear copywriting hierarchy and lead capture.",
    tags:        ["React", "Tailwind", "Vite"],
    live:        "https://fredricksolutions.com",   // replace
    github:      "https://github.com/lancekaluhi",  // replace
    gradient:    "linear-gradient(135deg, #1a1a0a 0%, #2a2200 100%)",
    accentColor: "#D4B000",
    initials:    "Fredrick",
  },
  {
    title:       "MTN Plateau Fragrances",
    description: "Online room rental platform connecting landlords and tenants. Features listings, filtering, and an enquiry system for Nairobi-based rentals.",
    tags:        ["React", "Bootstrap", "Node.js"],
    live:        "https://mtnplateau.com/",       // replace
    github:      "https://github.com/Blindtroop/mtn",   // replace
    gradient:    "linear-gradient(135deg, #0a1020 0%, #001a30 100%)",
    accentColor: "#38BDF8",
    initials:    "MTN",
  },

   {
    title:       "Echoes",
    description: "Online room rental platform connecting landlords and tenants. Features listings, filtering, and an enquiry system for Nairobi-based rentals.",
    tags:        ["React", "Bootstrap", "Node.js"],
    live:        "https://myechoesapp.vercel.app/",       // replace
    github:      "https://github.com/Blindtroop/echoes",   // replace
    gradient:    "linear-gradient(135deg, #0a1020 0%, #001a30 100%)",
    accentColor: "#38BDF8",
    initials:    "Echoes",
  },

   {
    title:       "Mbaikia",
    description: "Online room rental platform connecting landlords and tenants. Features listings, filtering, and an enquiry system for Nairobi-based rentals.",
    tags:        ["React", "Bootstrap", "Node.js"],
    live:        "https://mbaikia.vercel.app/",       // replace
    github:      "https://github.com/Blindtroop/mbaikia",   // replace
    gradient:    "linear-gradient(135deg, #0a1020 0%, #001a30 100%)",
    accentColor: "#38BDF8",
    initials:    "Mbaikia",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const card = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Projects() {
  return (
    <section id="projects" className="bg-[#008080] py-14 px-10">
      <div className="max-w-6xl mx-auto">

        {/* heading */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-5 h-[1.5px] bg-accent block" />
          </div>
          <h2 className="text-[32px] font-bold tracking-[-0.02em] text-white">
            Selected projects
          </h2>
        </div>

        {/* cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              variants={card}
              className="bg-bg-card rounded-[8px] border border-white/[0.07] overflow-hidden group hover:border-white transition-colors duration-300"
            >
              {/* preview area */}
              <div
                className="h-[120px] flex items-center justify-center relative overflow-hidden"
                style={{
                  background: p.gradient,
                  borderBottom: "0.5px solid rgba(255,255,255,0.05)",
                }}
              >
                <span
                  className="text-[40px] font-extrabold tracking-[-0.04em] select-none opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  style={{ color: p.accentColor }}
                >
                  {p.initials}
                </span>
                {/* external link icon on hover */}
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: "rgba(0,0,0,0.4)" }}
                  aria-label={`Visit ${p.title}`}
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M9 4H4a1 1 0 00-1 1v13a1 1 0 001 1h13a1 1 0 001-1v-5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M14 3h5v5M19 3l-9 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>

              {/* content */}
              <div className="p-5">
                <h3 className="text-[14px] font-semibold text-white mb-2">
                  {p.title}
                </h3>
                <p
                  className="text-[12px] leading-relaxed mb-4 text-white"
                >
                  {p.description}
                </p>

                {/* tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-2 py-[3px] rounded-[4px]"
                      style={{
                        color: "#D4B000",
                        background: "rgba(212,176,0,0.10)",
                        border: "0.5px solid rgba(212,176,0,0.20)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* action buttons */}
                <div className="flex gap-2">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-accent text-white text-[10px] font-semibold tracking-btn uppercase px-4 py-[7px] rounded-[3px] hover:brightness-110 transition-all duration-200"
                  >
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <path d="M1 10L10 1M10 1H4M10 1v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Live site
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border text-accent text-[10px] font-medium text-white tracking-btn uppercase px-4 py-[6px] rounded-[3px] hover:border-accent transition-all duration-200"
                  >
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <path d="M5.5 1a4.5 4.5 0 00-1.424 8.77c.225.041.307-.097.307-.216v-.777c-1.252.272-1.516-.603-1.516-.603-.204-.52-.499-.658-.499-.658-.408-.279.031-.273.031-.273.451.032.689.463.689.463.4.686 1.05.488 1.306.373.041-.29.157-.489.285-.601-.996-.113-2.043-.498-2.043-2.216 0-.489.175-.889.462-1.202-.046-.113-.2-.569.044-1.186 0 0 .376-.121 1.232.459a4.29 4.29 0 011.12-.151c.38.002.763.051 1.12.151.856-.58 1.231-.459 1.231-.459.245.617.091 1.073.045 1.186.288.313.461.713.461 1.202 0 1.722-1.048 2.101-2.047 2.212.161.139.304.413.304.832v1.233c0 .12.081.259.31.215A4.5 4.5 0 005.5 1z" fill="currentColor"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
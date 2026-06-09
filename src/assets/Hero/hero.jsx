import { motion } from "motion/react";

const stats = [
  { value: "3+", label: "Years exp." },
  { value: "12+", label: "Projects" },
  { value: "8+", label: "Happy clients" },
  { value: "5★", label: "Rating" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center bg-[#F4E1C1] overflow-hidden"
    >
      {/* glow blob */}
      <div className="pointer-events-none absolute left-[-80px] w-[480px] h-[480px] rounded-full opacity-[0.07] bg-[radial-gradient(circle,#D4B000_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 w-full flex flex-col-reverse sm:flex-row items-center justify-between gap-10 sm:gap-16 py-20 sm:py-28">

        {/* LEFT */}
        <div className="flex-1 max-w-[520px] text-center sm:text-left">

          {/* pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 mb-6 px-4 py-[6px] rounded-full border bg-[rgba(212,176,0,0.08)] border-[#008080]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#008080] opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#008080]" />
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#008080]">
              Available for work
            </span>
          </motion.div>

          {/* name */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[38px] sm:text-[52px] font-extrabold leading-[1.05] tracking-[-0.03em] text-black mb-2"
          >
            Lance <br />
            <span className="text-[#008080]">Kaluhi.</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="text-[14px] sm:text-[15px] font-semibold text-black/40 mb-3"
          >
            Frontend Developer — Nairobi, Kenya
          </motion.p>

          {/* description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="text-[13px] text-black/40 leading-relaxed mb-8 max-w-[380px] mx-auto sm:mx-0"
          >
            Crafting modern, performant web experiences with React, Tailwind &
            clean code. Passionate about UI that&apos;s both beautiful and fast.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center sm:justify-start gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-[#008080] text-white text-[11px] font-semibold uppercase px-6 py-3 rounded-[3px] hover:brightness-110 transition"
            >
              View work
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 6h8M6 2l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href="https://drive.google.com/file/d/1gMX3V0mM2gG3kBsYGyb4gpgWDUxWrn__/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#008080]/40 text-[#008080] text-[11px] font-medium uppercase px-6 py-[11px] rounded-[3px] hover:border-[#008080] transition"
            >
              Resume
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M6 2v6M3 6l3 3 3-3M2 10h8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* RIGHT — photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="shrink-0 relative"
        >
          <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border border-[rgba(212,176,0,0.2)] shadow-[0_0_60px_rgba(212,176,0,0.08)]">
            <img
              src="https://i.postimg.cc/mDg0RmvB/download.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-[-12px] rounded-full pointer-events-none border border-dashed border-[rgba(212,176,0,0.12)]" />
        </motion.div>
      </div>

      {/* STATS */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="relative z-10 border-t border-black/50 w-full"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-10 grid grid-cols-2 sm:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={[
                "flex flex-col items-center py-5 border-black/50",
                // on mobile (2-col): right border on cols 0 only; col 1 is last in row
                // on sm (4-col): right border on all except last
                i === 0 ? "border-r" : "",
                i === 1 ? "border-r-0 sm:border-r" : "",
                i === 2 ? "border-r" : "",
                i === 3 ? "border-r-0" : "",
              ]
                .join(" ")
                .trim()}
            >
              <span className="text-[22px] font-bold text-[#008080] leading-none mb-1">
                {s.value}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-black/30">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
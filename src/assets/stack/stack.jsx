import { motion } from "motion/react";

const primary = [
  { name: "HTML5",      abbr: "H5",  color: "#E34C26", bg: "#2A0A00" },
  { name: "CSS3",       abbr: "C3",  color: "#264DE4", bg: "#00082A" },
  { name: "JavaScript", abbr: "JS",  color: "#F7DF1E", bg: "#2A2700" },
  { name: "React",      abbr: "Re",  color: "#61DAFB", bg: "#002A30" },
  { name: "Tailwind",   abbr: "TW",  color: "#38BDF8", bg: "#002030" },
  { name: "Angular",    abbr: "Ng",  color: "#DD0031", bg: "#2A0009" },
];

const secondary = [
  { name: "Bootstrap",  abbr: "BS",  color: "#7952B3", bg: "#160A2A" },
  { name: "WordPress",  abbr: "WP",  color: "#21759B", bg: "#001A22" },
  { name: "Vite",       abbr: "Vi",  color: "#BD34FE", bg: "#1A002A" },
  { name: "Framer",     abbr: "FM",  color: "#0055FF", bg: "#001230" },
  { name: "Node.js",    abbr: "No",  color: "#539E43", bg: "#061A00" },
  { name: "Figma",      abbr: "Fg",  color: "#F24E1E", bg: "#2A0800" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

function Badge({ name, abbr, color, bg }) {
  return (
    <motion.div
      variants={item}
      className="flex items-center gap-3 px-4 py-3 rounded-[6px] border border-white/[0.07] bg-bg-card hover:border-[#008080] transition-colors duration-200 cursor-default group"
    >
      <div
        className="w-22 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-[13px] font-extrabold"
        style={{ background: bg, color }}
      >
        {abbr}
        </div>
      <span
        className="text-[12px] font-medium group-hover:text-[#008080] transition-colors duration-200 text-black"
      >
        {name}
      </span>
    </motion.div>
  );
}

export default function Stack() {
  return (
    <section id="tech stack" className="bg-[#F4E1C1] py-24 px-10">
      <div className="max-w-6xl mx-auto">

        {/* heading */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-5 h-[1.5px] bg-accent block" />
            <span className="text-[11px] text-black/20 font-medium tracking-tag uppercase text-accent">
              Tech stack
            </span>
          </div>
          <h2 className="text-[32px] font-bold tracking-[-0.02em] text-black">
            Languages &amp; tools
          </h2>
        </div>

        {/* primary stack */}
        <div className="mb-6">
          <p
            className="text-[10px] font-medium tracking-[0.1em] uppercase mb-4 text-black"
          >
            Primary
          </p>
          <motion.div
            className="text-black grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 "
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {primary.map((t) => <Badge key={t.name} {...t} />)}
          </motion.div>
        </div>

        {/* secondary / familiar */}
        <div>
          <p
            className="text-[10px] font-medium tracking-[0.1em] uppercase mb-4 text-black"
          >
            Also familiar with
          </p>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {secondary.map((t) => <Badge key={t.name} {...t} />)}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
import { useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";

const SERVICE_ID  = "YOUR_SERVICE_ID";   // ← replace
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // ← replace

const contactInfo = [
  {
    label: "Email",
    value: "kaluhilance4@gmail.com",
    href:  "mailto:kaluhilance4@gmail.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+254 011 5112760",
    href:  "tel:+25401151127600",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 2h3l1.5 3.5L6 7s1 2 3 3l1.5-1.5L14 10v3s-1 2-3 1C6 12 4 10 3 6c-1-2 0-4 0-4z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Nairobi, Kenya",
    href:  null,
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1a5 5 0 00-5 5c0 3.5 5 9 5 9s5-5.5 5-9a5 5 0 00-5-5z" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
];

const socials = [
  { label: "GitHub",    href: "https://github.com/lancekaluhi",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 1.5a7.5 7.5 0 00-2.37 14.616c.375.069.512-.163.512-.361V14.22c-2.087.454-2.527-1.005-2.527-1.005-.34-.867-.832-1.097-.832-1.097-.68-.465.052-.456.052-.456.752.053 1.148.773 1.148.773.668 1.143 1.75.813 2.177.622.068-.483.261-.814.476-1.001-1.66-.189-3.405-.83-3.405-3.693 0-.816.292-1.482.77-2.004-.077-.189-.333-.948.073-1.976 0 0 .627-.201 2.053.765A7.154 7.154 0 019 5.868c.633.003 1.27.085 1.865.251 1.425-.966 2.051-.765 2.051-.765.407 1.028.151 1.787.074 1.976.48.522.769 1.188.769 2.004 0 2.87-1.748 3.502-3.413 3.687.268.232.507.688.507 1.387v2.053c0 .2.135.434.517.36A7.5 7.5 0 009 1.5z" fill="currentColor"/></svg> },
  { label: "LinkedIn",  href: "#",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="1.5" y="1.5" width="15" height="15" rx="3" stroke="currentColor" strokeWidth="1.4"/><path d="M5 7.5V13M5 5v.5M8.5 13V10a1.5 1.5 0 013 0v3M8.5 7.5V13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg> },
  { label: "Twitter/X", href: "#",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 3l5.5 6L3 15h2l4.25-4.75L13 15h3l-5.75-6.5L15.5 3h-2L9 7.5 5.5 3H3z" fill="currentColor"/></svg> },
];

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name:  form.name.value,
        from_email: form.email.value,
        message:    form.message.value,
      });
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-[#F4E1C1] py-24 px-10">
      <div className="max-w-6xl mx-auto">

        {/* heading */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-5 h-[1.5px] bg-accent block" />
          </div>
          <h2 className="text-[32px] font-bold tracking-[-0.02em] text-black">
            Let's build{" "}
            <span className="text-accent text-[#008080]">something great.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* ── Left: info ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <p
              className="text-[13px] leading-[1.75] mb-8 max-w-[360px]"
            >
              Available for freelance projects, full-time roles, and
              collaborations. Based in Nairobi — happy to work remotely.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4">
                  <div
                    className="w-9 h-9 rounded-[6px] flex items-center justify-center flex-shrink-0 text-accent"
                    style={{
                      background: "rgba(212,176,0,0.10)",
                      border: "0.5px solid rgba(212,176,0,0.20)",
                    }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p
                      className="text-[10px] font-medium tracking-[0.08em] uppercase mb-[2px]"
                    >
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-[12px] hover:text-accent transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-[12px]" >
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* socials */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-[6px] flex items-center justify-center border text-black hover:text-accent hover:border-accent/30 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="bg-bg-card rounded-[8px] p-7 border border-white/[0.07]"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              {/* name */}
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-[10px] font-medium tracking-[0.08em] uppercase"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  required
                  className="bg-bg border border-[#008080] rounded-[4px] px-4 py-3 text-[12px] text-black font-light outline-none placeholder:text-black/50 focus:border-accent/50 transition-colors duration-200"
                />
              </div>

              {/* email */}
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-[10px] font-medium tracking-[0.08em] uppercase"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="bg-bg border border-[#008080] rounded-[4px] px-4 py-3 text-[12px] text-black font-light outline-none placeholder:text-black/50 focus:border-accent/50 transition-colors duration-200"
                />
              </div>

              {/* message */}
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-[10px] font-medium tracking-[0.08em] uppercase"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project…"
                  required
                  className="bg-bg border border-[#008080] rounded-[4px] px-4 py-3 text-[12px] text-black font-light outline-none placeholder:text-black/50 focus:border-accent/50 transition-colors duration-200"
                />
              </div>

              {/* status */}
              {status === "success" && (
                <p className="text-[12px] font-medium text-accent">
                  ✓ Message sent! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-[12px] font-medium text-red-400">
                  Something went wrong. Please try again.
                </p>
              )}

              {/* submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-1 w-full inline-flex items-center justify-center gap-2 bg-[#008080] text-[#0D0D0D] text-[11px] font-semibold tracking-btn uppercase py-3 rounded-[3px] hover:brightness-110 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  "Sending…"
                ) : (
                  <>
                    Send message
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
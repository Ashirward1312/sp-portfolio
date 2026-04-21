// ServicesSection.jsx (React + TailwindCSS + Framer Motion)
// ✅ Premium Studio Aesthetic (Ivory, Gold, Obsidian)
// ✅ High-End Typography & Spacing
// ✅ Staggered Entrance Animations
// ✅ Refined Iconography

import { motion } from "framer-motion";

const services = [
  {
    key: "ai-powered-marketing",
    title: "AI Ecosystems",
    desc: "Harnessing deep learning and predictive analytics to engineer high-converting narrative structures.",
    points: ["Chatbot Architecture", "Predictive Analytics", "Dynamic Targeting", "Automated Assets"],
    Icon: AIChipIcon,
  },
  {
    key: "outdoor-advertising",
    title: "Global Presence",
    desc: "Unmissable outdoor presence through strategic urban placement—from high-impact gantries to society activations.",
    points: ["Urban Hoardings", "Strategic Gantry", "Mobile Presence", "Society Networks"],
    Icon: BillboardIcon,
  },
  {
    key: "digital-marketing",
    title: "Digital Strategy",
    desc: "Performance-driven growth through precise SEO, search architecture, and conversion-focused social funnels.",
    points: ["SEO Architecture", "Social Strategy", "Performance Ads", "Web Ecosystems"],
    Icon: DigitalIcon,
  },
  {
    key: "designing-services",
    title: "Brand Identity",
    desc: "Premium visual languages designed for modern heritage—from sophisticated logos to luxury packaging.",
    points: ["Luxury Packaging", "Visual Identity", "Curated Concepts", "Editorial Design"],
    Icon: DesignIcon,
  },
  {
    key: "audio-visuals",
    title: "Cinema & Audio",
    desc: "Powerful storytelling through cinematic video production, documentary lenses, and immersive audio scores.",
    points: ["Cinematic Shorts", "Commercial Filming", "Sound Design", "Event Production"],
    Icon: AudioVisualIcon,
  },
  {
    key: "branding-strategy",
    title: "Strategic Consulting",
    desc: "Master-level brand architecture—conceptualizing communications that define market leadership.",
    points: ["Brand Architecture", "360 Campaigns", "Market Positioning", "Crisis Management"],
    Icon: StrategyIcon,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#FAF9F5] py-24 sm:py-32">
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-30">
        <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-[#E8E2D2] blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#EBE7DC] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6">
        {/* Header */}
        <header className="mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[11px] font-black uppercase tracking-[0.4em] text-[#735C00] mb-4"
          >
            Our Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl font-serif text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-[-0.03em] text-[#00020A] leading-[1.05]"
          >
            Engineering Growth Through <span className="italic font-light text-[#735C00]">Creative Precision</span>
          </motion.h2>
          <div className="mx-auto mt-8 h-px w-24 bg-[#735C00]/30" />
        </header>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <motion.article
              key={s.key}
              variants={itemVariants}
              className="group relative flex flex-col rounded-[2.5rem] bg-white p-10 shadow-[0_15px_50px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0_20px_60px_rgba(115,92,0,0.06)] border border-slate-100/50"
            >
              {/* Icon Wrap */}
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F4F1E8] text-[#735C00] transition-colors group-hover:bg-[#00020A] group-hover:text-white">
                <s.Icon />
              </div>

              <h3 className="mb-4 text-2xl font-black uppercase tracking-tight text-[#00020A]">
                {s.title}
              </h3>
              
              <p className="mb-8 text-sm font-bold leading-relaxed text-slate-500">
                {s.desc}
              </p>

              {/* Points */}
              <div className="mt-auto">
                <ul className="mb-8 grid gap-x-4 gap-y-3 border-t border-slate-100 pt-8 sm:grid-cols-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#735C00]/40" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#00020A]/70">{p}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-[#735C00] transition-transform hover:translate-x-1"
                >
                  Consultation
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Global CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[3.5rem] bg-[#00020A] p-12 text-center sm:p-20 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#735C00]/20 blur-[100px]" />
          
          <h3 className="relative z-10 font-serif text-3xl sm:text-5xl font-bold text-white mb-6">
            Scale Your Narrative
          </h3>
          <p className="relative z-10 mx-auto mb-10 max-w-2xl text-[11px] font-black uppercase tracking-[0.3em] text-[#735C00]">
            Global Solutions / Creative Intelligence / Market Mastery
          </p>
          
          <div className="relative z-10 flex flex-wrap justify-center gap-6">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl bg-[#735C00] px-10 py-5 text-xs font-black uppercase tracking-[0.25em] text-white transition hover:bg-[#8F7400] hover:-translate-y-1 shadow-xl shadow-black/40"
            >
              Start Project
            </a>
            <a
              href="tel:+918085354646"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-10 py-5 text-xs font-black uppercase tracking-[0.25em] text-white backdrop-blur-xl transition hover:bg-white hover:text-black"
            >
              Contact Studio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Premium Icon Library ---------------- */
function AIChipIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="9" y1="9" x2="15" y2="15" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <path d="M12 2v2M2 12h2M12 20v2M20 12h2" />
    </svg>
  );
}
function BillboardIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="12" />
      <line x1="5" y1="20" x2="9" y2="17" />
      <line x1="19" y1="20" x2="15" y2="17" />
      <line x1="8" y1="9" x2="16" y2="9" />
    </svg>
  );
}
function DigitalIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}
function DesignIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2v10l4.5 4.5" />
      <path d="M12 2a10 10 0 0 1 10 10" />
    </svg>
  );
}
function AudioVisualIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3" />
      <path d="M19 12l-7-7v14l7-7z" />
    </svg>
  );
}
function StrategyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 12 20 22 4 22 4 12" />
      <path d="M20 7L12 3 4 7l8 4 8-4z" />
      <line x1="12" y1="22" x2="12" y2="11" />
    </svg>
  );
}
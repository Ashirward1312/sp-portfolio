

import { useEffect, useMemo, useState, useRef } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";

/* ================== DYNAMIC ASSET IMPORT ================== */
const images = import.meta.glob("./creative/*.{webp,jpg,png,jpeg}", { eager: true });
const videos = import.meta.glob("./creative/*.mp4", { eager: true });

const getImageUrl = (name) => {
  const path = `./creative/${name}`;
  return images[path]?.default || images[path];
};
const getVideoUrl = (name) => {
  const path = `./creative/${name}`;
  return videos[path]?.default || videos[path];
};

/* ================== WEBSITE LINKS ================== */
const WEBSITE_LINKS = [
  "https://landbazar.in/",
  "https://maheshventures.in/",
  "https://sambhavsansthan.org/",
  "https://www.laafifoods.com/",
  "https://aarogyahospitalraipur.com/",
  "https://ssgtgroup.com/",
  "https://www.thepradeepmaheshwari.com/",
  "https://cleveryoungsters.in/",
  "https://www.nirmaantmt.com/",
  "https://sprn.in/",
  "https://coldfistfitnessclub.in/",
  "https://drchitraendocare.com/",
  "https://muraadconstruction.com/",



];

const domainOf = (url) => {
  try { return new URL(url).hostname.replace(/^www\./, ""); } catch { return url; }
};

/* ================== LABELS ================== */
const CATEGORY_LABELS = {
  "creative-posts": "Creative Posts",
  artboards: "Design Concepts",
  "digital-marketing": "Digital Strategy",
  websites: "Web Projects",
  "event-promotion": "Event Promotion",
  "in-shop-branding": "In‑Shop Branding",
  "outdoor-advertising": "Outdoor Advertising",
  "print-media": "Print Media",
  video: "Video Showcase",
  seo: "SEO Services",
  "google-ads": "Google Ads",
  "lead-generation": "Lead Generation Campaign",
};



const labelOf = (cat) => CATEGORY_LABELS[cat] || cat;

/* ================== DATA ================== */
const generatePortfolioData = () => {
  const data = [];
  let id = 1;

  const videoCollection = [
    { file: "video1.mp4", reach: "35K+" },
    { file: "25k+.mp4", reach: "25K+" },
    { file: "video2.mp4", reach: "50K+" },
    { file: "40k+.mp4", reach: "40K+" },
    { file: "video3.mp4", reach: "28K+" },
    { file: "70k+ reach.mp4", reach: "70K+" },
  ];

  videoCollection.forEach((v, i) => {
    const url = getVideoUrl(v.file);
    if (url) data.push({
      id: id++,
      category: "video",
      title: `Brand Campaign ${i + 1} (${v.reach} Reach)`,
      asset: url,
      type: "video"
    });
  });

  const creativeOrder = [1, 5, 2, 8, 3, 11, 4, 14, 6, 12, 7, 15, 13, 10, 9];
  creativeOrder.forEach((i) => {
    const url = getImageUrl(`c${i}.webp`);
    if (url) data.push({ id: id++, category: "creative-posts", title: "Creative Ad", asset: url, type: "image" });
  });

  // Digital Reach Videos - Mixed Order
  const reachVideos = [
    "70k+ reach.mp4", "23k+.mp4", "40k+.mp4", "25k+.mp4", "30k+r.mp4", "30k+.mp4", "42k+.mp4",
  ];
  reachVideos.forEach((file) => {
    const url = getVideoUrl(file);
    if (url) {
      const numMatch = file.match(/(\d+)/);
      const num = numMatch ? numMatch[1] : "30";
      data.push({
        id: id++,
        category: "digital-marketing",
        title: `${num}K+ Organic Reach`,
        asset: url,
        type: "video"
      });
    }
  });

  const artboardOrder = [1, 5, 2, 8, 3, 11, 4, 14, 6, 12, 7, 10, 9, 13];
  artboardOrder.forEach((i) => {
    const url = getImageUrl(`Artboard ${i}.webp`);
    if (url) data.push({ id: id++, category: "artboards", title: "Digital Concept", asset: url, type: "image" });
  });

  const eventFiles = ["event.webp", "event3.webp", "event2.webp", "event4.webp", "event5.webp", "event6.webp", "event7.webp"];
  eventFiles.forEach((file, i) => {
    const url = getImageUrl(file);
    if (url) data.push({ id: id++, category: "event-promotion", title: "Event Promotion", asset: url, type: "image" });
  });

  for (let i = 1; i <= 4; i++) {
    const url = getImageUrl(`inshop${i}.webp`);
    if (url) data.push({ id: id++, category: "in-shop-branding", title: "In‑Shop Branding", asset: url, type: "image" });
  }

  for (let i = 1; i <= 13; i++) {
    const url = getImageUrl(`website${i}.webp`);
    if (url) data.push({ id: id++, category: "websites", title: "Website Project", asset: url, type: "image", link: WEBSITE_LINKS[i - 1] });
  }

  for (let i = 1; i <= 5; i++) {
    const url = getImageUrl(`outdoor${i}.webp`);
    if (url) data.push({ id: id++, category: "outdoor-advertising", title: "Outdoor Advertising", asset: url, type: "image" });
  }

  // SEO
  ["seovideo.mp4", "seovideo2.mp4"].forEach((file, i) => {
    const url = getVideoUrl(file);
    if (url) data.push({ id: id++, category: "seo", title: `SEO Performance ${i + 1}`, asset: url, type: "video" });
  });
  ["l.webp", "l2.webp"].forEach((file, i) => {
    const url = getImageUrl(file);
    if (url) data.push({ id: id++, category: "seo", title: `SEO Case Study ${i + 1}`, asset: url, type: "image" });
  });

  // Google Ads
  ["GA.webp", "GA1.webp", "GA2.webp"].forEach((file, i) => {
    const url = getImageUrl(file);
    if (url) data.push({ id: id++, category: "google-ads", title: "Google Ads Campaign", asset: url, type: "image" });
  });

  // Lead Generation
  ["a1.jpeg", "a2.jpeg", "a3.jpeg", "a4.jpeg"].forEach((file, i) => {
    const url = getImageUrl(file);
    if (url) data.push({ id: id++, category: "lead-generation", title: `Lead Gen Campaign ${i + 1}`, asset: url, type: "image" });
  });

  return data;
};

const portfolioData = generatePortfolioData();

/* ================== CATEGORIES ================== */
const categories = [
  { id: "all", name: "All Work" },
  { id: "video", name: "Video" },
  { id: "creative-posts", name: "Creative" },
  { id: "digital-marketing", name: "Digital" },
  { id: "websites", name: "Website" },
  { id: "event-promotion", name: "Events" },
  { id: "in-shop-branding", name: "Branding" },
  { id: "outdoor-advertising", name: "Outdoor" },
  { id: "seo", name: "SEO" },
  { id: "google-ads", name: "Google Ads" },
  { id: "lead-generation", name: "Lead Generation" },
];

/* ================== CURSOR GLOW ================== */
function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(700px circle at ${pos.x}px ${pos.y}px, rgba(79,70,229,0.15), transparent 60%)`,
      }}
    />
  );
}

/* ================== MAIN ================== */
export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return portfolioData;
    if (activeCategory === "digital-marketing")
      return portfolioData.filter((p) => p.category === "digital-marketing" || p.category === "artboards");
    return portfolioData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const selectedProject = selectedIndex == null ? null : filteredProjects[selectedIndex];

  const next = (e) => {
    e?.stopPropagation();
    setSelectedIndex((i) => (i === null ? i : (i + 1) % filteredProjects.length));
  };

  const prev = (e) => {
    e?.stopPropagation();
    setSelectedIndex((i) => (i === null ? i : (i - 1 + filteredProjects.length) % filteredProjects.length));
  };

  const close = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, filteredProjects.length]);

  return (
    <>
      <style>{`
        body { background:#0b0f1a; }
        .heading-font { font-family:'Bebas Neue',sans-serif; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `} </style>

      <CursorGlow />

      <section id="portfolio" className="relative min-h-screen py-28 text-white bg-[#0b0f1a]">

        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="font-[Inter] font-semibold text-[clamp(40px,5vw,80px)] leading-[1.05] tracking-[-0.01em]"
            >
              <span className="block text-gray-300">
                VISUAL
              </span>

              <span className="block text-transparent bg-clip-text 
      bg-gradient-to-r from-indigo-400 via-purple-500 to-fuchsia-500">
                NARRATIVES
              </span>
            </motion.h2>
          </div>

          {/* FILTER */}
          <div className="flex justify-center gap-4 mb-16 flex-wrap overflow-x-auto no-scrollbar pb-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2.5 text-[10px] uppercase font-black tracking-widest rounded-full border transition-all ${activeCategory === cat.id
                  ? "bg-indigo-600 border-indigo-500 text-white shadow-[0_0_20px_rgba(79,70,229,0.4)]"
                  : "border-white/10 bg-white/5 text-white/50 hover:border-indigo-500/50 hover:text-white"
                  }`}
              >
                {cat.name}
              </button>
            ))}
          </div>



          {/* GRID */}
          <motion.div
            layout
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p, idx) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => {
                    setSelectedIndex(idx);
                    document.body.style.overflow = "hidden";
                  }}
                  className="group cursor-pointer rounded-2xl overflow-hidden border border-white/5 bg-[#111827] hover:border-indigo-500/30 transition-all duration-500"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    {p.type === "video" ? (
                      <video src={p.asset} autoPlay muted loop playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    ) : (
                      <img src={p.asset} alt={p.title} className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-110" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f1a] via-transparent to-transparent opacity-60" />

                    {/* Hover Info */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-indigo-400 mb-2">{labelOf(p.category)}</span>
                      <h3 className="text-sm font-bold uppercase text-white">{p.title}</h3>
                    </div>
                  </div>
                  <div className="p-4 border-t border-white/5 flex justify-between items-center">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[11px] font-black uppercase tracking-wider text-white/80 truncate">{p.title}</h3>
                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-indigo-400/70 text-[9px] mt-1 font-bold uppercase tracking-widest hover:text-indigo-400 transition-colors block truncate"
                        >
                          {domainOf(p.link)}
                        </a>
                      )}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-indigo-600 transition-colors shrink-0">
                      {p.link ? (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      ) : (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-[#0b0f1a] text-white">

        {/* Top subtle divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

        {/* Background glow effects */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="rounded-[3rem] p-8 sm:p-20 overflow-hidden relative border border-indigo-500/20 bg-gradient-to-br from-indigo-900/30 to-purple-900/20 backdrop-blur-2xl shadow-[0_40px_120px_-20px_rgba(0,0,0,0.6)] text-center">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-indigo-400 font-black tracking-[0.4em] uppercase text-[10px] mb-6 block">
                Let's Build Together
              </span>

              <h2 className="heading-font text-5xl sm:text-7xl mb-8 leading-[0.9]">
                READY TO START<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  YOUR PROJECT?
                </span>
              </h2>

              <p className="max-w-2xl mx-auto text-white/60 text-lg mb-12 font-medium leading-relaxed">
                Transform your ideas into exceptional digital experiences. Our team is ready to bring your vision to life with precision and creativity.
              </p>

              {/* Single Clean CTA */}
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="group relative px-12 py-5 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 font-black uppercase tracking-widest text-[11px] text-white transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(99,102,241,0.4)]"
                >
                  Start a Conversation
                  <div className="absolute inset-0 rounded-2xl bg-indigo-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-slate-950/98 backdrop-blur-md flex items-center justify-center p-4 sm:p-12 z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              className="absolute top-6 right-6 sm:top-10 sm:right-10 text-white/40 hover:text-white transition-all z-[110] p-3 rounded-full bg-white/5 hover:bg-white/10 active:scale-90"
              aria-label="Close"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={prev}
              className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-all z-[110] p-4 rounded-2xl bg-white/5 hover:bg-white/10 hidden md:block"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              onClick={next}
              className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-all z-[110] p-4 rounded-2xl bg-white/5 hover:bg-white/10 hidden md:block"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Modal Content */}
            <motion.div
              className="max-w-5xl w-full relative group"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-slate-900 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
                {/* Media Container */}
                <div className="relative min-h-[30vh] max-h-[65vh] flex items-center justify-center bg-black/40">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedProject.id}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full flex items-center justify-center p-4 sm:p-8"
                    >
                      {selectedProject.type === "video" ? (
                        <video src={selectedProject.asset} controls autoPlay className="w-full max-h-[60vh] object-contain rounded-xl" />
                      ) : (
                        <img src={selectedProject.asset} alt={selectedProject.title} className="w-full max-h-[60vh] object-contain rounded-xl" />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Footer Info */}
                <div className="p-6 sm:p-10 bg-slate-900 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
                  <div className="text-center sm:text-left">
                    <span className="text-sky-500 font-black uppercase tracking-[0.4em] text-[10px] mb-2 block">{labelOf(selectedProject.category)}</span>
                    <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">{selectedProject.title}</h3>
                  </div>

                  <div className="flex items-center gap-4">
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 rounded-xl bg-sky-600 text-white text-[11px] font-black uppercase tracking-widest hover:bg-sky-500 transition-all active:scale-95 shadow-lg shadow-sky-600/20"
                      >
                        Visit Website
                      </a>
                    )}
                    <div className="h-10 px-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                      <span className="text-[11px] font-black text-white/30 tabular-nums">
                        {String(selectedIndex + 1).padStart(2, "0")} / {String(filteredProjects.length).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
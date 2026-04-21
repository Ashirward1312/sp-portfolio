// Portfolio.jsx (React + TailwindCSS + Framer Motion)
// ✅ Light blue premium theme (colors updated)
// ✅ Tabs small + Video tab working (videos from ./creative folder)
// ✅ Grid + Lightbox (image/video) same logic
// ✅ Full code

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* ================== DYNAMIC ASSET IMPORT (Vite) ================== */
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

/* ================== LABELS ================== */
const CATEGORY_LABELS = {
  "creative-posts": "Creative Posts",
  artboards: "Digital Strategy",
  "digital-marketing": "Digital Strategy",
  websites: "Web Projects",
  "event-promotion": "Event Promotion",
  "in-shop-branding": "In‑Shop Branding",
  "outdoor-advertising": "Outdoor Advertising",
  "print-media": "Print Media",
  video: "Video Showcase",
};
const labelOf = (cat) => CATEGORY_LABELS[cat] || cat;

/* ================== DATA GENERATOR ================== */
const generatePortfolioData = () => {
  const data = [];
  let id = 1;

  // 1) Videos
  for (let i = 1; i <= 3; i++) {
    const url = getVideoUrl(`video${i}.mp4`);
    if (url) {
      data.push({
        id: id++,
        category: "video",
        title: `Video ${i}`,
        asset: url,
        type: "video",
      });
    }
  }

  // 2) Creative Posts
  for (let i = 1; i <= 15; i++) {
    const fileName = i <= 9 || i === 11 ? `c${i}.webp` : `c${i}.jpg`;
    const url = getImageUrl(fileName);
    if (url) data.push({ id: id++, category: "creative-posts", title: `Creative ${i}`, asset: url, type: "image" });
  }

  // 3) Artboards -> Digital
  for (let i = 1; i <= 14; i++) {
    const fileName = i <= 6 ? `Artboard ${i}.webp` : `Artboard ${i}.jpg`;
    const url = getImageUrl(fileName);
    if (url) data.push({ id: id++, category: "artboards", title: `Digital ${i}`, asset: url, type: "image" });
  }

  // 4) Events
  const eventFiles = ["event.webp", "event2.webp", "event3.webp", "event4.jpg", "event5.jpg", "event6.jpg", "event7.jpg"];
  eventFiles.forEach((file, index) => {
    const url = getImageUrl(file);
    if (url) data.push({ id: id++, category: "event-promotion", title: `Event ${index + 1}`, asset: url, type: "image" });
  });

  // 5) In‑Shop Branding
  for (let i = 1; i <= 4; i++) {
    const url = getImageUrl(`inshop${i}.jpg`);
    if (url) data.push({ id: id++, category: "in-shop-branding", title: `In‑Shop ${i}`, asset: url, type: "image" });
  }

  // 6) Websites
  for (let i = 1; i <= 7; i++) {
    const url = getImageUrl(`website${i}.webp`);
    if (url) data.push({ id: id++, category: "websites", title: `Website ${i}`, asset: url, type: "image" });
  }

  // 7) Outdoor
  for (let i = 1; i <= 5; i++) {
    const fileName = i === 4 ? `outdoor${i}.webp` : `outdoor${i}.jpg`;
    const url = getImageUrl(fileName);
    if (url) data.push({ id: id++, category: "outdoor-advertising", title: `Outdoor ${i}`, asset: url, type: "image" });
  }

  // 8) Extras
  const extras = [
    { name: "print.jpg", category: "print-media", title: "Print 1" },
    { name: "print2.jpg", category: "print-media", title: "Print 2" },
    { name: "print3.jpg", category: "print-media", title: "Print 3" },

  ];
  extras.forEach((x) => {
    const url = getImageUrl(x.name);
    if (url) data.push({ id: id++, category: x.category, title: x.title, asset: url, type: "image" });
  });

  return data;
};

const portfolioData = generatePortfolioData();

/* ================== CATEGORIES ================== */
const categories = [
  { id: "all", name: "The Collection" },
  { id: "video", name: "Video" },
  { id: "creative-posts", name: "Creative" },
  { id: "digital-marketing", name: "Digital" },
  { id: "websites", name: "Web" },
  { id: "event-promotion", name: "Events" },
  { id: "in-shop-branding", name: "Branding" },
  { id: "outdoor-advertising", name: "Outdoor" },
  { id: "print-media", name: "Print" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return portfolioData;

    // merge digital-marketing + artboards
    if (activeCategory === "digital-marketing") {
      return portfolioData.filter((p) => p.category === "digital-marketing" || p.category === "artboards");
    }

    return portfolioData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const selectedProject = selectedIndex == null ? null : filteredProjects[selectedIndex];

  const openAt = (idx) => {
    setSelectedIndex(idx);
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "auto";
  };

  const next = () => setSelectedIndex((i) => (i == null ? i : (i + 1) % filteredProjects.length));
  const prev = () => setSelectedIndex((i) => (i == null ? i : (i - 1 + filteredProjects.length) % filteredProjects.length));

  useEffect(() => {
    if (selectedIndex == null) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex, filteredProjects.length]);

  return (
    <section id="portfolio" className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* ✅ Light-blue background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-white to-blue-50" />
      <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-80 w-80 rounded-full bg-sky-200/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-24 -z-10 h-96 w-96 rounded-full bg-blue-200/25 blur-3xl" />

      <div className="mx-auto max-w-[1400px] px-6">
        {/* Heading */}
        <header className="mb-10 text-center border-b border-sky-100 pb-9">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[10px] font-black uppercase tracking-[0.34em] text-sky-700"
          >
            Curated Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mx-auto mt-4 max-w-3xl text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] text-slate-900 leading-[1.03]"
          >
           <span className="text-black">
  Visual Narratives
</span>
          </motion.h2>

          <div className="mx-auto mt-4 h-[2px] w-24 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 opacity-60" />
        </header>

        {/* Tabs (small) */}
        <div className="mb-10 overflow-x-auto no-scrollbar px-4">
          <nav className="mx-auto flex w-max flex-nowrap items-center justify-center gap-6 pb-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={[
                  "relative whitespace-nowrap rounded-full px-4 py-2 uppercase transition",
                  "text-[10px] font-black tracking-[0.24em]",
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-sm"
                    : "bg-white/70 text-slate-600 ring-1 ring-sky-100 hover:bg-sky-50",
                ].join(" ")}
              >
                {cat.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Grid */}
        <motion.div layout className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, idx) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group relative cursor-pointer"
                onClick={() => openAt(idx)}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-sky-100 bg-white/80 shadow-[0_10px_30px_rgba(2,132,199,0.10)] transition-transform duration-700 group-hover:scale-[1.02]">
                  {p.type === "video" ? (
                    <video
                      src={p.asset}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <img
                      src={p.asset}
                      alt={p.title}
                      className="h-full w-full object-contain p-8 transition-transform duration-1000 group-hover:scale-110"
                      loading="lazy"
                    />
                  )}

                  {/* soft inner border */}
                  <div className="absolute inset-x-4 inset-y-4 rounded-2xl border border-sky-200/0 transition-colors duration-500 group-hover:border-sky-300/40" />

                  {/* hover overlay */}
                  <div className="absolute inset-0 bg-slate-950/75 opacity-0 backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center p-10 text-center">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-300 mb-4 block">
                        {labelOf(p.category)}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight uppercase">
                        {p.title}
                      </h3>
                      <div className="mt-7 h-px w-10 bg-sky-300/80 mx-auto" />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-between items-start px-2">
                  <div>
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide">{p.title}</h3>
                    <p className="mt-1 text-[10px] font-bold text-slate-500 uppercase tracking-[0.1em]">
                      {labelOf(p.category)}
                    </p>
                  </div>
                  <span className="text-[10px] font-black text-sky-700">
                    / {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/55 p-4 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-7xl overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-[0_30px_90px_rgba(2,132,199,0.22)]"
            >
              {/* top bar */}
              <div className="flex items-center justify-between gap-3 border-b border-sky-100 bg-white/80 px-4 py-3">
                <div className="min-w-0">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-sky-700">
                    {labelOf(selectedProject.category)}
                  </p>
                  <p className="truncate text-sm font-extrabold text-slate-900">{selectedProject.title}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    aria-label="Prev"
                  >
                    <ChevronLeftIcon className="h-5 w-5" />
                  </button>
                  <button
                    onClick={next}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    aria-label="Next"
                  >
                    <ChevronRightIcon className="h-5 w-5" />
                  </button>
                  <button
                    onClick={close}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    aria-label="Close"
                  >
                    <XIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* content */}
              <div className="bg-gradient-to-br from-sky-50 via-white to-blue-50 p-4">
                <div className="flex items-center justify-center overflow-hidden rounded-2xl border border-sky-100 bg-white">
                  {selectedProject.type === "video" ? (
                    <video
                      src={selectedProject.asset}
                      controls
                      autoPlay
                      playsInline
                      className="h-[70vh] w-full object-contain p-3 sm:p-6 bg-black"
                    />
                  ) : (
                    <motion.img
                      key={selectedProject.asset}
                      src={selectedProject.asset}
                      alt={selectedProject.title}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25 }}
                      className="h-[70vh] w-full object-contain p-3 sm:p-6"
                    />
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}

/* ================== ICONS ================== */
function ChevronLeftIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M15 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ChevronRightIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function XIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
// // Portfolio.jsx (React + TailwindCSS + Framer Motion)
// // ✅ Added website links (website1..website7)
// // ✅ "Visit Website" button on hover + in Lightbox (for website items)
// // ✅ Full code

// import { useEffect, useMemo, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// /* ================== DYNAMIC ASSET IMPORT (Vite) ================== */
// const images = import.meta.glob("./creative/*.{webp,jpg,png,jpeg}", { eager: true });
// const videos = import.meta.glob("./creative/*.mp4", { eager: true });

// const getImageUrl = (name) => {
//   const path = `./creative/${name}`;
//   return images[path]?.default || images[path];
// };

// const getVideoUrl = (name) => {
//   const path = `./creative/${name}`;
//   return videos[path]?.default || videos[path];
// };

// /* ================== WEBSITE LINKS (ADDED) ================== */
// const WEBSITE_LINKS = [
//   "https://landbazar.in/",
//   "https://maheshventures.in/",
//   "https://sambhavsansthan.org/",
//   "https://www.laafifoods.com/",
//   "https://aarogyahospitalraipur.com/",
//   "https://ssgtgroup.com/",
//   "https://www.thepradeepmaheshwari.com/",
// ];

// const domainOf = (url) => {
//   try {
//     return new URL(url).hostname.replace(/^www\./, "");
//   } catch {
//     return url;
//   }
// };

// /* ================== LABELS ================== */
// const CATEGORY_LABELS = {
//   "creative-posts": "Creative Posts",
//   artboards: "Digital Strategy",
//   "digital-marketing": "Digital Strategy",
//   websites: "Web Projects",
//   "event-promotion": "Event Promotion",
//   "in-shop-branding": "In‑Shop Branding",
//   "outdoor-advertising": "Outdoor Advertising",
//   "print-media": "Print Media",
//   video: "Video Showcase",
// };
// const labelOf = (cat) => CATEGORY_LABELS[cat] || cat;

// /* ================== DATA GENERATOR ================== */
// const generatePortfolioData = () => {
//   const data = [];
//   let id = 1;

//   // 1) Videos
//   for (let i = 1; i <= 3; i++) {
//     const url = getVideoUrl(`video${i}.mp4`);
//     if (url) {
//       data.push({
//         id: id++,
//         category: "video",
//         title: `Video ${i}`,
//         asset: url,
//         type: "video",
//       });
//     }
//   }

//   // 2) Creative Posts
//   for (let i = 1; i <= 15; i++) {
//     const fileName = i <= 9 || i === 11 ? `c${i}.webp` : `c${i}.jpg`;
//     const url = getImageUrl(fileName);
//     if (url)
//       data.push({
//         id: id++,
//         category: "creative-posts",
//         title: `Creative ${i}`,
//         asset: url,
//         type: "image",
//       });
//   }

//   // 3) Artboards -> Digital
//   for (let i = 1; i <= 14; i++) {
//     const fileName = i <= 6 ? `Artboard ${i}.webp` : `Artboard ${i}.jpg`;
//     const url = getImageUrl(fileName);
//     if (url)
//       data.push({
//         id: id++,
//         category: "artboards",
//         title: `Digital ${i}`,
//         asset: url,
//         type: "image",
//       });
//   }

//   // 4) Events
//   const eventFiles = ["event.webp", "event2.webp", "event3.webp", "event4.jpg", "event5.jpg", "event6.jpg", "event7.jpg"];
//   eventFiles.forEach((file, index) => {
//     const url = getImageUrl(file);
//     if (url)
//       data.push({
//         id: id++,
//         category: "event-promotion",
//         title: `Event ${index + 1}`,
//         asset: url,
//         type: "image",
//       });
//   });

//   // 5) In‑Shop Branding
//   for (let i = 1; i <= 4; i++) {
//     const url = getImageUrl(`inshop${i}.jpg`);
//     if (url)
//       data.push({
//         id: id++,
//         category: "in-shop-branding",
//         title: `In‑Shop ${i}`,
//         asset: url,
//         type: "image",
//       });
//   }

//   // 6) Websites (✅ links added)
//   for (let i = 1; i <= 7; i++) {
//     const url = getImageUrl(`website${i}.webp`);
//     const websiteLink = WEBSITE_LINKS[i - 1];

//     if (url)
//       data.push({
//         id: id++,
//         category: "websites",
//         title: `Website ${i}`,
//         asset: url,
//         type: "image",
//         link: websiteLink, // ✅ NEW
//       });
//   }

//   // 7) Outdoor
//   for (let i = 1; i <= 5; i++) {
//     const fileName = i === 4 ? `outdoor${i}.webp` : `outdoor${i}.jpg`;
//     const url = getImageUrl(fileName);
//     if (url)
//       data.push({
//         id: id++,
//         category: "outdoor-advertising",
//         title: `Outdoor ${i}`,
//         asset: url,
//         type: "image",
//       });
//   }

//   // 8) Extras
//   const extras = [
//     { name: "print.jpg", category: "print-media", title: "Print 1" },
//     { name: "print2.jpg", category: "print-media", title: "Print 2" },
//     { name: "print3.jpg", category: "print-media", title: "Print 3" },
//   ];
//   extras.forEach((x) => {
//     const url = getImageUrl(x.name);
//     if (url)
//       data.push({
//         id: id++,
//         category: x.category,
//         title: x.title,
//         asset: url,
//         type: "image",
//       });
//   });

//   return data;
// };

// const portfolioData = generatePortfolioData();

// /* ================== CATEGORIES ================== */
// const categories = [
//   { id: "all", name: "The Collection" },
//   { id: "video", name: "Video" },
//   { id: "creative-posts", name: "Creative" },
//   { id: "digital-marketing", name: "Digital" },
//   { id: "websites", name: "Web" },
//   { id: "event-promotion", name: "Events" },
//   { id: "in-shop-branding", name: "Branding" },
//   { id: "outdoor-advertising", name: "Outdoor" },
//   { id: "print-media", name: "Print" },
// ];

// export default function Portfolio() {
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [selectedIndex, setSelectedIndex] = useState(null);

//   const filteredProjects = useMemo(() => {
//     if (activeCategory === "all") return portfolioData;

//     // merge digital-marketing + artboards
//     if (activeCategory === "digital-marketing") {
//       return portfolioData.filter((p) => p.category === "digital-marketing" || p.category === "artboards");
//     }

//     return portfolioData.filter((p) => p.category === activeCategory);
//   }, [activeCategory]);

//   const selectedProject = selectedIndex == null ? null : filteredProjects[selectedIndex];

//   const openAt = (idx) => {
//     setSelectedIndex(idx);
//     document.body.style.overflow = "hidden";
//   };

//   const close = () => {
//     setSelectedIndex(null);
//     document.body.style.overflow = "auto";
//   };

//   const next = () => setSelectedIndex((i) => (i == null ? i : (i + 1) % filteredProjects.length));
//   const prev = () => setSelectedIndex((i) => (i == null ? i : (i - 1 + filteredProjects.length) % filteredProjects.length));

//   useEffect(() => {
//     if (selectedIndex == null) return;
//     const onKeyDown = (e) => {
//       if (e.key === "Escape") close();
//       if (e.key === "ArrowRight") next();
//       if (e.key === "ArrowLeft") prev();
//     };
//     document.addEventListener("keydown", onKeyDown);
//     return () => document.removeEventListener("keydown", onKeyDown);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [selectedIndex, filteredProjects.length]);

//   return (
//     <section id="portfolio" className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
//       {/* ✅ Light-blue background */}
//       <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-white to-blue-50" />
//       <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-80 w-80 rounded-full bg-sky-200/35 blur-3xl" />
//       <div className="pointer-events-none absolute -right-24 top-24 -z-10 h-96 w-96 rounded-full bg-blue-200/25 blur-3xl" />

//       <div className="mx-auto max-w-[1400px] px-6">
//         {/* Heading */}
//         <header className="mb-10 text-center border-b border-sky-100 pb-9">
//           <motion.span
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="inline-block text-[10px] font-black uppercase tracking-[0.34em] text-sky-700"
//           >
//             Curated Work
//           </motion.span>

//           <motion.h2
//             initial={{ opacity: 0, y: 14 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.08 }}
//             className="mx-auto mt-4 max-w-3xl text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] text-slate-900 leading-[1.03]"
//           >
//             <span className="text-black">Visual Narratives</span>
//           </motion.h2>

//           <div className="mx-auto mt-4 h-[2px] w-24 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 opacity-60" />
//         </header>

//         {/* Tabs (small) */}
//         <div className="mb-10 overflow-x-auto no-scrollbar px-4">
//           <nav className="mx-auto flex w-max flex-nowrap items-center justify-center gap-6 pb-3">
//             {categories.map((cat) => (
//               <button
//                 key={cat.id}
//                 onClick={() => setActiveCategory(cat.id)}
//                 className={[
//                   "relative whitespace-nowrap rounded-full px-4 py-2 uppercase transition",
//                   "text-[10px] font-black tracking-[0.24em]",
//                   activeCategory === cat.id
//                     ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-sm"
//                     : "bg-white/70 text-slate-600 ring-1 ring-sky-100 hover:bg-sky-50",
//                 ].join(" ")}
//               >
//                 {cat.name}
//               </button>
//             ))}
//           </nav>
//         </div>

//         {/* Grid */}
//         <motion.div layout className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
//           <AnimatePresence mode="popLayout">
//             {filteredProjects.map((p, idx) => (
//               <motion.article
//                 key={p.id}
//                 layout
//                 initial={{ opacity: 0, y: 18 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 0.97 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//                 className="group relative cursor-pointer"
//                 onClick={() => openAt(idx)}
//               >
//                 <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-sky-100 bg-white/80 shadow-[0_10px_30px_rgba(2,132,199,0.10)] transition-transform duration-700 group-hover:scale-[1.02]">
//                   {p.type === "video" ? (
//                     <video src={p.asset} autoPlay muted loop playsInline className="h-full w-full object-cover" />
//                   ) : (
//                     <img
//                       src={p.asset}
//                       alt={p.title}
//                       className="h-full w-full object-contain p-8 transition-transform duration-1000 group-hover:scale-110"
//                       loading="lazy"
//                     />
//                   )}

//                   {/* soft inner border */}
//                   <div className="absolute inset-x-4 inset-y-4 rounded-2xl border border-sky-200/0 transition-colors duration-500 group-hover:border-sky-300/40" />

//                   {/* hover overlay */}
//                   <div className="absolute inset-0 bg-slate-950/75 opacity-0 backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center p-10 text-center">
//                     <div>
//                       <span className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-300 mb-4 block">
//                         {labelOf(p.category)}
//                       </span>

//                       <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight uppercase">
//                         {p.title}
//                       </h3>

//                       {/* ✅ Website link button */}
//                       {p.link && (
//                         <a
//                           href={p.link}
//                           target="_blank"
//                           rel="noreferrer"
//                           onClick={(e) => e.stopPropagation()}
//                           className="mt-5 inline-flex items-center justify-center rounded-full bg-white/90 px-5 py-2 text-[11px] font-black uppercase tracking-widest text-slate-900 hover:bg-white"
//                         >
//                           Visit Website ({domainOf(p.link)})
//                         </a>
//                       )}

//                       <div className="mt-7 h-px w-10 bg-sky-300/80 mx-auto" />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-6 flex justify-between items-start px-2">
//                   <div className="min-w-0">
//                     <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide">{p.title}</h3>
//                     <p className="mt-1 text-[10px] font-bold text-slate-500 uppercase tracking-[0.1em]">
//                       {labelOf(p.category)}
//                     </p>

//                     {/* ✅ Show website URL under title (optional but nice) */}
//                     {p.link && (
//                       <a
//                         href={p.link}
//                         target="_blank"
//                         rel="noreferrer"
//                         onClick={(e) => e.stopPropagation()}
//                         className="mt-2 block truncate text-[11px] font-extrabold text-sky-700 hover:underline"
//                         title={p.link}
//                       >
//                         {p.link}
//                       </a>
//                     )}
//                   </div>

//                   <span className="text-[10px] font-black text-sky-700">
//                     / {String(idx + 1).padStart(2, "0")}
//                   </span>
//                 </div>
//               </motion.article>
//             ))}
//           </AnimatePresence>
//         </motion.div>
//       </div>

//       {/* Lightbox */}
//       <AnimatePresence>
//         {selectedProject && (
//           <motion.div
//             className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/55 p-4 backdrop-blur"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={close}
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.98, y: 10 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.98, y: 10 }}
//               transition={{ duration: 0.2 }}
//               onClick={(e) => e.stopPropagation()}
//               className="relative w-full max-w-7xl overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-[0_30px_90px_rgba(2,132,199,0.22)]"
//             >
//               {/* top bar */}
//               <div className="flex items-center justify-between gap-3 border-b border-sky-100 bg-white/80 px-4 py-3">
//                 <div className="min-w-0">
//                   <p className="text-xs font-extrabold uppercase tracking-widest text-sky-700">
//                     {labelOf(selectedProject.category)}
//                   </p>
//                   <p className="truncate text-sm font-extrabold text-slate-900">{selectedProject.title}</p>

//                   {/* ✅ Website link in lightbox */}
//                   {selectedProject.link && (
//                     <a
//                       href={selectedProject.link}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="mt-1 inline-block truncate text-xs font-extrabold text-sky-700 hover:underline"
//                       title={selectedProject.link}
//                     >
//                       {selectedProject.link}
//                     </a>
//                   )}
//                 </div>

//                 <div className="flex items-center gap-2">
//                   {/* ✅ Open site button */}
//                   {selectedProject.link && (
//                     <a
//                       href={selectedProject.link}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="hidden sm:inline-flex h-10 items-center justify-center rounded-xl bg-sky-500 px-4 text-xs font-black uppercase tracking-widest text-white hover:bg-sky-600"
//                     >
//                       Open Site
//                     </a>
//                   )}

//                   <button
//                     onClick={prev}
//                     className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
//                     aria-label="Prev"
//                   >
//                     <ChevronLeftIcon className="h-5 w-5" />
//                   </button>
//                   <button
//                     onClick={next}
//                     className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
//                     aria-label="Next"
//                   >
//                     <ChevronRightIcon className="h-5 w-5" />
//                   </button>
//                   <button
//                     onClick={close}
//                     className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
//                     aria-label="Close"
//                   >
//                     <XIcon className="h-5 w-5" />
//                   </button>
//                 </div>
//               </div>

//               {/* content */}
//               <div className="bg-gradient-to-br from-sky-50 via-white to-blue-50 p-4">
//                 <div className="flex items-center justify-center overflow-hidden rounded-2xl border border-sky-100 bg-white">
//                   {selectedProject.type === "video" ? (
//                     <video
//                       src={selectedProject.asset}
//                       controls
//                       autoPlay
//                       playsInline
//                       className="h-[70vh] w-full object-contain p-3 sm:p-6 bg-black"
//                     />
//                   ) : (
//                     <motion.img
//                       key={selectedProject.asset}
//                       src={selectedProject.asset}
//                       alt={selectedProject.title}
//                       initial={{ opacity: 0, x: 12 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.25 }}
//                       className="h-[70vh] w-full object-contain p-3 sm:p-6"
//                     />
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <style>{`
//         .no-scrollbar::-webkit-scrollbar { display: none; }
//         .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
//       `}</style>
//     </section>
//   );
// }

// /* ================== ICONS ================== */
// function ChevronLeftIcon({ className }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none">
//       <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// }
// function ChevronRightIcon({ className }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none">
//       <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// }
// function XIcon({ className }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none">
//       <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
//     </svg>
//   );
// }
// Portfolio.jsx — Premium Edition
// Dark luxury aesthetic | Cinematic animations | Modern editorial style
// Drop-in replacement — keeps all your existing data/asset logic



// import { useEffect, useMemo, useState, useRef } from "react";
// import { AnimatePresence, motion, useScroll, useTransform, useSpring } from "framer-motion";

// /* ================== DYNAMIC ASSET IMPORT (Vite) ================== */
// const images = import.meta.glob("./creative/*.{webp,jpg,png,jpeg}", { eager: true });
// const videos = import.meta.glob("./creative/*.mp4", { eager: true });

// const getImageUrl = (name) => {
//   const path = `./creative/${name}`;
//   return images[path]?.default || images[path];
// };
// const getVideoUrl = (name) => {
//   const path = `./creative/${name}`;
//   return videos[path]?.default || videos[path];
// };

// /* ================== WEBSITE LINKS ================== */
// const WEBSITE_LINKS = [
//   "https://landbazar.in/",
//   "https://maheshventures.in/",
//   "https://sambhavsansthan.org/",
//   "https://www.laafifoods.com/",
//   "https://aarogyahospitalraipur.com/",
//   "https://ssgtgroup.com/",
//   "https://www.thepradeepmaheshwari.com/",
// ];

// const domainOf = (url) => {
//   try { return new URL(url).hostname.replace(/^www\./, ""); } catch { return url; }
// };

// /* ================== LABELS ================== */
// const CATEGORY_LABELS = {
//   "creative-posts": "Creative Posts",
//   artboards: "Digital Strategy",
//   "digital-marketing": "Digital Strategy",
//   websites: "Web Projects",
//   "event-promotion": "Event Promotion",
//   "in-shop-branding": "In‑Shop Branding",
//   "outdoor-advertising": "Outdoor Advertising",
//   "print-media": "Print Media",
//   video: "Video Showcase",
// };
// const labelOf = (cat) => CATEGORY_LABELS[cat] || cat;

// /* ================== DATA ================== */
// const generatePortfolioData = () => {
//   const data = [];
//   let id = 1;

//   for (let i = 1; i <= 3; i++) {
//     const url = getVideoUrl(`video${i}.mp4`);
//     if (url) data.push({ id: id++, category: "video", title: `Video ${i}`, asset: url, type: "video" });
//   }
//   for (let i = 1; i <= 15; i++) {
//     const fileName = i <= 9 || i === 11 ? `c${i}.webp` : `c${i}.jpg`;
//     const url = getImageUrl(fileName);
//     if (url) data.push({ id: id++, category: "creative-posts", title: `Creative ${i}`, asset: url, type: "image" });
//   }
//   for (let i = 1; i <= 14; i++) {
//     const fileName = i <= 6 ? `Artboard ${i}.webp` : `Artboard ${i}.jpg`;
//     const url = getImageUrl(fileName);
//     if (url) data.push({ id: id++, category: "artboards", title: `Digital ${i}`, asset: url, type: "image" });
//   }
//   const eventFiles = ["event.webp","event2.webp","event3.webp","event4.jpg","event5.jpg","event6.jpg","event7.jpg"];
//   eventFiles.forEach((file, i) => {
//     const url = getImageUrl(file);
//     if (url) data.push({ id: id++, category: "event-promotion", title: `Event ${i + 1}`, asset: url, type: "image" });
//   });
//   for (let i = 1; i <= 4; i++) {
//     const url = getImageUrl(`inshop${i}.jpg`);
//     if (url) data.push({ id: id++, category: "in-shop-branding", title: `In‑Shop ${i}`, asset: url, type: "image" });
//   }
//   for (let i = 1; i <= 7; i++) {
//     const url = getImageUrl(`website${i}.webp`);
//     if (url) data.push({ id: id++, category: "websites", title: `Website ${i}`, asset: url, type: "image", link: WEBSITE_LINKS[i - 1] });
//   }
//   for (let i = 1; i <= 5; i++) {
//     const fileName = i === 4 ? `outdoor${i}.webp` : `outdoor${i}.jpg`;
//     const url = getImageUrl(fileName);
//     if (url) data.push({ id: id++, category: "outdoor-advertising", title: `Outdoor ${i}`, asset: url, type: "image" });
//   }
//   [{ name: "print.jpg", category: "print-media", title: "Print 1" },
//    { name: "print2.jpg", category: "print-media", title: "Print 2" },
//    { name: "print3.jpg", category: "print-media", title: "Print 3" }].forEach((x) => {
//     const url = getImageUrl(x.name);
//     if (url) data.push({ id: id++, category: x.category, title: x.title, asset: url, type: "image" });
//   });

//   return data;
// };

// const portfolioData = generatePortfolioData();

// /* ================== CATEGORIES ================== */
// const categories = [
//   { id: "all", name: "All Work" },
//   { id: "video", name: "Video" },
//   { id: "creative-posts", name: "Creative" },
//   { id: "digital-marketing", name: "Digital" },
//   { id: "websites", name: "Web" },
//   { id: "event-promotion", name: "Events" },
//   { id: "in-shop-branding", name: "Branding" },
//   { id: "outdoor-advertising", name: "Outdoor" },
//   { id: "print-media", name: "Print" },
// ];

// /* ================== CURSOR GLOW ================== */
// function CursorGlow() {
//   const [pos, setPos] = useState({ x: -200, y: -200 });
//   useEffect(() => {
//     const move = (e) => setPos({ x: e.clientX, y: e.clientY });
//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);
//   return (
//     <div
//       className="pointer-events-none fixed inset-0 z-0"
//       style={{
//         background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(234,179,8,0.04), transparent 60%)`,
//       }}
//     />
//   );
// }

// /* ================== CARD ================== */
// function PortfolioCard({ p, idx, onClick }) {
//   const ref = useRef(null);
//   const [tilt, setTilt] = useState({ x: 0, y: 0 });
//   const [hovered, setHovered] = useState(false);

//   const handleMouseMove = (e) => {
//     const rect = ref.current.getBoundingClientRect();
//     const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
//     const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
//     setTilt({ x, y });
//   };

//   return (
//     <motion.article
//       ref={ref}
//       layout
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, scale: 0.95 }}
//       viewport={{ once: true, margin: "-60px" }}
//       transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: (idx % 6) * 0.07 }}
//       className="group relative cursor-pointer"
//       onMouseMove={handleMouseMove}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
//       onClick={onClick}
//       style={{ perspective: "1000px" }}
//     >
//       <motion.div
//         animate={{ rotateY: tilt.x, rotateX: tilt.y }}
//         transition={{ type: "spring", stiffness: 300, damping: 30 }}
//         className="relative"
//         style={{ transformStyle: "preserve-3d" }}
//       >
//         {/* Card */}
//         <div className="relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 shadow-2xl">
//           {/* Glow border on hover */}
//           <motion.div
//             className="absolute inset-0 rounded-2xl pointer-events-none z-10"
//             animate={{ opacity: hovered ? 1 : 0 }}
//             transition={{ duration: 0.3 }}
//             style={{ boxShadow: "inset 0 0 0 1px rgba(234,179,8,0.5)" }}
//           />

//           {/* Media */}
//           <div className="relative aspect-[4/5] overflow-hidden">
//             {p.type === "video" ? (
//               <video src={p.asset} autoPlay muted loop playsInline className="h-full w-full object-cover" />
//             ) : (
//               <img
//                 src={p.asset}
//                 alt={p.title}
//                 loading="lazy"
//                 className="h-full w-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
//               />
//             )}

//             {/* Dark gradient overlay always */}
//             <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/10 to-transparent" />

//             {/* Hover overlay */}
//             <motion.div
//               className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
//               animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 12 }}
//               transition={{ duration: 0.35 }}
//             >
//               <span className="text-[9px] font-black uppercase tracking-[0.35em] text-amber-400 mb-3">
//                 {labelOf(p.category)}
//               </span>
//               <h3 className="text-2xl font-black text-white tracking-tight uppercase leading-tight">
//                 {p.title}
//               </h3>
//               {p.link && (
//                 <a
//                   href={p.link}
//                   target="_blank"
//                   rel="noreferrer"
//                   onClick={(e) => e.stopPropagation()}
//                   className="mt-5 inline-flex items-center gap-2 rounded-full border border-amber-400/60 bg-amber-400/10 px-5 py-2 text-[10px] font-black uppercase tracking-widest text-amber-300 hover:bg-amber-400 hover:text-black transition-all duration-200"
//                 >
//                   <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
//                     <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
//                   </svg>
//                   Visit Site
//                 </a>
//               )}
//               <div className="mt-5 w-8 h-px bg-amber-400/60" />
//             </motion.div>

//             {/* Category tag */}
//             <motion.div
//               className="absolute top-4 left-4"
//               animate={{ opacity: hovered ? 0 : 1 }}
//               transition={{ duration: 0.2 }}
//             >
//               <span className="inline-block rounded-full bg-black/60 backdrop-blur px-3 py-1 text-[9px] font-black uppercase tracking-widest text-white/70 border border-white/10">
//                 {labelOf(p.category)}
//               </span>
//             </motion.div>
//           </div>

//           {/* Footer */}
//           <div className="px-5 py-4 flex items-center justify-between border-t border-white/5">
//             <div className="min-w-0">
//               <h3 className="text-xs font-black text-white/90 uppercase tracking-wide truncate">{p.title}</h3>
//               {p.link && (
//                 <a
//                   href={p.link}
//                   target="_blank"
//                   rel="noreferrer"
//                   onClick={(e) => e.stopPropagation()}
//                   className="mt-0.5 block truncate text-[10px] text-amber-500/80 hover:text-amber-400 font-bold transition-colors"
//                 >
//                   {domainOf(p.link)}
//                 </a>
//               )}
//             </div>
//             <span className="text-[10px] font-black text-white/20 font-mono tabular-nums">
//               {String(idx + 1).padStart(2, "0")}
//             </span>
//           </div>
//         </div>
//       </motion.div>
//     </motion.article>
//   );
// }

// /* ================== MAIN ================== */
// export default function Portfolio() {
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [selectedIndex, setSelectedIndex] = useState(null);
//   const sectionRef = useRef(null);

//   const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
//   const headerY = useTransform(scrollYProgress, [0, 0.3], [60, 0]);
//   const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

//   const filteredProjects = useMemo(() => {
//     if (activeCategory === "all") return portfolioData;
//     if (activeCategory === "digital-marketing")
//       return portfolioData.filter((p) => p.category === "digital-marketing" || p.category === "artboards");
//     return portfolioData.filter((p) => p.category === activeCategory);
//   }, [activeCategory]);

//   const selectedProject = selectedIndex == null ? null : filteredProjects[selectedIndex];

//   const openAt = (idx) => { setSelectedIndex(idx); document.body.style.overflow = "hidden"; };
//   const close = () => { setSelectedIndex(null); document.body.style.overflow = "auto"; };
//   const next = () => setSelectedIndex((i) => i == null ? i : (i + 1) % filteredProjects.length);
//   const prev = () => setSelectedIndex((i) => i == null ? i : (i - 1 + filteredProjects.length) % filteredProjects.length);

//   useEffect(() => {
//     if (selectedIndex == null) return;
//     const fn = (e) => {
//       if (e.key === "Escape") close();
//       if (e.key === "ArrowRight") next();
//       if (e.key === "ArrowLeft") prev();
//     };
//     document.addEventListener("keydown", fn);
//     return () => document.removeEventListener("keydown", fn);
//   }, [selectedIndex, filteredProjects.length]);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;700;900&display=swap');

//         .port-section { font-family: 'DM Sans', sans-serif; }
//         .port-heading { font-family: 'Bebas Neue', sans-serif; }

//         .no-scrollbar::-webkit-scrollbar { display: none; }
//         .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

//         .filter-tab {
//           position: relative;
//           overflow: hidden;
//         }
//         .filter-tab::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(135deg, rgba(234,179,8,0.15), rgba(234,179,8,0));
//           opacity: 0;
//           transition: opacity 0.3s;
//         }
//         .filter-tab:hover::before { opacity: 1; }

//         .grid-shimmer {
//           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent);
//           background-size: 200% 100%;
//           animation: shimmer 3s infinite;
//         }
//         @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }

//         .lb-bg { backdrop-filter: blur(20px) saturate(0.5); }

//         @keyframes scanline {
//           0% { transform: translateY(-100%); }
//           100% { transform: translateY(100vh); }
//         }
//       `}</style>

//       <CursorGlow />

//       <section
//         ref={sectionRef}
//         id="portfolio"
//         className="port-section relative min-h-screen overflow-hidden bg-zinc-950 py-20 sm:py-28"
//       >
//         {/* Background atmosphere */}
//         <div className="pointer-events-none absolute inset-0 overflow-hidden">
//           {/* Grid pattern */}
//           <div className="absolute inset-0 opacity-[0.03]"
//             style={{
//               backgroundImage: `
//                 linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
//                 linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
//               `,
//               backgroundSize: "80px 80px"
//             }}
//           />
//           {/* Ambient glows */}
//           <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-amber-500/5 blur-[120px]" />
//           <div className="absolute top-1/2 -right-40 h-[400px] w-[400px] rounded-full bg-amber-600/4 blur-[100px]" />
//           <div className="absolute bottom-0 left-0 h-[300px] w-[600px] rounded-full bg-zinc-800/30 blur-[80px]" />
//           {/* Top edge line */}
//           <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
//         </div>

//         <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-12">

//           {/* ── HEADER ── */}
//           <motion.header
//             style={{ y: headerY, opacity: headerOpacity }}
//             className="mb-16 text-center"
//           >
//             {/* Eyebrow */}
//             <div className="mb-6 flex items-center justify-center gap-4">
//               <div className="h-px w-12 bg-amber-500/40" />
//               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-500">
//                 Portfolio
//               </span>
//               <div className="h-px w-12 bg-amber-500/40" />
//             </div>

//             {/* Big title */}
//             <h2 className="port-heading text-[clamp(64px,12vw,140px)] leading-[0.9] text-white">
//               VISUAL
//               <br />
//               <span className="text-stroke">NARRATIVES</span>
//             </h2>

//             <style>{`
//               .text-stroke {
//                 -webkit-text-stroke: 2px rgba(255,255,255,0.15);
//                 color: transparent;
//               }
//               @media (max-width: 640px) {
//                 .text-stroke { -webkit-text-stroke: 1px rgba(255,255,255,0.15); }
//               }
//             `}</style>

//             <p className="mt-6 text-sm font-light tracking-[0.2em] text-white/30 uppercase">
//               Crafted with precision · Designed for impact
//             </p>
//           </motion.header>

//           {/* ── FILTER TABS ── */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="mb-14 overflow-x-auto no-scrollbar"
//           >
//             <nav className="mx-auto flex w-max gap-2 flex-nowrap px-4">
//               {categories.map((cat, i) => (
//                 <motion.button
//                   key={cat.id}
//                   onClick={() => setActiveCategory(cat.id)}
//                   whileTap={{ scale: 0.96 }}
//                   className={[
//                     "filter-tab relative whitespace-nowrap rounded-xl px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-300 border",
//                     activeCategory === cat.id
//                       ? "bg-amber-500 text-black border-amber-500 shadow-[0_0_20px_rgba(234,179,8,0.3)]"
//                       : "bg-white/[0.03] text-white/40 border-white/10 hover:text-white/70 hover:border-white/20",
//                   ].join(" ")}
//                 >
//                   {cat.name}
//                   {activeCategory === cat.id && (
//                     <motion.span
//                       layoutId="tab-active"
//                       className="absolute inset-0 rounded-xl bg-amber-500 -z-10"
//                       transition={{ type: "spring", stiffness: 400, damping: 35 }}
//                     />
//                   )}
//                 </motion.button>
//               ))}
//             </nav>
//           </motion.div>

//           {/* ── COUNT ── */}
//           <motion.div
//             layout
//             className="mb-8 flex items-center gap-3 px-1"
//           >
//             <motion.span
//               key={filteredProjects.length}
//               initial={{ opacity: 0, y: -8 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-3xl font-black text-amber-500 port-heading"
//             >
//               {String(filteredProjects.length).padStart(2, "0")}
//             </motion.span>
//             <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
//               Projects Selected
//             </span>
//             <div className="ml-2 flex-1 h-px bg-white/5" />
//           </motion.div>

//           {/* ── GRID ── */}
//           <motion.div
//             layout
//             className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
//           >
//             <AnimatePresence mode="popLayout">
//               {filteredProjects.map((p, idx) => (
//                 <PortfolioCard
//                   key={p.id}
//                   p={p}
//                   idx={idx}
//                   onClick={() => openAt(idx)}
//                 />
//               ))}
//             </AnimatePresence>
//           </motion.div>

//         </div>
//       </section>

//       {/* ── LIGHTBOX ── */}
//       <AnimatePresence>
//         {selectedProject && (
//           <motion.div
//             className="fixed inset-0 z-[200] flex items-center justify-center p-4 lb-bg"
//             style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={close}
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.96, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.96, y: 20 }}
//               transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
//               onClick={(e) => e.stopPropagation()}
//               className="relative w-full max-w-6xl overflow-hidden rounded-2xl bg-zinc-900 border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.8)]"
//             >
//               {/* Top bar */}
//               <div className="flex items-center justify-between gap-4 border-b border-white/5 bg-zinc-900/95 px-5 py-4">
//                 <div className="min-w-0 flex-1">
//                   <p className="text-[9px] font-black uppercase tracking-[0.4em] text-amber-500 mb-1">
//                     {labelOf(selectedProject.category)}
//                   </p>
//                   <p className="text-base font-black text-white uppercase tracking-wide truncate">
//                     {selectedProject.title}
//                   </p>
//                   {selectedProject.link && (
//                     <a
//                       href={selectedProject.link}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="mt-1 inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-500/70 hover:text-amber-400 transition-colors"
//                     >
//                       <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//                         <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
//                       </svg>
//                       {selectedProject.link}
//                     </a>
//                   )}
//                 </div>

//                 <div className="flex items-center gap-2 shrink-0">
//                   {/* Counter */}
//                   <span className="hidden sm:block text-xs font-black font-mono text-white/20 mr-2">
//                     {String(selectedIndex + 1).padStart(2, "0")} / {String(filteredProjects.length).padStart(2, "0")}
//                   </span>

//                   {selectedProject.link && (
//                     <a
//                       href={selectedProject.link}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="hidden sm:inline-flex h-9 items-center gap-2 rounded-lg bg-amber-500 px-4 text-[10px] font-black uppercase tracking-widest text-black hover:bg-amber-400 transition-colors"
//                     >
//                       <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
//                         <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
//                       </svg>
//                       Open Site
//                     </a>
//                   )}

//                   {[
//                     { fn: prev, icon: <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/> },
//                     { fn: next, icon: <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/> },
//                     { fn: close, icon: <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/> },
//                   ].map(({ fn, icon }, i) => (
//                     <motion.button
//                       key={i}
//                       onClick={fn}
//                       whileTap={{ scale: 0.92 }}
//                       className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-all"
//                     >
//                       <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">{icon}</svg>
//                     </motion.button>
//                   ))}
//                 </div>
//               </div>

//               {/* Media area */}
//               <div className="relative bg-zinc-950">
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={selectedProject.id}
//                     initial={{ opacity: 0, x: 30 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -30 }}
//                     transition={{ duration: 0.25, ease: "easeOut" }}
//                     className="flex items-center justify-center"
//                   >
//                     {selectedProject.type === "video" ? (
//                       <video
//                         src={selectedProject.asset}
//                         controls
//                         autoPlay
//                         playsInline
//                         className="h-[72vh] w-full object-contain bg-black"
//                       />
//                     ) : (
//                       <img
//                         src={selectedProject.asset}
//                         alt={selectedProject.title}
//                         className="h-[72vh] w-full object-contain p-6"
//                       />
//                     )}
//                   </motion.div>
//                 </AnimatePresence>

//                 {/* Prev / Next overlay arrows */}
//                 <button
//                   onClick={prev}
//                   className="absolute left-4 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-xl bg-black/60 border border-white/10 text-white/70 hover:bg-black/80 hover:text-white transition-all backdrop-blur"
//                 >
//                   <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
//                     <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </button>
//                 <button
//                   onClick={next}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-xl bg-black/60 border border-white/10 text-white/70 hover:bg-black/80 hover:text-white transition-all backdrop-blur"
//                 >
//                   <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
//                     <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

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
];

const domainOf = (url) => {
  try { return new URL(url).hostname.replace(/^www\./, ""); } catch { return url; }
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

/* ================== DATA ================== */
const generatePortfolioData = () => {
  const data = [];
  let id = 1;

  for (let i = 1; i <= 3; i++) {
    const url = getVideoUrl(`video${i}.mp4`);
    if (url) data.push({ id: id++, category: "video", title: `Video ${i}`, asset: url, type: "video" });
  }

  for (let i = 1; i <= 15; i++) {
    const fileName = i <= 9 || i === 11 ? `c${i}.webp` : `c${i}.jpg`;
    const url = getImageUrl(fileName);
    if (url) data.push({ id: id++, category: "creative-posts", title: `Creative ${i}`, asset: url, type: "image" });
  }

  for (let i = 1; i <= 14; i++) {
    const fileName = i <= 6 ? `Artboard ${i}.webp` : `Artboard ${i}.jpg`;
    const url = getImageUrl(fileName);
    if (url) data.push({ id: id++, category: "artboards", title: `Digital ${i}`, asset: url, type: "image" });
  }

  const eventFiles = ["event.webp","event2.webp","event3.webp","event4.jpg","event5.jpg","event6.jpg","event7.jpg"];
  eventFiles.forEach((file, i) => {
    const url = getImageUrl(file);
    if (url) data.push({ id: id++, category: "event-promotion", title: `Event ${i + 1}`, asset: url, type: "image" });
  });

  for (let i = 1; i <= 4; i++) {
    const url = getImageUrl(`inshop${i}.jpg`);
    if (url) data.push({ id: id++, category: "in-shop-branding", title: `In‑Shop ${i}`, asset: url, type: "image" });
  }

  for (let i = 1; i <= 7; i++) {
    const url = getImageUrl(`website${i}.webp`);
    if (url) data.push({ id: id++, category: "websites", title: `Website ${i}`, asset: url, type: "image", link: WEBSITE_LINKS[i - 1] });
  }

  for (let i = 1; i <= 5; i++) {
    const fileName = i === 4 ? `outdoor${i}.webp` : `outdoor${i}.jpg`;
    const url = getImageUrl(fileName);
    if (url) data.push({ id: id++, category: "outdoor-advertising", title: `Outdoor ${i}`, asset: url, type: "image" });
  }

  [
    { name: "print.jpg", title: "Print 1" },
    { name: "print2.jpg", title: "Print 2" },
    { name: "print3.jpg", title: "Print 3" },
  ].forEach((x) => {
    const url = getImageUrl(x.name);
    if (url) data.push({ id: id++, category: "print-media", title: x.title, asset: url, type: "image" });
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
  { id: "websites", name: "Web" },
  { id: "event-promotion", name: "Events" },
  { id: "in-shop-branding", name: "Branding" },
  { id: "outdoor-advertising", name: "Outdoor" },
  { id: "print-media", name: "Print" },
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
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-font text-[clamp(70px,10vw,140px)] leading-[0.9]"
            >
              VISUAL<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
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
                className={`px-6 py-2.5 text-[10px] uppercase font-black tracking-widest rounded-full border transition-all ${
                  activeCategory === cat.id
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
                    <div>
                      <h3 className="text-[11px] font-black uppercase tracking-wider text-white/80">{p.title}</h3>
                      {p.link && (
                        <p className="text-indigo-400/70 text-[9px] mt-1 font-bold uppercase tracking-widest">{domainOf(p.link)}</p>
                      )}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
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
          READY TO START<br/>
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
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Navigation Arrows */}
            <button 
              onClick={prev}
              className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-all z-[110] p-4 rounded-2xl bg-white/5 hover:bg-white/10 hidden md:block"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button 
              onClick={next}
              className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-all z-[110] p-4 rounded-2xl bg-white/5 hover:bg-white/10 hidden md:block"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
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
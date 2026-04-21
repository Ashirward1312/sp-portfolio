// Hero.jsx (React + TailwindCSS + Framer Motion)

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const tryPlay = async () => {
      try {
        await v.play();
      } catch {
        // autoplay blocked -> first frame show
      }
    };

    tryPlay();
    v.addEventListener("canplay", tryPlay);
    return () => v.removeEventListener("canplay", tryPlay);
  }, []);

  const scrollToId = (id) => {
    const el = document.querySelector(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div id="home" className="relative min-h-screen w-full overflow-hidden bg-[#050814]">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hh.mp4" type="video/mp4" />
        </video>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-[#050814]/60 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_20%_20%,rgba(56,189,248,0.22),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_80%_75%,rgba(99,102,241,0.18),transparent_60%)]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl text-center"
        >
          {/* Badge */}
          <p className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-5 py-2.5 text-xs md:text-sm tracking-wider uppercase text-white/80 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_18px_rgba(56,189,248,0.85)]" />
            AI-Powered Marketing Services
          </p>

          {/* Main line */}
          <p className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Grow faster with{" "}
            <a
              href="https://spadvertising.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-300 to-indigo-300 hover:opacity-80"
            >
              SP Advertising
            </a>
          </p>

          {/* Sub line */}
          <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed">
            Welcome to{" "}
            <a
              href="https://spadvertising.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-300 hover:underline"
            >
              SP ADVERTISING
            </a>
            , one of the most creative and well-established advertising agencies
            in Raipur, Chhattisgarh. With{" "}
            <a
              href="https://spadvertising.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-300 hover:underline"
            >
              SP Advertising
            </a>
            , make your brand live better.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToId("#contact")}
              className="px-8 py-4 rounded-2xl bg-white text-[#050814] font-semibold shadow-xl hover:opacity-90 transition"
            >
              Get Started
            </button>

            <button
              onClick={() => scrollToId("#portfolio")}
              className="px-8 py-4 rounded-2xl border border-white/25 bg-white/5 text-white backdrop-blur-xl hover:bg-white hover:text-[#050814] transition"
            >
              Portfolio
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
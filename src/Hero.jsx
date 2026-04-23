import { motion } from "framer-motion";
import { TubesBackground } from "./components/TubesBackground";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToId = (id) => {
    const el = document.querySelector(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div id="home" className="relative w-full overflow-hidden bg-[#050814] font-sans">
      <TubesBackground className="min-h-screen">
        <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-center"
          >
            
            {/* Badge */}
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs tracking-wide text-white/80 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-sky-400"></span>
              AI‑Powered Advertising & Marketing
            </div>

            {/* Main Headline - Smaller & Cleaner */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-snug text-white">
              Grow Faster with{" "}
              <span className="bg-gradient-to-r from-sky-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
                SP Advertising
              </span>
            </h1>

            {/* Sub Headline */}
            <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Welcome to <span className="text-white font-medium">SP Advertising</span>, 
              one of the most creative and well‑established advertising agencies in Raipur, Chhattisgarh. 
              We blend technology and creativity to make your brand live better.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-4 pointer-events-auto">
              
              <button
                onClick={() => scrollToId("#contact")}
                className="group px-6 py-3 rounded-full bg-white text-[#050814] font-medium transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToId("#portfolio")}
                className="group px-6 py-3 rounded-full border border-white/20 bg-white/5 text-white font-medium backdrop-blur-xl hover:bg-white/10 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                View Portfolio
                <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
              </button>

            </div>

          </motion.div>
        </div>
      </TubesBackground>
    </div>
  );
}
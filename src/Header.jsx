import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./assets/logo.png";

export default function PortfolioHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section highlight
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPos = window.scrollY + 100;

      sections.forEach(section => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActive(`#${section.id}`);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
      setActive(href);
      setOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled 
        ? "py-3 bg-white/70 dark:bg-[#05070a]/70 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] border-b border-white/10" 
        : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo - Large and Premium */}
        <motion.a 
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="relative">
            <img 
              src={logo} 
              alt="SP Advertising" 
              className={`transition-all duration-500 scale-125 object-contain ${scrolled ? 'h-12' : 'h-16'}`} 
            />
            <div className="absolute -inset-2 bg-sky-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative text-sm font-black uppercase tracking-[0.15em] transition-colors duration-300 ${
                active === link.href 
                ? "text-sky-500" 
                : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              {link.label}
              {active === link.href && (
                <motion.span 
                  layoutId="navUnderline"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-sky-500 rounded-full"
                />
              )}
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <motion.a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transition-all hover:scale-105 active:scale-95"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            Get Expert Advice
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setOpen(!open)}
          className="lg:hidden relative z-50 p-2 text-slate-800 dark:text-white"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-[#05070a] border-t border-slate-100 dark:border-white/5"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-lg font-bold uppercase tracking-widest ${active === link.href ? 'text-sky-500' : 'text-slate-600 dark:text-slate-400'}`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="mt-4 px-6 py-4 rounded-2xl bg-sky-500 text-white text-center font-black uppercase tracking-widest"
              >
                Start Your Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
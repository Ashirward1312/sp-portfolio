import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "./assets/sp company logo.jpeg";

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
      setScrolled(window.scrollY > 30);

      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (!section) continue;

        const height = section.offsetHeight || 0;
        const offset = section.offsetTop || 0;

        if (window.scrollY >= offset - 90 && window.scrollY < offset + height - 40) {
          setActive(link.href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 72,
        behavior: "smooth",
      });
      setActive(href);
      setOpen(false);
    }
  };

  return (
    <>
      <style>{`
        :root{
          /* Same purple gradient as your button image */
          --p1:#6D63FF;      /* indigo */
          --p2:#A855F7;      /* purple */
          --bg1:#0b1026;
          --bg2:#070a18;
        }

        .blend-nav * { mix-blend-mode: difference !important; }

        /* Purple glow instead of blue */
        .nav-glow {
          background:
            radial-gradient(circle at 18% 45%, rgba(109, 99, 255, 0.14) 0, transparent 60%),
            radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.12) 0, transparent 62%);
          pointer-events: none;
        }

        .nav-cta{
          background: linear-gradient(90deg, var(--p1) 0%, var(--p2) 100%);
          box-shadow:
            0 16px 34px rgba(109, 99, 255, 0.22),
            0 0 0 1px rgba(168, 85, 247, 0.18) inset;
        }
        .nav-cta:hover{
          filter: brightness(1.06);
          box-shadow:
            0 20px 44px rgba(168, 85, 247, 0.22),
            0 0 0 1px rgba(109, 99, 255, 0.26) inset;
        }

        .nav-underline{
          background: linear-gradient(90deg, rgba(109,99,255,1), rgba(168,85,247,1));
        }

        .nav-active{
          color: #A78BFA !important; /* violet-400-ish */
          text-shadow: 0 0 16px rgba(168, 85, 247, 0.18);
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500
          ${
            scrolled
              ? "backdrop-blur-xl bg-black/50 border-b border-white/5 shadow-[0_4px_32px_0_rgba(0,0,0,0.12)]"
              : "bg-transparent border-none"
          }`}
        style={{ WebkitBackdropFilter: "blur(18px)" }}
      >
        <div className="nav-glow absolute inset-0 z-0" />

        <div className={`relative max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between transition-all duration-500 ${scrolled ? "h-[70px] lg:h-[90px]" : "h-[100px] lg:h-[120px]"} select-none`}>
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <img
              src={logo}
              alt="SP Advertising"
              className={`transition-all duration-500 ${scrolled ? "h-10 lg:h-14" : "h-20 lg:h-28"} w-auto block object-contain`}
              style={{
                filter:
                  "drop-shadow(0 3px 18px rgba(109,99,255,0.22)) drop-shadow(0 3px 18px rgba(168,85,247,0.10))",
              }}
            />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="blend-nav hidden lg:flex items-center gap-10">
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative text-[15px] font-bold uppercase tracking-[0.12em]
                  px-1 transition text-white/80 hover:text-white`}
                style={{
                  letterSpacing: "0.12em",
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.07 }}
              >
                <span className={active === link.href ? "nav-active" : ""}>
                  {link.label}
                </span>

                {/* Underline highlight */}
                {active === link.href && (
                  <motion.span
                    layoutId="navUnderline"
                    className="nav-underline absolute left-0 right-0 -bottom-1 h-0.5 rounded-full"
                  />
                )}
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="nav-cta px-8 py-3 rounded-full text-white text-xs font-black uppercase tracking-widest shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              Get Expert Advice
            </motion.a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden z-50 p-3 text-white focus:outline-none"
            aria-label="Open menu"
          >
            <div className="w-7 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  open ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  open ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden blend-nav bg-black/95 pt-32 pb-12 px-8 fixed inset-0 flex flex-col z-50"
            >
              <div className="pointer-events-none absolute inset-0 nav-glow" />

              <nav className="relative flex flex-col gap-7">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-xl font-black uppercase tracking-widest py-1 transition-colors
                      ${
                        active === link.href
                          ? "text-violet-300"
                          : "text-white/70 hover:text-white"
                      }`}
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="nav-cta mt-4 px-6 py-4 rounded-2xl text-white font-black uppercase tracking-widest text-center shadow"
                >
                  Start Your Project
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
import logo from "./assets/logo.png";

export default function Footer() {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact Us", href: "#contact" },
  ];

  const socials = [
    { label: "Instagram", href: "https://www.instagram.com/spadvertisingrpr/", Icon: InstagramIcon },
    { label: "Facebook", href: "https://www.facebook.com/spadvertisingraipur", Icon: FacebookIcon },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/sp-advertising20/", Icon: LinkedInIcon },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-sky-100 bg-gradient-to-br from-sky-50 via-white to-blue-50 py-16">
      {/* Decorative backdrop */}
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-sky-200/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-24 h-96 w-96 rounded-full bg-blue-200/25 blur-3xl" />
      <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 -translate-x-[-10%] skew-x-[-12deg] bg-sky-100/40" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#home" onClick={(e) => handleScroll(e, "#home")} className="inline-block">
              <img src={logo} alt="SP Advertising" className="h-14 w-auto object-contain" />
            </a>

            <p className="max-w-sm text-base font-medium leading-relaxed text-slate-600">
              Elevating brands in Raipur and beyond. SP Advertising delivers 360° creative
              solutions tailored for your business growth.
            </p>

            <div className="flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-100 bg-white/80 text-slate-500 shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-50 hover:text-sky-700"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Section */}
          <div className="lg:col-span-3">
            <h4 className="mb-6 text-xs font-black uppercase tracking-[0.22em] text-sky-700">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-sm font-extrabold uppercase tracking-widest text-slate-600 transition-colors hover:text-sky-700"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-4">
            <h4 className="mb-6 text-xs font-black uppercase tracking-[0.22em] text-sky-700">
              Quick Connect
            </h4>
            <div className="space-y-5">
              <div>
                <p className="mb-1 text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Call Us
                </p>
                <a
                  href="tel:+918085354646"
                  className="text-lg font-black text-slate-900 transition-colors hover:text-sky-700"
                >
                  +91-8085354646
                </a>
              </div>

              <div>
                <p className="mb-1 text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Mail Us
                </p>
                <a
                  href="mailto:spadvertising@live.com"
                  className="break-all text-lg font-black text-slate-900 transition-colors hover:text-sky-700"
                >
                  spadvertising@live.com
                </a>
              </div>

              <div>
                <p className="mb-1 text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Visit Us
                </p>
                <p className="max-w-[260px] text-sm font-bold text-slate-600">
                  Raipur, Chhattisgarh, 492001, India.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-center gap-4 border-t border-sky-100 pt-8 text-center">
          <p className="text-[10px] font-black uppercase tracking-normal text-slate-500">
            © {new Date().getFullYear()}{" "}
            <a
              href="https://spadvertising.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:underline"
            >
              SP ADVERTISING
            </a>. ALL RIGHTS RESERVED.
          </p>
        </div>

      </div>
    </footer>
  );
}

/* ================= Icons ================= */

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
    </svg>
  );
}

function LinkedInIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}
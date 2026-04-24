import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactUs() {
  const phone = "+91-8085354646";
  const phoneDial = "+918085354646";
  const email = "info@spadvertising.in";
  const waLink = "https://wa.me/918085354646";

  const services = [
    "Outdoor Advertising",
    "Digital Marketing",
    "Branding & Strategy",
    "Designing Services",
    "Audio Visuals",
    "Event Promotion",
    "Print Media",
    "Other",
  ];

  const [copied, setCopied] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: services[0],
    message: "",
  });

  const copyText = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(""), 1200);
    } catch {}
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const whatsappMessage = `Hello SP Advertising,
I'm *${form.name}*.
📞 Phone: ${form.phone}
📧 Email: ${form.email}
🛠️ Service: ${form.service}
📝 Message: ${form.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/918085354646?text=${encodedMessage}`;

    // Small delay to show loading state
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setLoading(false);
      setForm({
        name: "",
        phone: "",
        email: "",
        service: services[0],
        message: "",
      });
    }, 800);
  };

  return (
    <>
      <style>{`
        :root{
          /* Image-like purple gradient theme */
          --p1:#6D63FF;      /* indigo */
          --p2:#A855F7;      /* purple */
          --bg1:#0b1026;     /* deep navy */
          --bg2:#070a18;     /* deeper */
          --border: rgba(167, 139, 250, 0.18);
        }

        .contact-bg{
          background:
            radial-gradient(1100px circle at 80% 80%, #121a3a 10%, var(--bg2) 70%),
            radial-gradient(900px circle at 20% 30%, #11163a 0%, transparent 65%),
            linear-gradient(180deg, var(--bg1), var(--bg2));
        }

        .contact-glow1{
          background: radial-gradient(circle at 70% 15%, rgba(168, 85, 247, 0.22) 0%, transparent 55%);
        }
        .contact-glow2{
          background: radial-gradient(700px circle at 15% 90%, rgba(109, 99, 255, 0.20) 0%, transparent 60%);
        }

        .contact-cardbg{
          background: linear-gradient(135deg, rgba(11,18,43,0.96) 35%, rgba(20,18,55,0.92) 100%);
        }

        .contact-btn{
          background: linear-gradient(90deg, var(--p1) 0%, var(--p2) 100%);
          box-shadow:
            0 14px 30px rgba(109, 99, 255, 0.22),
            0 0 0 1px rgba(168, 85, 247, 0.22) inset;
        }
        .contact-btn:hover{
          filter: brightness(1.06);
          box-shadow:
            0 18px 40px rgba(168, 85, 247, 0.22),
            0 0 0 1px rgba(109, 99, 255, 0.28) inset;
        }

        .contact-field:focus{
          border-color: rgba(168, 85, 247, 0.55);
          box-shadow: 0 0 0 2px rgba(109, 99, 255, 0.28);
        }

        .contact-label{
          color: rgba(226, 232, 240, 0.82);
          font-weight:700;
          font-size:0.95rem;
        }

        .contact-sep{
          background: linear-gradient(90deg, transparent, rgba(109, 99, 255, 0.75) 35%, rgba(168, 85, 247, 0.75) 65%, transparent);
        }
      `}</style>

      <section
        id="contact"
        className="relative contact-bg py-16 sm:py-20 overflow-x-hidden"
      >
        {/* Decorative glows */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="contact-glow1 absolute inset-0" />
          <div className="contact-glow2 absolute inset-0" />
        </div>

        <div className="mx-auto max-w-6xl px-3">
          {/* Heading */}
          <header className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/15 bg-slate-900/50 px-4 py-1.5 text-xs font-bold text-violet-200 uppercase tracking-wider shadow-sm">
              Contact Us <span className="h-2 w-2 rounded-full bg-violet-300" />
            </span>
            <h2 className="mt-4 text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              Let&apos;s work together
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-slate-200/85">
              Reach out for inquiries, collaborations, or just to say hello.
            </p>
          </header>

          <div className="mt-10 grid gap-8 lg:grid-cols-12">
            {/* ------ LEFT: Map + Contact card ------ */}
            <div className="lg:col-span-5 flex flex-col gap-7">
              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl border border-violet-900/40 bg-slate-900/70"
              >
                <div className="flex items-center justify-between border-b border-violet-900/40 bg-slate-900/60 px-5 py-3">
                  <p className="text-[14px] font-bold text-violet-100">
                    Location
                  </p>
                  <p className="text-xs font-semibold text-violet-200/80">
                    SP Advertising • Raipur
                  </p>
                </div>

                <iframe
                  title="SP Advertising Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1607.47130595646!2d81.66126780626557!3d21.25214864509305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd26e9f086b9%3A0x5a5d34e4cbc758d1!2sSP%20Advertising%20%7C%20Outdoor%20Advertising%20%7C%20Branding%20and%20Strategy%20%7C%20PR%20%7C%20Digital%20Marketing%20Agency%20in%20Raipur%20(C.G)!5e1!3m2!1sen!2sin!4v1776673601630!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition duration-700"
                />
              </motion.div>

              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="rounded-2xl shadow-lg bg-gradient-to-br from-violet-900/55 to-slate-950/90 p-[1.5px]">
                  <div className="contact-cardbg rounded-2xl p-6 text-slate-200 relative overflow-hidden">
                    <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 bg-violet-400/10 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-16 -right-24 w-80 h-80 bg-indigo-400/10 blur-3xl" />

                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-violet-200/80 mb-0.5">
                        Get In Touch
                      </p>
                      <h3 className="text-xl font-extrabold text-white tracking-tight mb-0.5">
                        SP Advertising
                      </h3>
                      <p className="text-xs font-semibold text-slate-200/70 mb-4">
                        Call, WhatsApp or email — we respond quickly.
                      </p>

                      <ContactRow
                        icon={<PhoneIcon />}
                        label="Phone"
                        value={phone}
                        href={`tel:${phoneDial}`}
                        onCopy={() => copyText(phone, "phone")}
                        copied={copied === "phone"}
                      />
                      <ContactRow
                        icon={<MailIcon />}
                        label="Email"
                        value={email}
                        href={`mailto:${email}`}
                        onCopy={() => copyText(email, "email")}
                        copied={copied === "email"}
                      />

                      <div className="my-5 flex flex-wrap gap-2">
                        <a
                          href={waLink}
                          target="_blank"
                          rel="noreferrer"
                          className="contact-btn inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider shadow text-white hover:scale-105 transition"
                        >
                          <WhatsappIcon />
                          WhatsApp
                        </a>

                        <a
                          href={`tel:${phoneDial}`}
                          className="inline-flex items-center gap-2 rounded-full border border-violet-900/40 bg-violet-900/30 px-4 py-2 text-xs font-bold uppercase tracking-wider shadow text-violet-200 hover:bg-violet-800/40 hover:scale-105 transition"
                        >
                          <PhoneSmallIcon />
                          Call
                        </a>

                        <a
                          href={`mailto:${email}`}
                          className="inline-flex items-center gap-2 rounded-full border border-violet-900/40 bg-violet-900/30 px-4 py-2 text-xs font-bold uppercase tracking-wider shadow text-violet-200 hover:bg-violet-800/40 hover:scale-105 transition"
                        >
                          <MailSmallIcon />
                          Email
                        </a>
                      </div>

                      <div className="mt-4 border border-violet-900/30 rounded-xl bg-slate-800/35 px-4 py-3">
                        <p className="text-xs text-slate-200/65">
                          Office: Raipur, Chhattisgarh (India)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ------ RIGHT: FORM ------ */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="rounded-2xl bg-gradient-to-br from-violet-800/50 via-slate-950/80 to-slate-900/60 p-[1.5px] shadow-xl shadow-violet-900/15">
                <div className="rounded-2xl border border-violet-900/50 bg-slate-900/90 p-5 sm:p-8">
                  <div className="flex items-center justify-between gap-4 mb-1">
                    <div>
                      <h3 className="text-lg font-extrabold text-white">
                        Send a message
                      </h3>
                      <p className="mt-1 text-xs text-slate-200/70">
                        Choose a service & share your requirement.
                      </p>
                    </div>
                    <div className="hidden sm:grid h-9 w-9 place-items-center rounded-2xl bg-violet-900/25 text-violet-300 border border-violet-800/50">
                      <SparkIcon />
                    </div>
                  </div>

                  <div className="contact-sep my-4 h-px w-full opacity-40" />

                  <form onSubmit={onSubmit} className="grid gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <DarkField
                        label="Full Name"
                        value={form.name}
                        onChange={(v) => setForm((p) => ({ ...p, name: v }))}
                        placeholder="Your name"
                        required
                      />
                      <DarkField
                        label="Phone"
                        value={form.phone}
                        onChange={(v) => setForm((p) => ({ ...p, phone: v }))}
                        placeholder="+91..."
                        required
                      />
                    </div>

                    <DarkField
                      label="Email"
                      value={form.email}
                      onChange={(v) => setForm((p) => ({ ...p, email: v }))}
                      placeholder="you@example.com"
                      required
                    />

                    {/* Service dropdown */}
                    <div>
                      <label className="contact-label">Service</label>
                      <select
                        value={form.service}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, service: e.target.value }))
                        }
                        className="mt-2 w-full rounded-xl border border-violet-900/40 bg-slate-800/60 px-4 py-3 text-sm font-semibold text-slate-100 outline-none contact-field transition"
                      >
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="contact-label">Message</label>
                      <textarea
                        value={form.message}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, message: e.target.value }))
                        }
                        className="mt-2 h-28 w-full rounded-xl border border-violet-900/40 bg-slate-800/60 px-4 py-3 text-sm font-semibold text-slate-100 outline-none contact-field transition"
                        placeholder="Write your message..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="mt-1 contact-btn inline-flex items-center justify-center rounded-full px-10 py-3.5 text-[15px] font-bold uppercase tracking-widest shadow transition-all hover:-translate-y-0.5 disabled:opacity-70 text-white"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>

                    <p className="text-xs text-slate-200/50 mt-2">
                      By sending, you agree to be contacted by SP Advertising.
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

/* --- Small Components --- */
function DarkField({ label, value, onChange, placeholder, required }) {
  return (
    <div>
      <label className="contact-label">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="mt-2 w-full rounded-xl border border-violet-900/40 bg-slate-800/60 px-4 py-3 text-sm font-semibold text-slate-100 outline-none contact-field"
        placeholder={placeholder}
      />
    </div>
  );
}

function ContactRow({ icon, label, value, href, onCopy, copied }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-violet-900/35 bg-slate-800/35 p-3 transition hover:bg-slate-900/55 shadow">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-700 text-white shadow">
        {icon}
      </span>

      <div className="min-w-0">
        <p className="text-[11px] font-bold uppercase tracking-widest text-violet-200/75">
          {label}
        </p>
        <a
          href={href}
          className="block truncate text-base font-bold text-white hover:text-violet-200 transition"
        >
          {value}
        </a>
      </div>

      <button
        type="button"
        onClick={onCopy}
        className="ml-auto inline-flex items-center gap-2 rounded-full border border-violet-800/50 bg-violet-900/35 px-3 py-1.5 text-xs font-bold text-violet-100 hover:bg-violet-800/45"
      >
        {copied ? "Copied" : "Copy"} <CopyIcon />
      </button>
    </div>
  );
}

/* --- Icons --- */
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.21l-2.26 1.13a11.04 11.04 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path
        d="M4 7a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M6 8l6 5 6-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
      <path d="M9 9h10v10H9V9z" stroke="currentColor" strokeWidth="2" />
      <path
        d="M5 15H4a1 1 0 01-1-1V4a1 1 0 011-1h10a1 1 0 011 1v1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M12 21a9 9 0 01-4.1-.98L3 21l1.02-4.9A9 9 0 1112 21z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 8.7c.3-.7.6-.7.9-.7h.8c.2 0 .4.1.5.4l.7 1.7c.1.2.1.5 0 .7l-.4.5c-.1.2-.1.4 0 .5.6 1 1.5 1.9 2.6 2.4.2.1.4.1.5 0l.6-.4c.2-.1.5-.1.7 0l1.6.7c.3.1.4.3.4.6v.7c0 .3 0 .6-.7.9-.8.4-2.7.7-5.1-.8-2.4-1.4-4-3.8-4.4-4.8-.4-1 .1-2.3.5-3z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}
function PhoneSmallIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.21l-2.26 1.13a11.04 11.04 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function MailSmallIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M4 7a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M6 8l6 5 6-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M12 2l1.2 4.2L17.4 7 13.2 8.2 12 12l-1.2-3.8L6.6 7l4.2-.8L12 2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M19 12l.7 2.4L22 15l-2.3.4L19 18l-.7-2.6L16 15l2.3-.6L19 12z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
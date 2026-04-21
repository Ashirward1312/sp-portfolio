// ContactUs.jsx (React + TailwindCSS + Framer Motion)
// ✅ Map LEFT side (and smaller height)
// ✅ Right side: Form (service dropdown included)
// ✅ Dark premium contact card stays on LEFT (below map)
// ✅ Copy phone/email + WhatsApp/Call/Email buttons

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactUs() {
  const phone = "+91-8085354646";
  const phoneDial = "+918085354646";
  const email = "spadvertising@live.com";
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
    } catch {
      // no-op
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setForm({
        name: "",
        phone: "",
        email: "",
        service: services[0],
        message: "",
      });
    }, 1200);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-white to-blue-50" />
      <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-80 w-80 rounded-full bg-sky-200/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-24 -z-10 h-96 w-96 rounded-full bg-blue-200/25 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-4 py-2 text-sm font-extrabold text-sky-700 shadow-sm">
            Contact Us <span className="h-2 w-2 rounded-full bg-sky-500" />
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Let&apos;s work together
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-relaxed text-slate-600 sm:text-base">
            Feel free to reach out for inquiries, collaborations, or just to say hello.
          </p>
        </div>

        {/* Layout */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* LEFT: Map (small) + Contact card */}
          <div className="lg:col-span-5 space-y-6">
            {/* ✅ Map on LEFT (small height) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl border border-sky-100 bg-white/75 shadow-[0_14px_40px_rgba(2,132,199,0.10)]"
            >
              <div className="flex items-center justify-between border-b border-sky-100 bg-white/70 px-5 py-4">
                <p className="text-sm font-extrabold text-slate-900">Location</p>
                <p className="text-xs font-semibold text-slate-500">SP Advertising • Raipur</p>
              </div>

              <iframe
                title="SP Advertising Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1607.47130595646!2d81.66126780626557!3d21.25214864509305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd26e9f086b9%3A0x5a5d34e4cbc758d1!2sSP%20Advertising%20%7C%20Outdoor%20Advertising%20%7C%20Branding%20and%20Strategy%20%7C%20PR%20%7C%20Digital%20Marketing%20Agency%20in%20Raipur%20(C.G)!5e1!3m2!1sen!2sin!4v1776673601630!5m2!1sen!2sin"
                width="100%"
                height="260"              // ✅ smaller map
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition duration-700"
              />
            </motion.div>

            {/* Contact card (dark premium) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-3xl bg-gradient-to-br from-sky-300/70 via-blue-300/40 to-cyan-300/40 p-[1px] shadow-[0_22px_60px_rgba(2,132,199,0.18)]">
                <div className="relative overflow-hidden rounded-3xl bg-slate-950/95 p-6 text-white sm:p-8">
                  <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-sky-500/15 blur-3xl" />
                  <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

                  <div className="relative">
                    <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/70">
                      Get In Touch
                    </p>
                    <h3 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                      SP Advertising
                    </h3>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-white/70">
                      Call, WhatsApp or email — we’ll respond quickly.
                    </p>

                    <div className="mt-7 space-y-3">
                      <InfoRow
                        icon={<PhoneIcon />}
                        label="Phone"
                        value={phone}
                        href={`tel:${phoneDial}`}
                        onCopy={() => copyText(phone, "phone")}
                        copied={copied === "phone"}
                      />
                      <InfoRow
                        icon={<MailIcon />}
                        label="Email"
                        value={email}
                        href={`mailto:${email}`}
                        onCopy={() => copyText(email, "email")}
                        copied={copied === "email"}
                      />
                    </div>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 px-5 py-3 text-sm font-extrabold text-white shadow-md shadow-sky-500/25 transition hover:-translate-y-0.5 hover:shadow-lg"
                      >
                        <WhatsappIcon />
                        WhatsApp
                      </a>

                      <a
                        href={`tel:${phoneDial}`}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-white/10"
                      >
                        <PhoneSmallIcon />
                        Call
                      </a>

                      <a
                        href={`mailto:${email}`}
                        className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-white/10"
                      >
                        <MailSmallIcon />
                        Email
                      </a>
                    </div>

                    <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs font-semibold text-white/70">
                        Office: Raipur, Chhattisgarh (India)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Form only */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl bg-gradient-to-br from-sky-200/60 via-white to-blue-200/30 p-[1px] shadow-[0_18px_50px_rgba(2,132,199,0.12)]">
              <div className="rounded-3xl border border-sky-100 bg-white/75 p-6 backdrop-blur sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-black text-slate-900 sm:text-2xl">
                      Send a message
                    </h3>
                    <p className="mt-2 text-sm font-medium text-slate-600">
                      Choose a service and share your requirement.
                    </p>
                  </div>
                  <div className="hidden sm:grid h-12 w-12 place-items-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-sky-100">
                    <SparkIcon />
                  </div>
                </div>

                <form onSubmit={onSubmit} className="mt-6 grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label="Full Name"
                      value={form.name}
                      onChange={(v) => setForm((p) => ({ ...p, name: v }))}
                      placeholder="Your name"
                      required
                    />
                    <Field
                      label="Phone"
                      value={form.phone}
                      onChange={(v) => setForm((p) => ({ ...p, phone: v }))}
                      placeholder="+91..."
                      required
                    />
                  </div>

                  <Field
                    label="Email"
                    value={form.email}
                    onChange={(v) => setForm((p) => ({ ...p, email: v }))}
                    placeholder="you@example.com"
                    required
                  />

                  {/* ✅ Service dropdown */}
                  <div>
                    <label className="text-sm font-extrabold text-slate-900">Service</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm((p) => ({ ...p, service: e.target.value }))}
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-200"
                    >
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-extrabold text-slate-900">Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                      className="mt-2 h-32 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-200"
                      placeholder="Write your message..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-1 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 px-5 py-3 text-sm font-extrabold text-white shadow-md shadow-sky-500/20 transition hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>

                  <p className="text-xs font-semibold text-slate-500">
                    By sending, you agree to be contacted by SP Advertising.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ================== Small Components ================== */
function Field({ label, value, onChange, placeholder, required }) {
  return (
    <div>
      <label className="text-sm font-extrabold text-slate-900">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-200"
        placeholder={placeholder}
      />
    </div>
  );
}

function InfoRow({ icon, label, value, href, onCopy, copied }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/25">
        {icon}
      </span>

      <div className="min-w-0">
        <p className="text-xs font-extrabold uppercase tracking-widest text-white/60">
          {label}
        </p>
        <a href={href} className="mt-1 block truncate text-base font-extrabold text-white hover:text-white/90">
          {value}
        </a>
      </div>

      <button
        type="button"
        onClick={onCopy}
        className="ml-auto inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-extrabold text-white/85 transition hover:bg-white/10"
      >
        {copied ? "Copied" : "Copy"} <CopyIcon />
      </button>
    </div>
  );
}

/* ================== Icons ================== */
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
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
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
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
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
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
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
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
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
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
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
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
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
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
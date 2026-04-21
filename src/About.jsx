// AboutUs.jsx (React + TailwindCSS)
// Simple + attractive (light blue theme) — no heavy animations, clean premium look
// NOTE: image import path apne folder ke hisaab se set kar lena

import defaultImg from "../src/assets/a1.jpg"; // ✅ change path if needed

export default function AboutUs({ imageSrc = "" }) {
  const img = imageSrc || defaultImg;

  return (
    <section id="about" className="relative overflow-hidden py-14 sm:py-20">
      {/* Soft background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-white to-blue-50" />
      <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-24 -z-10 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* LEFT */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-4 py-2 text-sm font-extrabold text-sky-700 shadow-sm">
              About Us
              <span className="h-2 w-2 rounded-full bg-sky-500" />
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              The great team of industry experts behind{" "}
              <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                Growth
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Behind every success is a team of seasoned professionals. Meet our
              industry experts, who bring unparalleled expertise, innovation,
              and dedication to driving sustainable growth and transformation.
            </p>

            {/* Quote / About text */}
            <div className="mt-6 rounded-2xl border border-sky-100 bg-white/75 p-5 shadow-[0_12px_30px_rgba(2,132,199,0.10)]">
              <p className="text-xs font-extrabold uppercase tracking-widest text-sky-700">
                ABOUT US
              </p>
              <p className="mt-2 text-base font-semibold leading-relaxed text-slate-800 sm:text-lg">
                “SP Advertising is not just a marketing agency, we’re your
                partners in growth. We believe in transforming your vision into
                reality.”
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-6 py-3 text-sm font-extrabold text-white shadow-md shadow-sky-500/25 transition hover:bg-sky-600"
                >
                  Learn more
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-800 shadow-sm transition hover:bg-slate-50"
                >
                  Contact us
                </a>
              </div>
            </div>

            {/* Stats */}
            {/* <div className="mt-7 grid max-w-xl grid-cols-3 gap-3">
              {[
                { k: "120+", v: "Campaigns" },
                { k: "60+", v: "Clients" },
                { k: "8+", v: "Years" },
              ].map((s) => (
                <div
                  key={s.v}
                  className="rounded-2xl border border-sky-100 bg-white/70 p-4 text-center shadow-sm"
                >
                  <div className="text-2xl font-black text-slate-900 sm:text-3xl">
                    {s.k}
                  </div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">
                    {s.v}
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          {/* RIGHT (Image) */}
          <div className="relative">
            <div className="rounded-[28px] bg-gradient-to-br from-sky-300 via-blue-300 to-cyan-300 p-[2px] shadow-[0_18px_45px_rgba(2,132,199,0.18)]">
              <div className="rounded-[26px] bg-white p-2">
                <div className="group overflow-hidden rounded-[22px] border border-sky-100 bg-sky-50">
                  {img ? (
                    <img
                      src={img}
                      alt="About SP Advertising"
                      className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-[380px] lg:h-[480px]"
                      loading="lazy"
                    />
                  ) : (
                    // If you ever want pure placeholder
                    <div className="grid h-[280px] w-full place-items-center sm:h-[380px] lg:h-[480px]">
                      <div className="text-center">
                        <div className="mx-auto h-14 w-14 rounded-2xl bg-sky-100" />
                        <p className="mt-3 text-sm font-extrabold text-slate-700">
                          Image Placeholder
                        </p>
                        <p className="mt-1 text-xs font-semibold text-slate-500">
                          Yahan team/office image lagao
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Small decorative cards */}
            {/* <div className="absolute -right-3 -top-3 hidden rounded-2xl border border-sky-100 bg-white/80 px-4 py-2 text-xs font-extrabold text-sky-700 shadow-sm sm:block">
              Trusted Team
            </div> */}
            <div className="absolute -left-3 -bottom-3 hidden h-20 w-20 rounded-3xl bg-sky-200/40 blur-xl sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
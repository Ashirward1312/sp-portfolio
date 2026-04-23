// AboutUs.jsx
import defaultImg from "../src/assets/a1.jpg";

export default function AboutUs({ imageSrc = "" }) {
  const img = imageSrc || defaultImg;

  return (
    <section id="about" className="relative overflow-hidden py-14 sm:py-20">
      
      {/* Soft Royal Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
      <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-24 -z-10 h-80 w-80 rounded-full bg-purple-300/30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          
          {/* LEFT CONTENT */}
          <div>
            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              The great team of industry experts behind{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Growth
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Behind every success is a team of seasoned professionals. Meet our
              industry experts, who bring unparalleled expertise, innovation,
              and dedication to driving sustainable growth and transformation.
            </p>

            {/* Quote Box */}
            <div className="mt-6 rounded-2xl border border-indigo-100 bg-white/80 p-5 shadow-[0_12px_30px_rgba(99,102,241,0.10)] backdrop-blur">
              <p className="mt-2 text-base font-semibold leading-relaxed text-slate-800 sm:text-lg">
                “SP Advertising is not just a marketing agency, we’re your
                partners in growth. We believe in transforming your vision into
                reality.”
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-extrabold text-white shadow-md shadow-indigo-500/25 transition hover:from-indigo-700 hover:to-purple-700"
                >
                  Learn more
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl border border-indigo-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-800 shadow-sm transition hover:bg-indigo-50"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="rounded-[28px] bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-600 p-[2px] shadow-[0_18px_45px_rgba(99,102,241,0.25)]">
              <div className="rounded-[26px] bg-white p-2">
                <div className="group overflow-hidden rounded-[22px] border border-indigo-100 bg-indigo-50">
                  {img ? (
                    <img
                      src={img}
                      alt="About SP Advertising"
                      className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-[380px] lg:h-[480px]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="grid h-[280px] w-full place-items-center sm:h-[380px] lg:h-[480px]">
                      <div className="text-center">
                        <div className="mx-auto h-14 w-14 rounded-2xl bg-indigo-100" />
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

            <div className="absolute -left-3 -bottom-3 hidden h-20 w-20 rounded-3xl bg-purple-300/40 blur-xl sm:block" />
          </div>

        </div>
      </div>
    </section>
  );
}
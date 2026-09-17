import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen bg-espresso grain overflow-hidden flex items-center"
    >
      {/* Background architectural image */}
      <div className="absolute inset-0 opacity-[0.12]">
        <img
          src="https://images.pexels.com/photos/31735039/pexels-photo-31735039.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Vertical text accents */}
      <div className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 z-10">
        <p className="text-vertical text-[10px] tracking-editorial text-taupe/50">
          INDEPENDENT BUILDER
        </p>
      </div>
      <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 z-10">
        <p className="text-vertical text-[10px] tracking-editorial text-taupe/50">
          WEBSITES / DIGITAL EXPERIENCES / EXPERIMENTS
        </p>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 w-full pt-20">
        <div className="max-w-5xl">
          {/* Top editorial label */}
          <div className="flex items-center gap-4 mb-12 md:mb-16">
            <div className="w-12 h-px bg-taupe/40" />
            <span className="text-[10px] tracking-editorial text-taupe/60">
              PORTFOLIO / 2026
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-serif text-[clamp(3.5rem,12vw,11rem)] leading-[0.92] text-cream tracking-tight">
            I BUILD THINGS
            <br />
            <span className="italic text-cream/90">ON THE INTERNET.</span>
          </h1>

          {/* Subtitle */}
          <div className="mt-10 md:mt-14 max-w-2xl">
            <p className="text-base md:text-lg text-taupe font-light leading-relaxed">
              Akarsh Dubey — student, independent website builder &amp; digital experimenter.
            </p>
            <p className="text-xs tracking-editorial text-taupe/50 mt-4">
              MUMBAI, INDIA · 2026
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-cream text-espresso text-[11px] tracking-editorial hover:bg-cream/90 transition-all duration-400"
            >
              EXPLORE MY WORK
              <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform duration-400" />
            </a>
            <a
              href="#about"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-cream/25 text-cream text-[11px] tracking-editorial hover:border-cream/50 hover:bg-cream/5 transition-all duration-400"
            >
              ABOUT ME
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-400" />
            </a>
          </div>

          {/* Handwritten annotation */}
          <p className="mt-16 font-hand text-xl text-warm-brown/70 italic">
            "still figuring it out."
          </p>
        </div>
      </div>

      {/* Bottom metadata bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-cream/10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <span className="text-[10px] tracking-editorial text-taupe/40">
            SCROLL TO EXPLORE
          </span>
          <span className="text-[10px] tracking-editorial text-taupe/40">
            8 PROJECTS / 3 EXPERIMENTS
          </span>
        </div>
      </div>
    </section>
  );
}

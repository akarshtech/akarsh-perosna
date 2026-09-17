import { ArrowUpRight, ArrowUp } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-espresso grain py-24 md:py-40 relative overflow-hidden">
      {/* Subtle background image */}
      <div className="absolute inset-0 opacity-[0.06]">
        <img
          src="https://images.pexels.com/photos/16382682/pexels-photo-16382682.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="reveal text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-taupe/40" />
            <span className="text-[10px] tracking-editorial text-taupe/60">
              LET'S TALK
            </span>
            <div className="w-12 h-px bg-taupe/40" />
          </div>

          <h2 className="font-serif text-[clamp(2.5rem,9vw,9rem)] leading-[0.95] text-cream tracking-tight">
            HAVE A BUSINESS
            <br />
            THAT DESERVES
            <br />
            <span className="italic text-cream/80">A BETTER WEBSITE?</span>
          </h2>

          <p className="mt-10 text-base md:text-xl text-taupe font-light leading-relaxed max-w-xl mx-auto">
            Let's make it feel like it belongs to you.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@akarshdubey.com"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-cream text-espresso text-[11px] tracking-editorial hover:bg-cream/90 transition-all duration-400"
            >
              START A PROJECT
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-400" />
            </a>
            <a
              href="#work"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-cream/25 text-cream text-[11px] tracking-editorial hover:border-cream/50 hover:bg-cream/5 transition-all duration-400"
            >
              VIEW THE WORK
              <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform duration-400" />
            </a>
          </div>

          <p className="mt-12 text-[11px] tracking-editorial text-taupe/40 max-w-lg mx-auto">
            No giant agency. No unnecessary bullshit. Just a website built around your business.
          </p>

          <p className="mt-6 text-[10px] tracking-editorial text-taupe/30">
            EMAIL: hello@akarshdubey.com <span className="text-warm-brown/40">(placeholder — replace with real email)</span>
          </p>
        </div>
      </div>
    </section>
  );
}

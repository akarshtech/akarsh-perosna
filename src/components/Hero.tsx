import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[clamp(680px,100svh,920px)] overflow-hidden bg-espresso grain flex items-center">
      <div className="absolute right-[-10%] top-[18%] h-[48vw] w-[48vw] max-h-[720px] max-w-[720px] rounded-full border border-cream/10 opacity-60" />
      <div className="absolute right-[8%] top-[30%] h-[28vw] w-[28vw] max-h-[420px] max-w-[420px] rounded-full border border-warm-brown/30 opacity-70 float-slow" />
      <div className="absolute inset-y-0 right-0 hidden w-[38%] lg:block opacity-25">
        <img src="https://images.pexels.com/photos/31735039/pexels-photo-31735039.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" className="h-full w-full object-cover grayscale mix-blend-screen" loading="eager" />
      </div>
      <div className="section-shell relative z-10 w-full pt-24 md:pt-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end">
          <div className="max-w-5xl">
            <div className="mb-10 flex items-center gap-4 md:mb-14">
              <span className="h-px w-12 bg-warm-brown" />
              <span className="eyebrow">Independent builder / 2026</span>
            </div>
            <p className="mb-5 font-hand text-2xl text-warm-brown/70 md:text-3xl">Hi, I&apos;m Akarsh.</p>
            <h1 className="display-balance font-serif text-[clamp(4rem,11.5vw,10.5rem)] leading-[.82] tracking-[-.035em] text-cream">
              I build <em className="text-cream/70">websites</em><br />
              people remember.
            </h1>
            <div className="mt-10 flex max-w-xl flex-col gap-8 md:mt-14 md:flex-row md:items-end md:gap-16">
              <p className="max-w-sm text-base leading-relaxed text-taupe md:text-lg">High-converting digital homes for businesses and professionals who care how they show up online.</p>
              <p className="eyebrow shrink-0">Mumbai, India<br />Available for select work</p>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row md:mt-12">
              <a href="#work" className="group inline-flex items-center justify-center gap-3 bg-cream px-7 py-4 text-[11px] tracking-editorial text-espresso transition-colors hover:bg-warm-brown">Explore the work <ArrowDown size={14} className="transition-transform group-hover:translate-y-1" /></a>
              <a href="#contact" className="group inline-flex items-center justify-center gap-3 border border-cream/25 px-7 py-4 text-[11px] tracking-editorial text-cream transition-colors hover:border-cream/60">Start a conversation <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></a>
            </div>
          </div>
          <aside className="hidden border-l border-cream/15 pl-7 lg:block">
            <span className="eyebrow">01 / 04</span>
            <p className="mt-5 font-serif text-3xl leading-tight text-cream">Strategy, taste, and a little bit of code.</p>
            <span className="mt-14 block text-[10px] tracking-editorial text-taupe/60">SCROLL TO EXPLORE ↓</span>
          </aside>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 border-t border-cream/10">
        <div className="section-shell flex items-center justify-between py-4"><span className="eyebrow text-taupe/60">Websites / digital experiences / experiments</span><span className="eyebrow text-taupe/60">08 projects</span></div>
      </div>
    </section>
  );
}

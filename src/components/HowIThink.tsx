export default function HowIThink() {
  return (
    <section className="bg-espresso grain py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="reveal">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-taupe/40" />
            <span className="text-[10px] tracking-editorial text-taupe/60">
              HOW I THINK
            </span>
          </div>

          <div className="max-w-5xl">
            <h2 className="font-serif text-[clamp(2.5rem,7vw,6rem)] leading-[1.05] text-cream tracking-tight">
              I'M MORE INTERESTED
              <br />
              IN MAKING THINGS
              <br />
              <span className="italic text-taupe">THAN TALKING ABOUT</span>
              <br />
              <span className="italic text-taupe">MAKING THINGS.</span>
            </h2>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-1 hidden md:block">
              <div className="w-12 h-px bg-taupe/40 mt-4" />
            </div>
            <div className="md:col-span-7">
              <p className="text-base md:text-xl text-taupe font-light leading-relaxed">
                I like taking an idea, giving it a visual identity, and turning
                it into something people can actually interact with. Sometimes
                that's a business website. Sometimes it's an experiment that
                probably needs another twenty versions.
              </p>
            </div>
            <div className="md:col-span-3 md:col-start-10">
              <p className="font-hand text-xl text-warm-brown/70 italic">
                "just build it."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

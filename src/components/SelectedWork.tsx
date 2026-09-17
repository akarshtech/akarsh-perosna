export default function SelectedWork() {
  return (
    <section id="work" className="bg-dark-brown grain pt-24 md:pt-32 pb-8">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="reveal">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-taupe/40" />
            <span className="text-[10px] tracking-editorial text-taupe/60">
              SELECTED WORK / 2026
            </span>
          </div>

          <h2 className="font-serif text-[clamp(3rem,9vw,8rem)] leading-[0.92] text-cream tracking-tight">
            SELECTED WORK
          </h2>

          <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <p className="max-w-2xl text-base md:text-lg text-taupe font-light leading-relaxed">
              Websites I've designed and built while exploring different industries
              and visual identities.
            </p>
            <span className="text-[10px] tracking-editorial text-taupe/40">
              08 PROJECTS / INDEPENDENT BUILDS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

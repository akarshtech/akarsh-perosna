export default function SelectedWork() {
  return <section id="work" className="bg-dark-brown grain pb-10 pt-28 md:pb-16 md:pt-40">
    <div className="section-shell">
      <div className="reveal grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
        <div>
          <div className="mb-7 flex items-center gap-4"><span className="h-px w-12 bg-warm-brown" /><span className="eyebrow">02 / Selected work</span></div>
          <h2 className="display-balance font-serif text-[clamp(3.5rem,8vw,8rem)] leading-[.86] tracking-[-.03em] text-cream">A few things<br /><em className="text-warm-brown">I&apos;ve made.</em></h2>
        </div>
        <div className="flex flex-col gap-7 lg:pb-2 lg:pl-12"><p className="max-w-md text-base leading-relaxed text-taupe md:text-lg">Websites designed and built while exploring different industries, identities, and ways of making the internet feel more human.</p><span className="eyebrow text-taupe/50">08 projects / independent builds</span></div>
      </div>
      <div className="mt-16 flex items-center gap-4 border-t border-cream/10 pt-4"><span className="eyebrow text-taupe/50">Scroll through the collection</span><span className="h-px flex-1 bg-cream/10" /><span className="font-serif text-xl text-warm-brown">↓</span></div>
    </div>
  </section>;
}

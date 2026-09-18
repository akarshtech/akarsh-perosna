import { services } from '@/data/projects';

export default function Services() {
  return (
    <section className="site-section services-section bg-espresso grain py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="reveal">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-taupe/40" />
            <span className="text-[10px] tracking-editorial text-taupe/60">
              WHAT I DO
            </span>
          </div>

          <h2 className="font-serif text-[clamp(3rem,9vw,8rem)] leading-[0.92] text-cream tracking-tight mb-16 md:mb-24">
            WHAT I BUILD
          </h2>
        </div>

        <div className="space-y-px">
          {services.map((service) => (
            <div
              key={service.number}
              className="reveal border-t border-cream/15 py-10 md:py-14 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                <div className="md:col-span-2">
                  <span className="font-serif text-5xl md:text-6xl text-taupe/30">
                    {service.number}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-serif text-3xl md:text-5xl text-cream group-hover:text-cream/80 transition-colors duration-400">
                    {service.title}
                  </h3>
                </div>
                <div className="md:col-span-5">
                  <p className="text-sm md:text-lg text-taupe font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="md:col-span-1 flex md:justify-end">
                  <div className="w-10 h-10 border border-cream/20 flex items-center justify-center group-hover:border-cream/40 group-hover:bg-cream/5 transition-all duration-400">
                    <span className="text-cream/40 text-sm">→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

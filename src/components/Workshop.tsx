import { experiments } from '@/data/projects';
import { useAtmosphere } from '@/context/AtmosphereContext';

export default function Workshop() {
  const { mode } = useAtmosphere();
  return (
    <section id="workshop" className={`site-section workshop-section workshop-section-${mode} bg-burgundy grain py-24 md:py-32`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="reveal">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-cream/30" />
            <span className="text-[10px] tracking-editorial text-cream/50">
              SECTION 02
            </span>
          </div>

          <h2 className="font-serif text-[clamp(3rem,9vw,8rem)] leading-[0.92] text-cream tracking-tight">
            THE WORKSHOP
          </h2>

          <p className="mt-8 max-w-2xl text-base md:text-lg text-cream/70 font-light leading-relaxed">
            Ideas I'm currently messing around with.
          </p>
        </div>

        <div className="mt-16 md:mt-24 space-y-px">
          {experiments.map((exp) => (
            <div
              key={exp.number}
              className="reveal border-t border-cream/15 py-10 md:py-14 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                <div className="md:col-span-2">
                  <span className="font-serif text-5xl md:text-6xl text-cream/30">
                    {exp.number}
                  </span>
                </div>
                <div className="md:col-span-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[9px] tracking-editorial text-cream/50 px-3 py-1 border border-cream/25">
                      {exp.status}
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl md:text-5xl text-cream">
                    {exp.name}
                  </h3>
                </div>
                <div className="md:col-span-4">
                  <p className="text-sm md:text-base text-cream/60 font-light leading-relaxed">
                    {exp.description}
                  </p>
                  <p className="mt-4 font-hand text-lg text-cream/50 italic">
                    "{exp.annotation}"
                  </p>
                </div>
                <div className="md:col-span-1 flex md:justify-end">
                  <div className="w-10 h-10 border border-cream/20 flex items-center justify-center group-hover:bg-cream/10 transition-colors duration-400">
                    <span className="text-[9px] tracking-editorial text-cream/40">
                      WIP
                    </span>
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

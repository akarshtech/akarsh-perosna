import { buildSteps } from '@/data/sections';
import { ArrowRight } from 'lucide-react';

export default function HowIBuild() {
  return (
    <section className="bg-dark-brown grain py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="reveal">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-taupe/40" />
            <span className="text-[10px] tracking-editorial text-taupe/60">
              THE PROCESS
            </span>
          </div>

          <h2 className="font-serif text-[clamp(3rem,9vw,8rem)] leading-[0.92] text-cream tracking-tight">
            HOW I BUILD
          </h2>

          <p className="mt-8 max-w-2xl text-base md:text-lg text-taupe font-light leading-relaxed">
            A simple process. No unnecessary bullshit.
          </p>
        </div>

        <div className="mt-16 md:mt-24">
          {/* Desktop horizontal sequence */}
          <div className="hidden md:grid grid-cols-4 gap-0">
            {buildSteps.map((step, index) => (
              <div
                key={step.number}
                className="reveal relative px-8 first:pl-0"
              >
                {index > 0 && (
                  <div className="absolute left-0 top-8 -translate-x-1/2 text-taupe/30">
                    <ArrowRight size={16} />
                  </div>
                )}
                <span className="font-serif text-6xl md:text-7xl text-cream/20 leading-none">
                  {step.number}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-cream mt-4 mb-3">
                  {step.title}
                </h3>
                <div className="w-8 h-px bg-warm-brown/40 mb-4" />
                <p className="text-sm text-taupe font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile vertical sequence */}
          <div className="md:hidden space-y-0">
            {buildSteps.map((step, index) => (
              <div
                key={step.number}
                className="reveal relative pl-10 pb-10 last:pb-0"
              >
                <div className="absolute left-0 top-0 bottom-0 w-px bg-cream/15" />
                <div className="absolute left-[-7px] top-2 w-3.5 h-3.5 rounded-full border-2 border-cream/40 bg-dark-brown" />
                <span className="font-serif text-5xl text-cream/20 leading-none">
                  {step.number}
                </span>
                <h3 className="font-serif text-2xl text-cream mt-2 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-taupe font-light leading-relaxed">
                  {step.description}
                </p>
                {index < buildSteps.length - 1 && (
                  <div className="mt-4 text-taupe/30 text-xs">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

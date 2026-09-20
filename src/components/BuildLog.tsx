import { buildLog } from '@/data/projects';
import { useAtmosphere } from '@/context/AtmosphereContext';

export default function BuildLog() {
  const { mode } = useAtmosphere();
  return (
    <section className={`site-section log-section log-section-${mode} bg-dark-brown grain py-24 md:py-32`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="reveal">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-taupe/40" />
            <span className="text-[10px] tracking-editorial text-taupe/60">
              THE JOURNEY
            </span>
          </div>

          <h2 className="font-serif text-[clamp(3rem,9vw,8rem)] leading-[0.92] text-cream tracking-tight mb-16 md:mb-24">
            BUILD LOG
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto md:mx-0 md:ml-12">
          {/* Vertical line */}
          <div className="absolute left-2 md:left-3 top-0 bottom-0 w-px bg-cream/15" />

          {buildLog.map((entry, index) => (
            <div
              key={index}
              className="reveal relative pl-10 md:pl-16 pb-12 last:pb-0"
            >
              {/* Dot */}
              <div
                className={`absolute left-0 md:left-[9px] top-1 w-5 h-5 rounded-full border-2 ${
                  entry.isLast
                    ? 'border-warm-brown bg-warm-brown/20'
                    : 'border-cream/40 bg-espresso'
                } flex items-center justify-center`}
              >
                {entry.isLast && (
                  <div className="w-2 h-2 rounded-full bg-warm-brown animate-pulse" />
                )}
              </div>

              {/* Content */}
              <div className="flex items-baseline gap-4">
                <span className="text-[10px] tracking-editorial text-taupe/50 w-12 shrink-0">
                  {entry.year}
                </span>
                <p
                  className={`font-serif text-xl md:text-3xl ${
                    entry.isLast
                      ? 'text-warm-brown italic'
                      : 'text-cream/90'
                  } leading-snug`}
                >
                  {entry.text}
                </p>
              </div>

              {/* Arrow connector */}
              {!entry.isLast && (
                <div className="ml-16 mt-4 text-taupe/30">
                  <span className="text-xs">↓</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { whyItems } from '@/data/sections';

export default function WhyAWebsite() {
  return (
    <section className="bg-cream grain py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="reveal">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-espresso/30" />
            <span className="text-[10px] tracking-editorial text-espresso/50">
              FOR YOUR BUSINESS
            </span>
          </div>

          <h2 className="font-serif text-[clamp(3rem,9vw,8rem)] leading-[0.92] text-espresso tracking-tight">
            WHY A WEBSITE?
          </h2>

          <p className="mt-8 max-w-2xl text-base md:text-lg text-espresso/60 font-light leading-relaxed">
            Because your business deserves more than a social media page.
          </p>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-px bg-espresso/10">
          {whyItems.map((item) => (
            <div
              key={item.number}
              className="reveal bg-cream p-10 md:p-12 group hover:bg-cream/90 transition-colors duration-500"
            >
              <span className="font-serif text-7xl md:text-8xl text-espresso/15 leading-none">
                {item.number}
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-espresso mt-6 mb-4">
                {item.title}
              </h3>
              <div className="w-8 h-px bg-burgundy/40 mb-4" />
              <p className="text-sm md:text-base text-espresso/60 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

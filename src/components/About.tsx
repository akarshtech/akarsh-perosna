import { useAtmosphere } from '@/context/AtmosphereContext';

export default function About() {
  const { mode } = useAtmosphere();
  return (
    <section id="about" className={`site-section about-section about-section-${mode} bg-forest grain py-24 md:py-32 overflow-hidden`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="reveal">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-cream/30" />
            <span className="text-[10px] tracking-editorial text-cream/50">
              SECTION 03
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
            {/* Text */}
            <div className="md:col-span-7">
              <h2 className="font-serif text-[clamp(3.5rem,10vw,9rem)] leading-[0.92] text-cream tracking-tight mb-10">
                I'M AKARSH.
              </h2>

              <div className="space-y-6 max-w-2xl">
                <p className="text-base md:text-xl text-cream/80 font-light leading-relaxed">
                  I'm a student and independent builder from Mumbai who enjoys
                  turning ideas into websites, digital experiences and
                  experiments.
                </p>
                <p className="text-base md:text-xl text-cream/60 font-light leading-relaxed">
                  I started building websites because I liked the idea that
                  something could go from nothing to something people could
                  actually interact with.
                </p>
                <p className="text-base md:text-xl text-cream/60 font-light leading-relaxed">
                  I'm still learning, still experimenting, and definitely still
                  breaking things.
                </p>
              </div>

              <p className="mt-10 font-hand text-xl text-cream/40 italic">
                "the best part is when it actually works."
              </p>
            </div>

            {/* Image collage */}
            <div className="md:col-span-5">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="aspect-[3/4] overflow-hidden hover-zoom">
                  <img
                    src="https://images.pexels.com/photos/8092469/pexels-photo-8092469.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Workspace with laptop and notebook"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden hover-zoom mt-8">
                  <img
                    src="https://images.pexels.com/photos/4843167/pexels-photo-4843167.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Mumbai city at sunset"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-2 aspect-[16/9] overflow-hidden hover-zoom -mt-4">
                  <img
                    src="https://images.pexels.com/photos/1668903/pexels-photo-1668903.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Architectural shadows"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

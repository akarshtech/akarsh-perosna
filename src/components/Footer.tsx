import AtmosphereSwitch from '@/components/AtmosphereSwitch';
import { useAtmosphere } from '@/context/AtmosphereContext';

const footerLinks = [
  { label: 'WORK', href: '#work' },
  { label: 'WORKSHOP', href: '#workshop' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Footer() {
  const { mode } = useAtmosphere();
  return (
    <footer className={`site-footer site-footer-${mode} bg-espresso border-t border-cream/10 py-12 md:py-16`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-3xl md:text-4xl text-cream tracking-tight">
              AKARSH DUBEY
            </h3>
            <div className="flex items-center gap-4 mt-3">
              <span className="text-[10px] tracking-editorial text-taupe/50">
                MUMBAI / INDIA
              </span>
              <span className="text-[10px] tracking-editorial text-taupe/50">
                2026
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] tracking-editorial text-taupe hover:text-cream transition-colors duration-300 link-underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="md:text-right">
            <p className="text-[10px] tracking-editorial text-taupe/40">
              BUILT WITH INTENT.
            </p>
            <p className="text-[10px] tracking-editorial text-taupe/40 mt-1">
              © 2026 AKARSH DUBEY
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cream/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-[10px] tracking-editorial text-taupe/60">
          <a href="mailto:its.akarsh115e@gmail.com" className="hover:text-cream transition-colors">EMAIL / its.akarsh115e@gmail.com</a>
          <a href="https://wa.me/919372725949" className="hover:text-cream transition-colors">WHATSAPP / +91 93727 25949</a>
          <a href="tel:+919372725949" className="hover:text-cream transition-colors">PHONE / +91 93727 25949</a>
        </div>

        {/* Bottom line */}
        <div className="mt-6 pt-6 border-t border-cream/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <p className="font-hand text-base text-warm-brown/40 italic">
              "still figuring it out."
            </p>
            <AtmosphereSwitch />
          </div>
          <a
            href="#top"
            className="text-[10px] tracking-editorial text-taupe/40 hover:text-cream transition-colors duration-300"
          >
            BACK TO TOP ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

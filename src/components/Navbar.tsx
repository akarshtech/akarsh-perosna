import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'WORK', href: '#work' },
  { label: 'WORKSHOP', href: '#workshop' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-espresso/85 backdrop-blur-md border-b border-cream/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
          <a href="#top" className="font-serif text-2xl md:text-3xl text-cream tracking-tight">
            AKARSH
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] tracking-editorial text-taupe hover:text-cream transition-colors duration-300 link-underline"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 ml-6 pl-6 border-l border-cream/15">
              <span className="text-[10px] tracking-editorial text-taupe/70">MUMBAI / INDIA</span>
              <span className="text-[10px] tracking-editorial text-taupe/70">2026</span>
            </div>
          </div>

          <button
            className="md:hidden text-cream"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-espresso md:hidden flex flex-col items-center justify-center gap-8 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-serif text-4xl text-cream"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-6 mt-8">
            <span className="text-[11px] tracking-editorial text-taupe">MUMBAI / INDIA</span>
            <span className="text-[11px] tracking-editorial text-taupe">2026</span>
          </div>
        </div>
      )}
    </>
  );
}

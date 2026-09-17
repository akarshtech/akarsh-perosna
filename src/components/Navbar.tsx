import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Workshop', href: '#workshop' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('keydown', onKey); };
  }, []);
  return <>
    <nav aria-label="Primary navigation" className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'border-b border-cream/10 bg-espresso/85 backdrop-blur-xl' : ''}`}>
      <div className="section-shell flex h-[72px] items-center justify-between md:h-[84px]">
        <a href="#top" className="font-serif text-2xl tracking-tight text-cream" aria-label="Akarsh Dubey home">AKARSH<span className="text-warm-brown">.</span></a>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => <a key={link.href} href={link.href} className="link-underline text-[10px] uppercase tracking-[.2em] text-taupe transition-colors hover:text-cream">{link.label}</a>)}
          <span className="ml-3 border-l border-cream/15 pl-7 text-[10px] tracking-editorial text-taupe/60">MUMBAI / INDIA</span>
        </div>
        <button type="button" className="flex size-11 items-center justify-center text-cream md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
    </nav>
    {menuOpen && <div id="mobile-navigation" className="fixed inset-0 z-40 flex flex-col justify-center gap-7 bg-espresso px-6 md:hidden" role="dialog" aria-label="Mobile navigation">
      {navLinks.map((link, index) => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="flex items-baseline gap-4 font-serif text-5xl text-cream"><span className="font-sans text-[10px] tracking-editorial text-warm-brown">0{index + 1}</span>{link.label}</a>)}
      <p className="mt-8 text-[10px] tracking-editorial text-taupe">MUMBAI / INDIA · 2026</p>
    </div>}
  </>;
}

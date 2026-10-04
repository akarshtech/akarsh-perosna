import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import AtmosphereSwitch from './AtmosphereSwitch';
import { useAtmosphere } from '@/context/AtmosphereContext';

const navLinks = [{ label: 'Work', href: '#work' }, { label: 'Workshop', href: '#workshop' }, { label: 'About', href: '#about' }, { label: 'Contact', href: '#contact' }];

export default function Navbar() {
  const { mode } = useAtmosphere();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMoodHint, setShowMoodHint] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false);
    try {
      setShowMoodHint(window.localStorage.getItem('akarsh-mood-hint-dismissed') !== 'true');
    } catch {
      setShowMoodHint(true);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('keydown', onKey); };
  }, []);
  const dismissMoodHint = () => {
    try {
      window.localStorage.setItem('akarsh-mood-hint-dismissed', 'true');
    } catch {
      // Storage can be unavailable in embedded previews; dismissal still works for this session.
    }
    setShowMoodHint(false);
  };
  return <><nav aria-label="Primary navigation" className={`site-nav site-nav-${mode} ${scrolled ? 'is-scrolled' : ''}`}><div className="section-shell nav-inner"><a href="#top" className="brand" aria-label="Akarsh Dubey home">AKARSH<span>.</span></a><div className="nav-links">{navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}<AtmosphereSwitch /></div><div className="mobile-nav-actions">{showMoodHint && <span className="mood-hint" aria-hidden="true">press this<span>↓</span></span>}<AtmosphereSwitch onInteracted={dismissMoodHint} /><button type="button" className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button></div></div></nav>{menuOpen && <div id="mobile-navigation" className={`mobile-nav mobile-nav-${mode}`} role="dialog" aria-modal="true" aria-label="Mobile navigation">{navLinks.map((link, index) => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}><span className="mono">0{index + 1}</span>{link.label}</a>)}</div>}</>;
}

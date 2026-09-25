import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { useAtmosphere } from '@/context/AtmosphereContext';

export default function Hero() {
  const { mode } = useAtmosphere();
  if (mode === 'raw') return <RawHero />;
  if (mode === 'studio') return <StudioHero />;
  return <EditorialHero />;
}

function EditorialHero() {
  return <section id="top" className="hero hero-editorial grain"><div className="hero-orbit" /><div className="section-shell hero-editorial-grid"><div><p className="eyebrow hero-kicker">Independent builder / 2026</p><p className="font-hand hero-note">Hi, I&apos;m Akarsh.</p><h1>I build <em>websites</em><br />people remember.</h1><p className="hero-copy">High-converting digital homes for businesses and professionals who care how they show up online.</p><div className="hero-actions"><a href="#work" className="button button-solid">Explore the work <ArrowDown size={14} /></a><a href="#contact" className="button button-outline">Start a conversation <ArrowUpRight size={14} /></a></div></div><aside className="hero-side"><span>01 / 04</span><strong>Strategy, taste,<br />and a little bit<br />of code.</strong><small>SCROLL TO EXPLORE ↓</small></aside></div><div className="hero-rail"><span>Websites / digital experiences / experiments</span><span>08 projects</span></div></section>;
}

function StudioHero() {
  return <section id="top" className="hero hero-studio"><div className="section-shell"><div className="studio-hero-top"><span className="mono">AKARSH DUBEY</span><span className="mono">MUMBAI / INDIA</span><span className="mono">2026 — AVAILABLE</span></div><div className="studio-hero-grid"><div className="studio-index mono">01<br />—<br />04</div><div><p className="eyebrow">Creative developer / independent practice</p><h1>I build digital<br /><span>homes with intent.</span></h1><p className="hero-copy">Websites for businesses, creators and ideas that deserve a considered presence on the internet.</p><div className="hero-actions"><a href="#work" className="button button-solid">Selected work <ArrowDown size={14} /></a><a href="#contact" className="button button-outline">Start a project <ArrowUpRight size={14} /></a></div></div><div className="studio-hero-meta"><span className="mono">BASED IN</span><strong>Mumbai, India</strong><span className="mono">FOCUS</span><strong>Web / digital / AI</strong><span className="mono">STATUS</span><strong>Taking select work</strong></div></div></div><div className="hero-rail"><span className="mono">A PRACTICE FOR THE WEB</span><span className="mono">SCROLL ↓</span></div></section>;
}

function RawHero() {
  return <section id="top" className="hero hero-raw"><div className="raw-crosshair" /><div className="section-shell"><div className="raw-command mono">[01] / AKARSH DUBEY / CREATIVE DEVELOPER</div><div className="raw-hero-grid"><div className="raw-stamp mono">BUILD<br />LOG<br /><span>2026</span></div><div><h1>Websites<br /><span>people remember.</span></h1><p className="hero-copy">I design and build digital homes for businesses, creators and ideas.</p><div className="hero-actions"><a href="#work" className="button button-solid">Open archive <ArrowDown size={14} /></a><a href="#contact" className="button button-outline">Send a brief <ArrowUpRight size={14} /></a></div></div></div><div className="raw-hero-foot mono"><span>LOCATION: MUMBAI, INDIA</span><span>MODE: EXPERIMENTAL</span><span>STATUS: ONLINE</span></div></div></section>;
}

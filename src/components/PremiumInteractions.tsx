import { useEffect, useState } from 'react';

export default function PremiumInteractions() {
  const [progress, setProgress] = useState(0);
  const [cursor, setCursor] = useState({ x: -100, y: -100, active: false });

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const viewportProgress = Math.min(window.scrollY / Math.max(window.innerHeight * 0.9, 1), 1);
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      document.documentElement.style.setProperty('--opening-progress', viewportProgress.toFixed(3));
    };
    const onMove = (event: MouseEvent) => setCursor({ x: event.clientX, y: event.clientY, active: true });
    const onLeave = () => setCursor((current) => ({ ...current, active: false }));
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return <>
    <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} aria-hidden="true" />
    <div className={`premium-cursor ${cursor.active ? 'is-visible' : ''}`} style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }} aria-hidden="true" />
  </>;
}

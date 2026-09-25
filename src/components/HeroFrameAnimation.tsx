import { useEffect, useRef } from 'react';

const FRAME_COUNT = 120;
const HERO_SCROLL_HEIGHT = 500;
const frameSources = Array.from({ length: FRAME_COUNT }, (_, index) => `/hero-frames/ezgif-frame-${String(index + 1).padStart(3, '0')}.jpg`);

export default function HeroFrameAnimation() {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let cancelled = false;
    let frameIndex = 0;
    let animationFrame = 0;
    const frames: Array<HTMLImageElement | undefined> = [];
    const sequence = imageRef.current?.closest<HTMLElement>('.hero-frame-sequence');
    if (!sequence) return;

    const loadFrame = (index: number) => new Promise<HTMLImageElement>((resolve, reject) => {
      const image = new Image();
      image.decoding = 'async';
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error(`Unable to load hero frame ${index + 1}`));
      image.src = frameSources[index];
    });

    const updateFrame = () => {
      animationFrame = 0;
      if (cancelled) return;
      const scrollableDistance = Math.max(sequence.offsetHeight - window.innerHeight, 1);
      const progress = Math.max(0, Math.min(1, -sequence.getBoundingClientRect().top / scrollableDistance));
      const nextFrame = Math.floor(progress * (FRAME_COUNT - 1));
      if (nextFrame !== frameIndex && frames[nextFrame]) {
        frameIndex = nextFrame;
        imageRef.current?.setAttribute('src', frameSources[frameIndex]);
      }
    };

    const onScroll = () => {
      if (!animationFrame) animationFrame = requestAnimationFrame(updateFrame);
    };

    const preload = async () => {
      try {
        frames[0] = await loadFrame(0);
        if (!cancelled) {
          imageRef.current?.setAttribute('src', frameSources[0]);
          updateFrame();
        }
        for (let index = 1; index < FRAME_COUNT; index += 1) {
          if (cancelled) return;
          try { frames[index] = await loadFrame(index); } catch { continue; }
        }
      } catch {
        // The markup already contains frame one as a resilient fallback.
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    void preload();
    onScroll();
    return () => {
      cancelled = true;
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      frames.length = 0;
    };
  }, []);

  return <div className="hero-frame-sequence" style={{ height: `${HERO_SCROLL_HEIGHT}vh` }} aria-hidden="true"><div className="hero-frame-animation"><img ref={imageRef} src={frameSources[0]} alt="" fetchPriority="high" decoding="async" /></div></div>;
}

export { FRAME_COUNT, HERO_SCROLL_HEIGHT, frameSources };

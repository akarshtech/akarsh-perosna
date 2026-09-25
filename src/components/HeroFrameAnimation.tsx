import { useEffect, useRef } from 'react';

const FRAME_COUNT = 120;
const FRAME_RATE = 30;
const INITIAL_BUFFER = 10;
const frameSources = Array.from({ length: FRAME_COUNT }, (_, index) => `/hero-frames/ezgif-frame-${String(index + 1).padStart(3, '0')}.jpg`);

export default function HeroFrameAnimation() {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let cancelled = false;
    let frameIndex = 0;
    let startedAt = 0;
    let animationFrame = 0;
    const frames: Array<HTMLImageElement | undefined> = [];

    const loadFrame = (index: number) => new Promise<HTMLImageElement>((resolve, reject) => {
      const image = new Image();
      image.decoding = 'async';
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error(`Unable to load hero frame ${index + 1}`));
      image.src = frameSources[index];
    });

    const loadInitialBuffer = async () => {
      try {
        for (let index = 0; index < INITIAL_BUFFER; index += 1) {
          frames[index] = await loadFrame(index);
        }
        if (cancelled || !imageRef.current) return;
        imageRef.current.src = frameSources[0];
        startedAt = performance.now();

        const render = (now: number) => {
          if (cancelled) return;
          const targetIndex = Math.min(FRAME_COUNT - 1, Math.floor((now - startedAt) / (1000 / FRAME_RATE)));
          if (targetIndex > frameIndex && frames[frameIndex + 1]) {
            frameIndex += 1;
            imageRef.current?.setAttribute('src', frameSources[frameIndex]);
          }
          if (frameIndex < FRAME_COUNT - 1) animationFrame = requestAnimationFrame(render);
        };
        animationFrame = requestAnimationFrame(render);

        for (let index = INITIAL_BUFFER; index < FRAME_COUNT; index += 1) {
          if (cancelled) return;
          try { frames[index] = await loadFrame(index); } catch { return; }
        }
      } catch {
        if (!cancelled && imageRef.current) imageRef.current.src = frameSources[0];
      }
    };

    void loadInitialBuffer();
    return () => {
      cancelled = true;
      cancelAnimationFrame(animationFrame);
      frames.length = 0;
    };
  }, []);

  return <div className="hero-frame-animation" aria-hidden="true"><img ref={imageRef} src={frameSources[0]} alt="" fetchPriority="high" decoding="async" /></div>;
}

export { FRAME_COUNT, frameSources }; 

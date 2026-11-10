import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

type CursorMode = 'default' | 'button' | 'link' | 'view' | 'drag' | 'lens' | 'native';
type ExplicitMode = 'button' | 'link' | 'view' | 'drag' | 'lens';

interface ResolvedCursor {
  mode: CursorMode;
  magnet: Element | null;
}

const EXPLICIT_MODES: readonly string[] = ['button', 'link', 'view', 'drag', 'lens'];
const NATIVE_SELECTOR = 'input, textarea, select, [contenteditable="true"], :disabled, [aria-disabled="true"]';
const PROJECT_CARD_SELECTOR = '.editorial-project, .studio-project, .raw-project';
const BUTTON_SELECTOR = 'button, [role="button"], .button, .mode-switch, summary, .faq-trigger';
const LINK_SELECTOR = 'a, [role="link"]';
const LABELS: Partial<Record<CursorMode, string>> = { view: 'VIEW', drag: 'DRAG' };

const MAGNET_STRENGTH = 0.3;
const DOT_EASE = 0.55;
const RING_EASE = 0.16;
const SETTLE_DISTANCE = 0.05;

const FINE_POINTER_QUERY = '(hover: hover) and (pointer: fine)';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

function resolveCursor(target: Element): ResolvedCursor {
  if (target.closest(NATIVE_SELECTOR)) return { mode: 'native', magnet: null };

  const explicit = target.closest<HTMLElement>('[data-cursor]');
  if (explicit && EXPLICIT_MODES.includes(explicit.dataset.cursor ?? '')) {
    const mode = explicit.dataset.cursor as ExplicitMode;
    return { mode, magnet: mode === 'button' ? explicit : null };
  }

  if (target.closest(PROJECT_CARD_SELECTOR)) return { mode: 'view', magnet: null };

  const button = target.closest(BUTTON_SELECTOR);
  if (button) return { mode: 'button', magnet: button };

  if (target.closest('img')) return { mode: 'lens', magnet: null };
  if (target.closest(LINK_SELECTOR)) return { mode: 'link', magnet: null };

  return { mode: 'default', magnet: null };
}

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const queries = [window.matchMedia(FINE_POINTER_QUERY), window.matchMedia(REDUCED_MOTION_QUERY)];
    const sync = () => {
      setEnabled(queries[0].matches && !queries[1].matches);
    };
    sync();
    queries.forEach((query) => query.addEventListener('change', sync));
    return () => queries.forEach((query) => query.removeEventListener('change', sync));
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    const ring = ringRef.current;
    const dot = dotRef.current;
    const label = labelRef.current;
    if (!enabled || !root || !ring || !dot || !label) return;

    const html = document.documentElement;
    html.classList.add('has-custom-cursor');

    const pointer = { x: 0, y: 0 };
    const dotPos = { x: 0, y: 0 };
    const ringPos = { x: 0, y: 0 };
    let mode: CursorMode = 'default';
    let magnet: Element | null = null;
    let hasPointer = false;
    let frame = 0;

    const tick = () => {
      frame = 0;
      let ringTargetX = pointer.x;
      let ringTargetY = pointer.y;

      if (mode === 'button' && magnet) {
        const rect = magnet.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        ringTargetX = pointer.x + (centerX - pointer.x) * MAGNET_STRENGTH;
        ringTargetY = pointer.y + (centerY - pointer.y) * MAGNET_STRENGTH;
      }

      dotPos.x += (pointer.x - dotPos.x) * DOT_EASE;
      dotPos.y += (pointer.y - dotPos.y) * DOT_EASE;
      ringPos.x += (ringTargetX - ringPos.x) * RING_EASE;
      ringPos.y += (ringTargetY - ringPos.y) * RING_EASE;

      dot.style.transform = `translate3d(${dotPos.x}px, ${dotPos.y}px, 0)`;
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`;

      const isMagnetized = mode === 'button' && magnet !== null;
      const settled =
        !isMagnetized &&
        Math.abs(pointer.x - dotPos.x) < SETTLE_DISTANCE &&
        Math.abs(pointer.y - dotPos.y) < SETTLE_DISTANCE &&
        Math.abs(ringTargetX - ringPos.x) < SETTLE_DISTANCE &&
        Math.abs(ringTargetY - ringPos.y) < SETTLE_DISTANCE;

      if (!settled) frame = requestAnimationFrame(tick);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      if (!hasPointer) {
        hasPointer = true;
        dotPos.x = ringPos.x = event.clientX;
        dotPos.y = ringPos.y = event.clientY;
        root.dataset.visible = 'true';
      }
      schedule();
    };

    const onPointerOver = (event: PointerEvent) => {
      if (event.pointerType === 'touch' || !(event.target instanceof Element)) return;
      const resolved = resolveCursor(event.target);
      magnet = resolved.magnet;
      if (resolved.mode !== mode) {
        mode = resolved.mode;
        root.dataset.mode = mode;
        label.textContent = LABELS[mode] ?? '';
      }
      schedule();
    };

    const onPointerDown = () => {
      root.dataset.pressed = 'true';
    };

    const onPointerUp = () => {
      root.dataset.pressed = 'false';
    };

    const onPointerOut = (event: PointerEvent) => {
      if (!event.relatedTarget) root.dataset.visible = 'false';
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerover', onPointerOver, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('pointerup', onPointerUp, { passive: true });
    window.addEventListener('pointercancel', onPointerUp, { passive: true });
    document.addEventListener('pointerout', onPointerOut, { passive: true });

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerover', onPointerOver);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
      document.removeEventListener('pointerout', onPointerOut);
      if (frame) cancelAnimationFrame(frame);
      html.classList.remove('has-custom-cursor');
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={rootRef} className="custom-cursor" aria-hidden="true" data-mode="default" data-visible="false" data-pressed="false">
      <div ref={ringRef} className="custom-cursor__ring">
        <div className="custom-cursor__shape">
          <span ref={labelRef} className="custom-cursor__label" />
        </div>
      </div>
      <div ref={dotRef} className="custom-cursor__dot">
        <div className="custom-cursor__shape" />
      </div>
    </div>
  );
}

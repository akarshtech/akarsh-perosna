import { createContext, useContext, useState, type ReactNode } from 'react';

export type Atmosphere = 'espresso' | 'forest' | 'burgundy';

interface AtmosphereState {
  atmosphere: Atmosphere;
  cycleAtmosphere: () => void;
}

const AtmosphereContext = createContext<AtmosphereState | undefined>(undefined);

const atmosphereAccents: Record<Atmosphere, string> = {
  espresso: '#211C19',
  forest: '#26352D',
  burgundy: '#5A2630',
};

export function AtmosphereProvider({ children }: { children: ReactNode }) {
  const [atmosphere, setAtmosphere] = useState<Atmosphere>('espresso');

  const cycleAtmosphere = () => {
    setAtmosphere((prev) => {
      const order: Atmosphere[] = ['espresso', 'forest', 'burgundy'];
      const nextIndex = (order.indexOf(prev) + 1) % order.length;
      return order[nextIndex];
    });
  };

  return (
    <AtmosphereContext.Provider value={{ atmosphere, cycleAtmosphere }}>
      <div
        className="atmosphere-overlay"
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'soft-light',
          opacity: 0,
          backgroundColor: atmosphereAccents[atmosphere],
          transition: 'opacity 1.5s ease, background-color 1.5s ease',
        }}
      />
      <div
        ref={(el) => {
          if (el) el.style.opacity = '1';
        }}
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 9998,
          mixBlendMode: 'soft-light',
          opacity: 0.18,
          backgroundColor: atmosphereAccents[atmosphere],
          transition: 'background-color 1.5s ease',
        }}
      />
      {children}
    </AtmosphereContext.Provider>
  );
}

export function useAtmosphere() {
  const ctx = useContext(AtmosphereContext);
  if (!ctx) throw new Error('useAtmosphere must be used within AtmosphereProvider');
  return ctx;
}

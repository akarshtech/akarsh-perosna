import { createContext, useContext, useState, type ReactNode } from 'react';

export type VisualMode = 'editorial' | 'studio' | 'raw';

interface VisualModeState {
  mode: VisualMode;
  cycleMode: () => void;
}

const VisualModeContext = createContext<VisualModeState | undefined>(undefined);
const modes: VisualMode[] = ['editorial', 'studio', 'raw'];

export function AtmosphereProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<VisualMode>('editorial');
  const cycleMode = () => setMode((current) => modes[(modes.indexOf(current) + 1) % modes.length]);

  return (
    <VisualModeContext.Provider value={{ mode, cycleMode }}>
      <div className={`visual-mode visual-mode-${mode}`} data-visual-mode={mode}>
        {children}
      </div>
    </VisualModeContext.Provider>
  );
}

export function useAtmosphere() {
  const context = useContext(VisualModeContext);
  if (!context) throw new Error('useAtmosphere must be used within AtmosphereProvider');
  return context;
}

export const modeLabels: Record<VisualMode, string> = {
  editorial: 'EDITORIAL',
  studio: 'STUDIO',
  raw: 'RAW',
};

export type Atmosphere = VisualMode;
export const atmosphereLabels = modeLabels;
export const atmosphereAccents = { editorial: '#a86a52', studio: '#8a9a7b', raw: '#d1b56f' } satisfies Record<VisualMode, string>;

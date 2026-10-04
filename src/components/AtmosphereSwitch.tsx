import { useAtmosphere, modeLabels, type VisualMode } from '@/context/AtmosphereContext';

const nextMode: Record<VisualMode, VisualMode> = { editorial: 'studio', studio: 'raw', raw: 'editorial' };

export default function AtmosphereSwitch() {
  const { mode, cycleMode } = useAtmosphere();
  return <button type="button" className="mode-switch" onClick={cycleMode} aria-label={`Change visual mode from ${modeLabels[mode]} to ${modeLabels[nextMode[mode]]}`}><span className="mode-switch-label">Change the feel</span><span className="mode-switch-track"><span className="mode-switch-dot" /></span><span className="mono">{modeLabels[mode]}</span></button>;
}

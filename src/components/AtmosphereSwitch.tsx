import { useAtmosphere, modeLabels, type VisualMode } from '@/context/AtmosphereContext';

const nextMode: Record<VisualMode, VisualMode> = { editorial: 'studio', studio: 'raw', raw: 'editorial' };

interface AtmosphereSwitchProps {
  onInteracted?: () => void;
}

export default function AtmosphereSwitch({ onInteracted }: AtmosphereSwitchProps) {
  const { mode, cycleMode } = useAtmosphere();
  const handleClick = () => {
    cycleMode();
    onInteracted?.();
  };

  return <button type="button" className="mode-switch" onClick={handleClick} aria-label={`Change visual mood. Current mode: ${modeLabels[mode]}.`}><span className="mode-switch-label">Change the feel</span><span className="mode-switch-track"><span className="mode-switch-dot" /></span><span className="mono">{modeLabels[mode]}</span></button>;
}

import { useAtmosphere, type Atmosphere } from '@/context/AtmosphereContext';

const labels: Record<Atmosphere, string> = {
  espresso: 'ESPRESSO',
  forest: 'FOREST',
  burgundy: 'BURGUNDY',
};

export default function AtmosphereSwitch() {
  const { atmosphere, cycleAtmosphere } = useAtmosphere();

  return (
    <div className="flex items-center gap-3">
      <span className="text-[9px] tracking-editorial text-taupe/40 hidden sm:inline">
        try another mood
      </span>
      <button
        onClick={cycleAtmosphere}
        className="group flex items-center gap-2 text-[9px] tracking-editorial text-taupe/50 hover:text-cream transition-colors duration-400"
        aria-label="Change the atmosphere"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-warm-brown/60 group-hover:bg-cream transition-colors duration-400" />
        CHANGE THE ATMOSPHERE
        <span className="text-taupe/30 group-hover:text-cream/50 transition-colors duration-400">↗</span>
        <span className="ml-1 text-[8px] tracking-editorial text-taupe/30">
          {labels[atmosphere]}
        </span>
      </button>
    </div>
  );
}

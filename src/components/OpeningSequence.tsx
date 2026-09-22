import { useAtmosphere } from '@/context/AtmosphereContext';

const modeCopy = {
  editorial: { kicker: 'A DIGITAL PRACTICE', title: 'MAKE / IT / MEMORABLE', caption: 'Scroll to enter the work' },
  studio: { kicker: 'AKARSH DUBEY / 2026', title: 'FORM / FOLLOWS / INTENT', caption: 'Scroll to enter the practice' },
  raw: { kicker: '[SEQUENCE_001] / ONLINE', title: 'BREAK / THE / SYSTEM', caption: 'Scroll to boot the archive' },
};

export default function OpeningSequence() {
  const { mode } = useAtmosphere();
  const copy = modeCopy[mode];

  return (
    <section className={`opening-sequence opening-sequence-${mode}`} aria-label="Opening visual sequence">
      <div className="opening-stage">
        <div className="opening-grid" aria-hidden="true" />
        <div className="opening-project-art" aria-hidden="true"><img src="/images/project-01.png" alt="" /><span>08</span></div>
        <p className="opening-kicker mono">{copy.kicker}</p>
        <h2 className="opening-title" aria-label={copy.title}>
          {copy.title.split(' / ').map((word, index) => <span key={word} className={`opening-word opening-word-${index + 1}`}>{word}</span>)}
        </h2>
        <div className="opening-caption mono"><span>{copy.caption}</span><span>↓</span></div>
        <div className="opening-index mono">00 / 01</div>
      </div>
    </section>
  );
}

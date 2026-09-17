import { useAtmosphere } from '@/context/AtmosphereContext';

export default function SelectedWork() {
  const { mode } = useAtmosphere();
  const content = { editorial: ['02 / Selected work', 'A few things', 'I\'ve made.', 'A curated archive of digital homes, built with curiosity and care.'], studio: ['02 — PROJECT INDEX', 'Selected', 'work.', 'Eight independent builds across hospitality, education, beauty, healthcare and more.'], raw: ['[02] / ARCHIVE', 'Things', 'I shipped.', 'A record of experiments, client builds and useful things made for the web.'] }[mode];
  return <section id="work" className={`selected-work selected-work-${mode}`}><div className="section-shell"><div className="selected-work-top"><span className="eyebrow mono">{content[0]}</span><span className="mono">08 RECORDS / 2026</span></div><div className="selected-work-grid"><h2>{content[1]}<br /><em>{content[2]}</em></h2><p>{content[3]}</p></div><div className="selected-work-rule"><span className="mono">SCROLL TO EXPLORE</span><span>↓</span></div></div></section>;
}

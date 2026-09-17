import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';

const TOTAL_PROJECTS = 8;

const sectionColors: Record<string, string> = {
  '01': 'bg-espresso',
  '02': 'bg-cream',
  '03': 'bg-espresso',
  '04': 'bg-cream',
  '05': 'bg-espresso',
  '06': 'bg-forest',
  '07': 'bg-cream',
  '08': 'bg-burgundy',
};

const textColors: Record<string, string> = {
  '01': 'text-cream',
  '02': 'text-espresso',
  '03': 'text-cream',
  '04': 'text-espresso',
  '05': 'text-cream',
  '06': 'text-cream',
  '07': 'text-espresso',
  '08': 'text-cream',
};

const metaColors: Record<string, string> = {
  '01': 'text-taupe',
  '02': 'text-taupe',
  '03': 'text-taupe',
  '04': 'text-taupe',
  '05': 'text-taupe',
  '06': 'text-cream/60',
  '07': 'text-taupe',
  '08': 'text-cream/60',
};

function ProjectLink({ project, colorClass }: { project: Project; colorClass: string }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group/link inline-flex items-center gap-2 text-[11px] tracking-editorial ${colorClass} link-underline`}
    >
      VIEW PROJECT
      <ArrowUpRight size={13} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-400" />
    </a>
  );
}

function ProjectImage({ project, className = '' }: { project: Project; className?: string }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block group/img relative overflow-hidden ${className}`}
    >
      <img
        src={project.image}
        alt={project.name}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-6 left-6 flex items-center gap-2 opacity-0 translate-y-2 group-hover/img:opacity-100 group-hover/img:translate-y-0 transition-all duration-500">
        <span className="text-[10px] tracking-editorial text-cream bg-black/40 backdrop-blur-sm px-3 py-1.5">
          VIEW PROJECT
        </span>
        <ArrowUpRight size={13} className="text-cream" />
      </div>
    </a>
  );
}

function ArchiveMeta({ project, metaCol }: { project: Project; metaCol: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className={`text-[9px] tracking-editorial ${metaCol} opacity-50`}>
        PROJECT {project.number} / {String(TOTAL_PROJECTS).padStart(2, '0')}
      </span>
      <span className={`text-[9px] ${metaCol} opacity-30`}>·</span>
      <span className={`text-[9px] tracking-editorial ${metaCol} opacity-50`}>
        INDEPENDENT BUILD
      </span>
    </div>
  );
}

function ProjectLayout({ project }: { project: Project }) {
  const sectionBg = sectionColors[project.number] || 'bg-espresso';
  const textCol = textColors[project.number] || 'text-cream';
  const metaCol = metaColors[project.number] || 'text-taupe';
  const isDark = textCol === 'text-cream';
  const dividerClass = isDark ? 'bg-cream/15' : 'bg-espresso/15';

  switch (project.layout) {
    // 01 — Large full-width website preview
    case 'full-width':
      return (
        <div className={`${sectionBg} grain`}>
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 md:py-24">
            <div className="reveal group">
              <div className="flex items-end justify-between mb-6 md:mb-8">
                <div>
                  <ArchiveMeta project={project} metaCol={metaCol} />
                  <span className={`block text-[10px] tracking-editorial ${metaCol} mt-3`}>{project.label}</span>
                  <h3 className={`font-serif text-4xl md:text-6xl ${textCol} mt-2 transition-transform duration-500 group-hover:translate-x-2`}>{project.name}</h3>
                </div>
                <span className={`text-[10px] tracking-editorial ${metaCol} hidden md:block`}>{project.year}</span>
              </div>
              <div className={`h-px w-full ${dividerClass} mb-8`} />
              <div className="aspect-[16/9] md:aspect-[21/9]">
                <ProjectImage project={project} className="w-full h-full" />
              </div>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mt-8 gap-4">
                <p className={`text-sm md:text-base ${metaCol} max-w-xl font-light leading-relaxed`}>{project.description}</p>
                <div className="flex items-center gap-6">
                  <span className={`text-[10px] tracking-editorial ${metaCol}`}>{project.category}</span>
                  <ProjectLink project={project} colorClass={textCol} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    // 02 — Asymmetric split layout — text left, image right
    case 'asymmetric-split':
      return (
        <div className={`${sectionBg} grain`}>
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 md:py-24">
            <div className="reveal grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center group">
              <div className="md:col-span-5 md:order-1">
                <ArchiveMeta project={project} metaCol={metaCol} />
                <span className={`block text-[10px] tracking-editorial ${metaCol} mt-3`}>{project.label}</span>
                <h3 className={`font-serif text-4xl md:text-6xl ${textCol} mt-2 mb-6 transition-transform duration-500 group-hover:translate-x-1`}>{project.name}</h3>
                <p className={`text-sm md:text-base ${metaCol} font-light leading-relaxed mb-6`}>{project.description}</p>
                <div className="flex items-center gap-6">
                  <span className={`text-[10px] tracking-editorial ${metaCol}`}>{project.category}</span>
                  <ProjectLink project={project} colorClass={textCol} />
                </div>
              </div>
              <div className="md:col-span-7 md:order-2">
                <div className="aspect-[4/3]">
                  <ProjectImage project={project} className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    // 03 — Large centered composition
    case 'centered':
      return (
        <div className={`${sectionBg} grain`}>
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 md:py-24">
            <div className="reveal text-center group">
              <div className="flex justify-center mb-3">
                <ArchiveMeta project={project} metaCol={metaCol} />
              </div>
              <span className={`text-[10px] tracking-editorial ${metaCol}`}>{project.label}</span>
              <h3 className={`font-serif text-4xl md:text-7xl ${textCol} mt-2 mb-4 transition-transform duration-500 group-hover:scale-[1.02]`}>{project.name}</h3>
              <p className={`text-sm md:text-base ${metaCol} font-light leading-relaxed max-w-xl mx-auto mb-10`}>{project.description}</p>
              <div className="max-w-5xl mx-auto aspect-[16/10]">
                <ProjectImage project={project} className="w-full h-full" />
              </div>
              <div className="flex items-center justify-center gap-6 mt-8">
                <span className={`text-[10px] tracking-editorial ${metaCol}`}>{project.category}</span>
                <span className={`text-[10px] ${metaCol} opacity-30`}>·</span>
                <span className={`text-[10px] tracking-editorial ${metaCol}`}>{project.year}</span>
                <span className={`text-[10px] ${metaCol} opacity-30`}>·</span>
                <ProjectLink project={project} colorClass={textCol} />
              </div>
            </div>
          </div>
        </div>
      );

    // 04 — Full-width visual with metadata floating around it
    case 'floating-metadata':
      return (
        <div className={`${sectionBg} grain`}>
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 md:py-24">
            <div className="reveal relative group">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <ArchiveMeta project={project} metaCol={metaCol} />
                  <span className={`block text-[10px] tracking-editorial ${metaCol} mt-3`}>{project.label}</span>
                  <h3 className={`font-serif text-4xl md:text-6xl ${textCol} mt-2 transition-transform duration-500 group-hover:translate-x-1`}>{project.name}</h3>
                </div>
                <div className="text-right">
                  <span className={`text-[10px] tracking-editorial ${metaCol} block`}>{project.category}</span>
                  <span className={`text-[10px] tracking-editorial ${metaCol} block mt-1`}>{project.year}</span>
                </div>
              </div>
              <div className="relative aspect-[16/9] md:aspect-[2/1]">
                <ProjectImage project={project} className="w-full h-full" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-sm md:text-lg text-cream font-light max-w-xl">{project.description}</p>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <ProjectLink project={project} colorClass={textCol} />
              </div>
            </div>
          </div>
        </div>
      );

    // 05 — Photography-style asymmetric image arrangement
    case 'photography-arrangement':
      return (
        <div className={`${sectionBg} grain`}>
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 md:py-24">
            <div className="reveal group">
              <div className="mb-8">
                <ArchiveMeta project={project} metaCol={metaCol} />
                <span className={`block text-[10px] tracking-editorial ${metaCol} mt-3`}>{project.label}</span>
                <h3 className={`font-serif text-4xl md:text-6xl ${textCol} mt-2 transition-transform duration-500 group-hover:translate-x-1`}>{project.name}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
                <div className="md:col-span-8 md:row-span-2">
                  <div className="aspect-[16/10]">
                    <ProjectImage project={project} className="w-full h-full" />
                  </div>
                </div>
                <div className="md:col-span-4 flex flex-col justify-between gap-4">
                  <p className={`text-sm md:text-base ${metaCol} font-light leading-relaxed`}>{project.description}</p>
                  <div>
                    <span className={`text-[10px] tracking-editorial ${metaCol} block mb-2`}>{project.category}</span>
                    <span className={`text-[10px] tracking-editorial ${metaCol} block mb-4`}>{project.year}</span>
                    <ProjectLink project={project} colorClass={textCol} />
                  </div>
                </div>
                <div className="md:col-span-4 hidden md:block">
                  <div className="aspect-[4/3] overflow-hidden opacity-50">
                    <img
                      src="https://images.pexels.com/photos/7611754/pexels-photo-7611754.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    // 06 — Strong split-screen layout
    case 'split-screen':
      return (
        <div className={`${sectionBg} grain`}>
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 md:py-24">
            <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-0 group">
              <div className="flex flex-col justify-center p-6 md:p-12 md:pr-16">
                <ArchiveMeta project={project} metaCol={metaCol} />
                <span className={`block text-[10px] tracking-editorial ${metaCol} mt-3`}>{project.label}</span>
                <h3 className={`font-serif text-4xl md:text-7xl ${textCol} mt-2 mb-6 transition-transform duration-500 group-hover:translate-x-1`}>{project.name}</h3>
                <p className={`text-sm md:text-base ${metaCol} font-light leading-relaxed mb-6`}>{project.description}</p>
                <div className="flex items-center gap-6">
                  <span className={`text-[10px] tracking-editorial ${metaCol}`}>{project.category}</span>
                  <ProjectLink project={project} colorClass={textCol} />
                </div>
              </div>
              <div className="aspect-[4/3] md:aspect-auto md:min-h-[500px]">
                <ProjectImage project={project} className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      );

    // 07 — Minimal clean composition
    case 'minimal':
      return (
        <div className={`${sectionBg} grain`}>
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 md:py-24">
            <div className="reveal max-w-4xl mx-auto text-center group">
              <div className="flex justify-center mb-3">
                <ArchiveMeta project={project} metaCol={metaCol} />
              </div>
              <span className={`text-[10px] tracking-editorial ${metaCol}`}>{project.label}</span>
              <h3 className={`font-serif text-4xl md:text-5xl ${textCol} mt-2 mb-8`}>{project.name}</h3>
              <div className="aspect-[16/9] mb-8">
                <ProjectImage project={project} className="w-full h-full" />
              </div>
              <p className={`text-sm md:text-base ${metaCol} font-light leading-relaxed max-w-lg mx-auto mb-6`}>{project.description}</p>
              <div className="flex items-center justify-center gap-6">
                <span className={`text-[10px] tracking-editorial ${metaCol}`}>{project.category}</span>
                <span className={`text-[10px] ${metaCol} opacity-30`}>·</span>
                <ProjectLink project={project} colorClass={textCol} />
              </div>
            </div>
          </div>
        </div>
      );

    // 08 — Large luxury editorial presentation
    case 'luxury-editorial':
      return (
        <div className={`${sectionBg} grain`}>
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 md:py-24">
            <div className="reveal group">
              <div className="flex items-end justify-between mb-8 md:mb-12">
                <div>
                  <ArchiveMeta project={project} metaCol={metaCol} />
                  <span className={`block text-[10px] tracking-editorial ${metaCol} mt-3`}>{project.label}</span>
                  <h3 className={`font-serif text-5xl md:text-8xl ${textCol} mt-2 italic transition-transform duration-500 group-hover:translate-x-2`}>{project.name}</h3>
                </div>
                <span className={`text-[10px] tracking-editorial ${metaCol} hidden md:block`}>{project.year}</span>
              </div>
              <div className="aspect-[16/9] md:aspect-[2.5/1]">
                <ProjectImage project={project} className="w-full h-full" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                <div className="md:col-span-2">
                  <p className={`text-sm md:text-lg ${metaCol} font-light leading-relaxed`}>{project.description}</p>
                </div>
                <div className="flex flex-col gap-4 md:items-end">
                  <span className={`text-[10px] tracking-editorial ${metaCol}`}>{project.category}</span>
                  <ProjectLink project={project} colorClass={textCol} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default function ProjectShowcase({ projects }: { projects: Project[] }) {
  return (
    <div>
      {projects.map((project) => (
        <ProjectLayout key={project.number} project={project} />
      ))}
    </div>
  );
}

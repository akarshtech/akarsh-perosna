export type ProjectLayout =
  | 'full-width'
  | 'asymmetric-split'
  | 'centered'
  | 'floating-metadata'
  | 'photography-arrangement'
  | 'split-screen'
  | 'minimal'
  | 'luxury-editorial';

export interface Project {
  number: string;
  name: string;
  category: string;
  description: string;
  label: string;
  url: string;
  year: string;
  image: string;
  layout: ProjectLayout;
}

export const projects: Project[] = [
  {
    number: '01',
    name: 'Interior Design Studio',
    category: 'INTERIOR DESIGN / ARCHITECTURE',
    description: 'A refined digital experience for an interior design studio, built around space, material and restraint.',
    label: '01 / INTERIOR',
    url: 'https://interior-design-stud-rof9.bolt.host',
    year: '2026',
    image: 'https://images.pexels.com/photos/15009841/pexels-photo-15009841.jpeg?auto=compress&cs=tinysrgb&w=1600',
    layout: 'full-width',
  },
  {
    number: '02',
    name: 'Aura Salon',
    category: 'BEAUTY / SALON',
    description: 'A polished digital presence designed to make everyday beauty feel considered.',
    label: '02 / AURA',
    url: 'https://aura-salon-website-t-uzh5.bolt.host',
    year: '2026',
    image: 'https://images.pexels.com/photos/13068380/pexels-photo-13068380.jpeg?auto=compress&cs=tinysrgb&w=1600',
    layout: 'asymmetric-split',
  },
  {
    number: '03',
    name: 'IIT Prep Guide',
    category: 'EDUCATION / JEE PREPARATION',
    description: 'A structured digital experience exploring a more focused approach to competitive exam preparation.',
    label: '03 / IIT PREP',
    url: 'https://iit-prep-guide.lovable.app',
    year: '2026',
    image: 'https://images.pexels.com/photos/37397517/pexels-photo-37397517.jpeg?auto=compress&cs=tinysrgb&w=1600',
    layout: 'centered',
  },
  {
    number: '04',
    name: 'Shubhalaxmi Pure Veg',
    category: 'RESTAURANT / HOSPITALITY',
    description: 'A warm digital home for a vegetarian restaurant built around food, familiarity and heritage.',
    label: '04 / SHUBHALAXMI',
    url: 'https://shubhalaxmi-pure-veg-28rf.bolt.host',
    year: '2026',
    image: 'https://images.pexels.com/photos/9738992/pexels-photo-9738992.jpeg?auto=compress&cs=tinysrgb&w=1600',
    layout: 'floating-metadata',
  },
  {
    number: '05',
    name: 'Photography Studio',
    category: 'PHOTOGRAPHY / VISUALS',
    description: 'A visual-first website designed to let the photography take centre stage.',
    label: '05 / FRAME',
    url: 'https://photography-studio-w-dgge.bolt.host',
    year: '2026',
    image: 'https://images.pexels.com/photos/1595238/pexels-photo-1595238.jpeg?auto=compress&cs=tinysrgb&w=1600',
    layout: 'photography-arrangement',
  },
  {
    number: '06',
    name: 'Apex Autocare',
    category: 'AUTOMOTIVE',
    description: 'A premium digital experience for an automotive business where precision is part of the product.',
    label: '06 / APEX',
    url: 'https://apex-autocare-websit-1kap.bolt.host',
    year: '2026',
    image: 'https://images.pexels.com/photos/14231678/pexels-photo-14231678.jpeg?auto=compress&cs=tinysrgb&w=1600',
    layout: 'split-screen',
  },
  {
    number: '07',
    name: 'Aarogya Dental Studio',
    category: 'HEALTHCARE / DENTISTRY',
    description: 'A calm and approachable digital identity for a modern dental studio.',
    label: '07 / AAROGYA',
    url: 'https://aarogya-dental-studi-io0c.bolt.host',
    year: '2026',
    image: 'https://images.pexels.com/photos/305567/pexels-photo-305567.jpeg?auto=compress&cs=tinysrgb&w=1600',
    layout: 'minimal',
  },
  {
    number: '08',
    name: 'Taarini Jewels',
    category: 'JEWELLERY / LUXURY',
    description: 'A restrained luxury experience where the jewellery remains the centre of attention.',
    label: '08 / TAARINI',
    url: 'https://taarini-jewels-luxur-2sjh.bolt.host',
    year: '2026',
    image: 'https://images.pexels.com/photos/30541169/pexels-photo-30541169.jpeg?auto=compress&cs=tinysrgb&w=1600',
    layout: 'luxury-editorial',
  },
];

export interface Experiment {
  number: string;
  name: string;
  description: string;
  status: string;
  annotation: string;
}

export const experiments: Experiment[] = [
  {
    number: '001',
    name: 'AI Interior Designer',
    description: 'An experiment exploring how AI could analyze a room and suggest interior directions and furniture.',
    status: 'PROTOTYPE',
    annotation: 'prototype',
  },
  {
    number: '002',
    name: 'FormulaQuest',
    description: 'An experiment exploring a more engaging way to learn and remember formulas.',
    status: 'IN DEVELOPMENT',
    annotation: 'still figuring this one out',
  },
  {
    number: '003',
    name: 'NeuroAlarm',
    description: 'An experimental concept exploring AI-assisted alarm and productivity ideas.',
    status: 'EXPERIMENT',
    annotation: 'might actually be onto something',
  },
];

export interface BuildLogEntry {
  year: string;
  text: string;
  isLast?: boolean;
}

export const buildLog: BuildLogEntry[] = [
  { year: '2026', text: 'Started building websites.' },
  { year: '2026', text: 'Started experimenting with different business niches.' },
  { year: '2026', text: 'Built websites for restaurants, salons, education, automotive, healthcare, jewellery and more.' },
  { year: '2026', text: 'Started exploring AI-assisted development.' },
  { year: '2026', text: 'Started thinking about digital products.' },
  { year: '2026', text: 'NEXT — BUILDING MORE.', isLast: true },
];

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
}

export const services: ServiceItem[] = [
  {
    number: '01',
    title: 'Websites',
    description: 'Modern websites for businesses, creators and ideas that deserve a stronger digital presence.',
  },
  {
    number: '02',
    title: 'Digital Experiences',
    description: 'Interactive experiences designed around the people actually using them.',
  },
  {
    number: '03',
    title: 'AI + Experiments',
    description: 'Exploring useful ways to combine AI with products, workflows and interfaces.',
  },
];

export interface WhyItem {
  number: string;
  title: string;
  description: string;
}

export const whyItems: WhyItem[] = [
  {
    number: '01',
    title: 'LOOK CREDIBLE',
    description: 'Your website is often the first impression someone gets of your business.',
  },
  {
    number: '02',
    title: 'GET FOUND',
    description: 'Give people one place to discover your services, work, location and contact information.',
  },
  {
    number: '03',
    title: 'GET CHOSEN',
    description: 'Turn visitors into actual enquiries instead of sending everyone to Instagram.',
  },
];

export interface BuildStep {
  number: string;
  title: string;
  description: string;
}

export const buildSteps: BuildStep[] = [
  {
    number: '01',
    title: 'UNDERSTAND',
    description: 'Figure out what the business actually needs.',
  },
  {
    number: '02',
    title: 'DESIGN',
    description: 'Build the visual identity and user experience around that.',
  },
  {
    number: '03',
    title: 'BUILD',
    description: 'Turn the concept into a functional website.',
  },
  {
    number: '04',
    title: 'REFINE',
    description: 'Polish the details, mobile experience, interactions and performance.',
  },
];

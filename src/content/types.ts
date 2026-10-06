export type Locale = 'fr' | 'en';

export interface Project {
  slug: string;
  name: string;
  category: string;
  summary: string;
  context: string;
  contribution: readonly string[];
  technologies: readonly string[];
  outcome: string;
  url?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  contributions: readonly string[];
  technologies: readonly string[];
}

export interface Copy {
  description: string;
  navigation: {
    projects: string;
    expertise: string;
    experience: string;
    contact: string;
  };
  menu: string;
  skip: string;
  hero: {
    label: string;
    heading: readonly [string, string];
    introduction: string;
    contact: string;
    projects: string;
    location: string;
    facts: readonly [string, string, string];
  };
  projects: {
    label: string;
    heading: string;
    intro: string;
    details: string;
    visit: string;
    items: readonly Project[];
  };
  expertise: {
    label: string;
    heading: string;
    items: readonly {
      name: string;
      description: string;
      technologies: readonly string[];
    }[];
  };
  experience: {
    label: string;
    heading: string;
    items: readonly Experience[];
    education: string;
  };
  contact: {
    label: string;
    heading: string;
    description: string;
    email: string;
    copy: string;
    copied: string;
    copyFailed: string;
    cv: string;
    cvNote: string;
  };
  caseStudy: {
    back: string;
    context: string;
    contribution: string;
    outcome: string;
    stack: string;
    related: string;
    confidentiality: string;
  };
  footer: string;
}

import type { Copy } from './types';

export const en = {
  description:
    'Rafael Marques, freelance web developer working with React, TypeScript, Node.js and Python. Interfaces, back offices and APIs. Three years at Thales through SII and two freelance projects.',
  navigation: {
    projects: 'Work',
    expertise: 'Expertise',
    experience: 'Experience',
    contact: 'Contact',
  },
  menu: 'Navigation menu',
  skip: 'Skip to content',
  hero: {
    label: 'Full-stack web developer · Freelance',
    heading: ['Clear interfaces.', 'Solid foundations.'],
    introduction:
      'I build web interfaces and improve APIs. From a new back office to an existing application, I work alongside your team to move your project forward.',
    contact: 'Let’s talk about your project',
    projects: 'Explore my work',
    location: 'Based near Paris · Remote projects',
    facts: [
      '3 years at Thales, through SII',
      '2 freelance projects',
      'From frontend to API',
    ],
  },
  projects: {
    label: '01 / Selected work',
    heading: 'Work you can look into.',
    intro:
      'A personal project and two client engagements, each with a different scope.',
    details: 'Explore the project',
    visit: 'Visit the website',
    items: [
      {
        slug: 'alonelab',
        name: 'AloneLab',
        category: 'Personal project · Showcase website',
        summary:
          'A showcase website for a collection of independent games, with a visual identity inspired by pixel art.',
        context:
          'AloneLab brings together my independent game projects. The website introduces the games, their worlds and where to discover them.',
        contribution: [
          'Building the showcase website and implementing its visual identity.',
          'Organising projects into a section-based navigation.',
          'Adapting the presentation to mobile and desktop screens.',
        ],
        technologies: ['HTML', 'CSS', 'Responsive design'],
        outcome:
          'A public website bringing the projects together and linking to available games.',
        url: 'https://alonelab.com/',
      },
      {
        slug: 'textile',
        name: 'Showcase website & user API',
        category: 'Freelance project · Textile industry',
        summary:
          'A showcase website and improvements to user management and search in the API.',
        context:
          'A full-stack engagement for a textile client, covering its web presence and user management API.',
        contribution: [
          'Building a showcase website.',
          'Improving user management in the API.',
          'Working on user search functionality.',
        ],
        technologies: ['TypeScript', 'Prisma', 'GraphQL'],
        outcome:
          'A completed showcase website and improved user management in the API.',
      },
      {
        slug: 'sondages',
        name: 'Survey back office',
        category: 'Freelance project · Web application',
        summary:
          'A React interface enabling clients to manage survey-related product metrics.',
        context:
          'Building the frontend of a back office for clients to manage the metrics of their survey product.',
        contribution: [
          'Developing the back office in React.',
          'Building interfaces for managing survey-related metrics.',
        ],
        technologies: ['React', 'Frontend development'],
        outcome: 'A client-facing back office for managing survey metrics.',
      },
    ],
  },
  expertise: {
    label: '02 / Expertise',
    heading: 'Support where you need it.',
    items: [
      {
        name: 'Web interfaces',
        description:
          'Management screens, tables, search, filters and forms. Building components and improving existing interfaces.',
        technologies: ['React', 'TypeScript', 'HTML / CSS'],
      },
      {
        name: 'Backend & APIs',
        description:
          'API improvements, data integration, validation and error handling. Connecting the interface to the data it needs.',
        technologies: ['Node.js', 'Python', 'Fastify', 'GraphQL', 'Prisma'],
      },
      {
        name: 'Testing & delivery',
        description:
          'Backend and frontend testing, pipeline improvements and build automation to support the development of your application.',
        technologies: ['GitLab CI/CD', 'Git', 'Docker'],
      },
    ],
  },
  experience: {
    label: '03 / Experience',
    heading: 'Experience built on real projects.',
    items: [
      {
        company: 'Thales, through SII',
        role: 'Full-stack developer',
        period: 'Sep. 2023 — Sep. 2026',
        description: 'A three-year engagement within a development team.',
        contributions: [
          'Developing management screens and modernising React components.',
          'API integration, data validation and error handling.',
          'Improving GitLab CI/CD pipelines for tests and builds.',
        ],
        technologies: ['React', 'Node.js', 'Python', 'GitLab CI/CD'],
      },
      {
        company: 'Independent business',
        role: 'Freelance web developer',
        period: 'Sep. 2022 — Sep. 2023',
        description:
          'Two client projects: a full-stack engagement in the textile industry and a React back office.',
        contributions: [],
        technologies: ['React', 'TypeScript', 'Prisma', 'GraphQL'],
      },
      {
        company: 'OnePoint',
        role: 'Backend developer · Internship',
        period: 'Mar. — Sep. 2022',
        description:
          'Developing an architecture of 5 microservices with TypeScript and Fastify. Backend and frontend testing, bringing test coverage to 70%, and improving the GitLab delivery pipeline.',
        contributions: [],
        technologies: ['TypeScript', 'Fastify', 'GitLab CI/CD'],
      },
    ],
    education:
      'Expert in Information Technology · EPITECH (2017–2022). MSc Computer Science – Data Science · Heriot-Watt University (2020–2021).',
  },
  contact: {
    label: '04 / Contact',
    heading: 'Let’s talk about your next project.',
    description:
      'An application to build, an interface to improve or a team to support? Let’s discuss your needs and the scope of the project.',
    email: 'Email me',
    copy: 'Copy email address',
    copied: 'Email address copied.',
    copyFailed: 'Copying is unavailable. You can use the email link instead.',
    cv: 'Download my CV',
    cvNote: 'PDF · French',
  },
  caseStudy: {
    back: 'All projects',
    context: 'The context',
    contribution: 'My contribution',
    outcome: 'The work delivered',
    stack: 'Skills used',
    related: 'A similar project in mind?',
    confidentiality:
      'This describes the scope of the engagement. The client’s name and data are not published.',
  },
  footer: 'Freelance web developer · Based near Paris',
} satisfies Copy;

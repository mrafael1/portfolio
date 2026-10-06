import type { Copy } from './types';

export const fr = {
  description:
    'Rafael Marques, développeur web freelance React, TypeScript, Node.js et Python. Interfaces, back-offices et API. Trois ans chez Thales via SII, deux missions freelance.',
  navigation: {
    projects: 'Projets',
    expertise: 'Expertise',
    experience: 'Parcours',
    contact: 'Contact',
  },
  menu: 'Menu de navigation',
  skip: 'Aller au contenu',
  hero: {
    label: 'Développeur web full-stack · Freelance',
    heading: ['Des interfaces claires.', 'Des bases solides.'],
    introduction:
      'Je développe vos interfaces web et fais évoluer vos API. De la création d’un back-office à la modernisation d’une application, j’interviens aux côtés de votre équipe.',
    contact: 'Discutons de votre projet',
    projects: 'Voir mes réalisations',
    location: 'Île-de-France · Missions à distance',
    facts: [
      '3 ans chez Thales, via SII',
      '2 missions freelance',
      'Du frontend à l’API',
    ],
  },
  projects: {
    label: '01 / Réalisations',
    heading: 'Du travail concret.',
    intro:
      'Un projet personnel et deux missions clients, avec des périmètres différents.',
    details: 'Découvrir le projet',
    visit: 'Voir le site',
    items: [
      {
        slug: 'alonelab',
        name: 'AloneLab',
        category: 'Projet personnel · Site vitrine',
        summary:
          'Un site vitrine pour présenter un univers de jeux indépendants, avec une identité visuelle inspirée du pixel art.',
        context:
          'AloneLab rassemble mes projets de jeux indépendants. Le site présente les jeux, leur univers et les liens pour les découvrir.',
        contribution: [
          'Réalisation du site vitrine et intégration de son univers graphique.',
          'Organisation des projets dans une navigation par sections.',
          'Adaptation de la présentation aux écrans mobiles et ordinateurs.',
        ],
        technologies: ['HTML', 'CSS', 'Responsive design'],
        outcome:
          'Un site public qui regroupe les projets et donne accès aux jeux disponibles.',
        url: 'https://alonelab.com/',
      },
      {
        slug: 'textile',
        name: 'Site vitrine & API utilisateurs',
        category: 'Mission freelance · Secteur textile',
        summary:
          'Réalisation d’un site vitrine et amélioration de la gestion et de la recherche des utilisateurs dans l’API.',
        context:
          'Mission full-stack pour un client du secteur textile, portant sur sa présence web et la gestion des utilisateurs dans son API.',
        contribution: [
          'Réalisation d’un site vitrine.',
          'Amélioration de la gestion des utilisateurs dans l’API.',
          'Travail sur la recherche des utilisateurs.',
        ],
        technologies: ['TypeScript', 'Prisma', 'GraphQL'],
        outcome:
          'Un site vitrine réalisé et une gestion des utilisateurs améliorée dans l’API.',
      },
      {
        slug: 'sondages',
        name: 'Back-office de sondages',
        category: 'Mission freelance · Application web',
        summary:
          'Une interface React permettant aux clients de gérer les métriques liées aux sondages.',
        context:
          'Création du frontend d’un back-office pour permettre aux clients de gérer les métriques de leur produit de sondage.',
        contribution: [
          'Développement du back-office en React.',
          'Création des interfaces de gestion des métriques liées aux sondages.',
        ],
        technologies: ['React', 'Développement frontend'],
        outcome:
          'Un back-office destiné aux clients pour la gestion de leurs métriques de sondage.',
      },
    ],
  },
  expertise: {
    label: '02 / Expertise',
    heading: 'Le bon renfort, au bon endroit.',
    items: [
      {
        name: 'Interfaces web',
        description:
          'Écrans de gestion, tableaux, recherche, filtres et formulaires. Création de composants et modernisation d’interfaces existantes.',
        technologies: ['React', 'TypeScript', 'HTML / CSS'],
      },
      {
        name: 'Backend & API',
        description:
          'Évolution des API, intégration des données, validation et gestion des erreurs. Un travail qui relie l’interface à ses données.',
        technologies: ['Node.js', 'Python', 'Fastify', 'GraphQL', 'Prisma'],
      },
      {
        name: 'Tests & livraison',
        description:
          'Tests backend et frontend, amélioration des pipelines et automatisation des builds pour accompagner le développement de votre application.',
        technologies: ['GitLab CI/CD', 'Git', 'Docker'],
      },
    ],
  },
  experience: {
    label: '03 / Parcours',
    heading: 'Une expérience de terrain.',
    items: [
      {
        company: 'Thales, via SII',
        role: 'Développeur full-stack',
        period: 'Sept. 2023 — Sept. 2026',
        description:
          'Trois ans de mission au sein d’une équipe de développement.',
        contributions: [
          'Développement d’écrans de gestion et modernisation de composants React.',
          'Intégration des API, validation des données et gestion des erreurs.',
          'Amélioration des pipelines GitLab CI/CD : tests et builds.',
        ],
        technologies: ['React', 'Node.js', 'Python', 'GitLab CI/CD'],
      },
      {
        company: 'Micro-entreprise',
        role: 'Développeur web freelance',
        period: 'Sept. 2022 — Sept. 2023',
        description:
          'Deux missions clients : une intervention full-stack dans le textile et la création d’un back-office React.',
        contributions: [],
        technologies: ['React', 'TypeScript', 'Prisma', 'GraphQL'],
      },
      {
        company: 'OnePoint',
        role: 'Développeur backend · Stage',
        period: 'Mars — Sept. 2022',
        description:
          'Développement d’une architecture de 5 microservices en TypeScript et Fastify. Tests backend et frontend, avec une couverture portée à 70 %, et fiabilisation du pipeline GitLab.',
        contributions: [],
        technologies: ['TypeScript', 'Fastify', 'GitLab CI/CD'],
      },
    ],
    education:
      'Expert en Technologies de l’Information · EPITECH (2017–2022). MSc Computer Science – Data Science · Heriot-Watt University (2020–2021).',
  },
  contact: {
    label: '04 / Contact',
    heading: 'Parlons de votre prochain projet.',
    description:
      'Une application à créer, une interface à faire évoluer, une équipe à renforcer ? Échangeons sur votre besoin et le périmètre de la mission.',
    email: 'M’écrire',
    copy: 'Copier l’adresse e-mail',
    copied: 'Adresse e-mail copiée.',
    copyFailed:
      'La copie est indisponible. Vous pouvez utiliser le lien e-mail.',
    cv: 'Télécharger mon CV',
    cvNote: 'PDF · Français',
  },
  caseStudy: {
    back: 'Toutes les réalisations',
    context: 'Le contexte',
    contribution: 'Mon intervention',
    outcome: 'La réalisation',
    stack: 'Compétences mobilisées',
    related: 'Un projet similaire ?',
    confidentiality:
      'Présentation du périmètre de la mission. Le nom du client et ses données ne sont pas publiés.',
  },
  footer: 'Développeur web freelance · Île-de-France',
} satisfies Copy;

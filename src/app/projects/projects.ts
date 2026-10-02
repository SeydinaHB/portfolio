import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  demo?: string;
  note?: string;
  accounts?: { role: string; email: string; password: string }[];
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects: Project[] = [
    {
      title: 'MicroBank Connect',
      description: 'Application web de banque et de microfinance avec trois rôles (Client, Agent, Gestionnaire) : gestion des clients, des comptes et des transactions, simulation de crédit avec tableau d\'amortissement, workflows d\'approbation et notifications.',
      tags: ['Angular 20', 'TypeScript', 'Tailwind CSS', 'json-server'],
      link: 'https://github.com/SeydinaHB/microbank-connect',
      demo: 'https://microbank-connect-pdzr.vercel.app',
      note: 'Le premier chargement peut prendre environ une minute (serveur de démonstration gratuit). Toutes les données sont fictives.',
      accounts: [
        { role: 'Gestionnaire', email: 'awa.diop@microbank.sn', password: 'password123' },
        { role: 'Agent', email: 'moussa.ndiaye@microbank.sn', password: 'password123' },
        { role: 'Client', email: 'fatou.fall@client.sn', password: 'password123' }
      ]
    },
        {
      title: 'Baba Shop',
      description: 'Site vitrine d\'une boutique de vêtements et de chaussures : catalogue par catégories (ensembles 3 pièces, ensembles 2 pièces, tee-shirts, chaussures), prix affichés et bouton Commander qui ouvre WhatsApp avec un message prérempli pour le produit choisi.',
      tags: ['HTML', 'CSS', 'JAVASCRIPT'],
      link: 'https://github.com/SeydinaHB/baba-shop',
      demo: 'https://baba-shop-site.vercel.app'
    },
    {
      title: 'Gestion de tâches sécurisée',
      description: 'Application full-stack de gestion de tâches avec authentification centralisée via Keycloak, API Node.js/Express et base PostgreSQL, le tout orchestré avec Docker Compose.',
      tags: ['Angular', 'Node.js', 'Express', 'Keycloak', 'PostgreSQL', 'Docker'],
      link: ''
    },
    {
      title: 'API REST de gestion de bibliothèque',
      description: 'API de gestion de livres, auteurs, utilisateurs et emprunts, avec authentification JWT, rôles, règles métier, tests automatisés, documentation Swagger et déploiement Docker avec PostgreSQL.',
      tags: ['Python', 'Flask', 'JWT', 'PostgreSQL', 'Docker', 'pytest'],
      link: 'https://github.com/SeydinaHB/examenpython'
    },
    {
      title: 'Digitalisation d\'une compagnie d\'assurance (Odoo)',
      description: 'Projet intégrateur ERP : déploiement d\'Odoo avec Docker pour une compagnie d\'assurance fictive à Dakar, avec comptabilité SYSCOHADA, TVA à 18 %, achats, RH, stock et droits utilisateurs par rôle.',
      tags: ['Odoo', 'Docker', 'PostgreSQL', 'SYSCOHADA'],
      link: ''
    }
  ];
}
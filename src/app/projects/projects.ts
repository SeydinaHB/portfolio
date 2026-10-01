import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects = [
    {
      title: 'MicroBank Connect',
      description: 'Application web de banque et de microfinance avec trois rôles (Client, Agent, Gestionnaire) : gestion des clients, des comptes et des transactions, simulation de crédit avec tableau d\'amortissement, workflows d\'approbation et notifications.',
      tags: ['Angular 20', 'TypeScript', 'Tailwind CSS', 'json-server'],
      link: 'https://github.com/SeydinaHB/microbank-connect'
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
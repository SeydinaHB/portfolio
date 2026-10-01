import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  categories = [
    { title: 'Front-end', items: ['Angular', 'TypeScript', 'Tailwind CSS', 'HTML / CSS'] },
    { title: 'Back-end', items: ['Python', 'Flask', 'API REST'] },
    { title: 'Bases de données et DevOps', items: ['SQL', 'Administration de bases de données', 'DevOps'] },
    { title: 'Outils et ERP', items: ['Git / GitHub', 'Odoo', 'Keycloak'] },
    { title: 'Comptabilité', items: ['Comptabilité générale'] },
  ];
}
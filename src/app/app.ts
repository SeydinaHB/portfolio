import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { Experience } from './experience/experience';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Skills, Projects, Experience, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
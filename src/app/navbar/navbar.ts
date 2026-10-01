import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  open = signal(false);
  dark = signal(false);

  links = [
    { label: 'À propos', href: '#about' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Projets', href: '#projects' },
    { label: 'Expérience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  constructor() {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem('theme');
    } catch {}
    this.apply(saved === 'dark');
  }

  private apply(isDark: boolean) {
    this.dark.set(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }

  toggleTheme() {
    const next = !this.dark();
    this.apply(next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {}
  }

  toggle() {
    this.open.update(v => !v);
  }

  close() {
    this.open.set(false);
  }
}
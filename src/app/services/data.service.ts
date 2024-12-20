import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  about = {
    name: 'Khalil Al Khalaf',
    Bio: 'software ingenieur',
  };

  education = [
    {
      university: 'Universität Damaskus',
      degree: 'Informatik',
      year: '2022-2021',
    },
  ];

  experience = [
    {
      company: 'Maids.cc',
      role: 'Software entwikler',
      description:
        'Entwicklung von ERP für die Verwaltung aller Unternehmensabläufe und Geschäfte',
      year: 'Jun 2023 - Feb 2024',
    },
  ];

  projects = [
    {
      title: 'maids.cc',
      description:
        'Eingeschrieben in einem großen ERP-Entwicklung wie Feature-Implementierung, Fehlerbehebung und Performance-Monitoring-Verbesserung als tägliche Aufgaben. Erfolgreich gestaltete UI-Seiten unter Verwendung von Angular, Redux, HTML5, CSS3 und JavaScript, was zu visuell ansprechenden und intuitiven Benutzererlebnissen führte.',
      link: 'https://www.maids.cc/',
    },
  ];

  contact = [
    {
      email: 'khalil.aboud.khalaf@outlook.com',
      linkedin: 'https://www.linkedin.com/in/khalil-khalaf-0a6527177/',
      github: 'https://github.com/KHkhalaf/',
    },
  ];

  constructor() {}
}

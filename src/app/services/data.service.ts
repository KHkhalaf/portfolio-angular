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
      degree: 'Abschluss in Informatik',
      year: '2017 - 2022',
    },
    {
      university: 'International Collegiate Programming Contest (ICPC)',
      degree: 'Teilnehmender ( Platz 8 von 45)',
      year: '2018',
    },
    {
      university: 'Coursera & Linkedin learning',
      degree: 'Zahlreiche Zertifikate im bereich Informatik',
      year: '2020 - 2020',
    },
  ];

  experience = [
    {
      company: 'Maids.cc',
      role: 'Software entwikler (remotely)',
      description:
        'Entwicklung von ERP für die Verwaltung aller Unternehmensabläufe und Geschäfte,' +
        ' Unterstützung bei der Entwicklung von Cloud-Anwendungen mit Angular und Java.' +
        'Mitwirkung an Implementierung von Microservices.',
      year: 'Jun 2023 - Feb 2024',
    },
    {
      company: 'Ecomundo',
      role: 'Backend ingenieur (remotely)',
      description:
        'Erstellung und Pflege von APIs in Java unter Verwendung des Spring Boot Frameworks.,' +
        ' Generieren Word-Vorlagen mithilfe der Freemarker-Engine und der zuständigen API für die Zuordnung der Daten' +
        'Einrichten eines lokalen Servers im lokalen Netzwerk durch Bereitstellen der Images für alle Backend Apps mithilfe' +
        'von Docker, um den Frontend-Entwicklern Endpunkte bereitzustellen,wenn die Remote-Server ausgefallen sind.',
      year: 'Feb 2022 - Mai 2023',
    },
    {
      company: 'Flexis',
      role: 'Software ingenieur (vor Ort)',
      description:
        'Erstellen, Verbesserung zahlreicher Websites, Datenbanken von Projekten mit dem Gesundheitsministerium.' +
        ' Bereitstellung von Datenbank und Software auf den Gesundheitsministerium-Servern und Bereitstellung aller' +
        'benötigten Dokumente, z. B. Installationshandbuch, Benutzerhandbuch.',
      year: 'Mar 2021 - Feb 2022',
    },
  ];

  projects = [
    {
      title: 'Portfolio Website',
      description:
        'Eine persönliche Portfolio-Website, die mit Angular und Bootstrap erstellt wurde.',
      link: 'https://khkhalaf.github.io/portfolio-angular/',
    },
    {
      title: 'Maids.cc',
      description:
        'Eingeschrieben in einem großen ERP-Entwicklung wie Feature-Implementierung, Fehlerbehebung und Performance-Monitoring-Verbesserung als tägliche Aufgaben. Erfolgreich gestaltete UI-Seiten unter Verwendung von Angular, Redux, HTML5, CSS3 und JavaScript, was zu visuell ansprechenden und intuitiven Benutzererlebnissen führte.',
      link: 'https://www.maids.cc/',
    },
    {
      title: 'Ecomundo',
      description:
        "providing service in chemical industry offering regulatory services like SDS it's comprehensive solution dedicated to the creation, exploitation, and expert management of Safety Data Sheets ",
      link: 'https://www.ecomundo.eu/',
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

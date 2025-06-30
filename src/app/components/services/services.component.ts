import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
services = [
    {
      title: 'Video Editing',
      description: 'Skilled in creating professional and engaging video content using tools like Adobe Premiere Pro and DaVinci Resolve.',
      icon: 'fas fa-video'
    },
    {
      title: 'Product Advertising',
      description: 'Experienced in developing ad creatives and promotional videos for social media and e-commerce.',
      icon: 'fas fa-bullhorn'
    },
    {
      title: 'Frontend Development (Angular)',
      description: 'Building fast, scalable, and responsive web applications with Angular and modern UI libraries.',
      icon: 'fab fa-angular'
    },
  {
    title: 'AI Tool Integration',
    description: 'Utilizing tools like ChatGPT, DeepSeek, Gemini, Blackbox, and GitHub Copilot to boost development speed and creativity.',
    icon: 'fas fa-robot'  // Or use a custom icon/image if preferred
  },
  {
    title: 'PowerApps Development',
    description: 'Creating mobile and web applications with minimal code using Microsoft PowerApps, enabling rapid business solutions.',
    icon: 'fas fa-mobile-alt'  // or another suitable icon
  },
  {
    title: 'Microsoft 365 (Excel & PowerPoint)',
    description: 'Proficient in creating detailed Excel spreadsheets and engaging PowerPoint presentations to support application documentation and business needs.',
    icon: 'fas fa-file-excel'  // you can also add a powerpoint icon if you want two icons or a custom icon
  },  {
    title: 'GitHub',
    description: 'Managing source code repositories, version control, and collaborative development to ensure smooth project workflows.',
    icon: 'fab fa-github'
  },
  {
    title: 'Jira',
    description: 'Tracking project progress, managing tasks, and coordinating agile workflows to deliver projects on time and within scope.',
    icon: 'fab fa-jira'
  }
  ];
}

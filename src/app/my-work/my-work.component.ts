import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectSampleComponent } from './project-sample/project-sample.component';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [CommonModule, ProjectSampleComponent],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent {


  myProjectList = {
    name: ['Join', 'Sharkie', 'CRM', 'Pokedex'],
    image: ['sharkie.png','sharkie.png','sharkie.png','sharkie.png'],
    tools: ['JavaScript | HTML | CSS','JavaScript | HTML | CSS','JavaScript | HTML | CSS','JavaScript | HTML | CSS'],
    description: ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos exercitationem at distinctio vel eum incidunt consequuntur et dignissimos quaerat. Impedit!','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos exercitationem at distinctio vel eum incidunt consequuntur et dignissimos quaerat. Impedit!','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos exercitationem at distinctio vel eum incidunt consequuntur et dignissimos quaerat. Impedit!','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos exercitationem at distinctio vel eum incidunt consequuntur et dignissimos quaerat. Impedit!']
  }

  myProjects = [
    {
      name: 'Join',
      image: 'sharkie.png',
      tools: 'JavaScript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      link: 'https://github.com/Regige/join'
    },
    {
      name: 'Sharkie',
      image: 'sharkie.png',
      tools: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale',
      link: 'https://github.com/Regige/join'
    },
        {
      name: 'Simple CRM',
      image: 'sharkie.png',
      tools: 'Angular | Firebase',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos exercitationem at distinctio vel eum incidunt consequuntur et dignissimos quaerat. Impedit!',
      link: 'https://github.com/Regige/join'
    },
    {
      name: 'Pokedex',
      image: 'sharkie.png',
      tools: 'JavaScript | HTML | CSS | Api',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos exercitationem at distinctio vel eum incidunt consequuntur et dignissimos quaerat. Impedit!',
      link: 'https://github.com/Regige/join'
    }
  ];
}

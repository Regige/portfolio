import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectSampleComponent } from './project-sample/project-sample.component';
import { InViewDirective } from '../in-view.directive';
import { VisibilityState } from '../in-view.directive';


@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [CommonModule, ProjectSampleComponent, InViewDirective],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent {


  onVisibilityChange(event: VisibilityState, i:number) {
    if (event.view === 'VISIBLE') {
      // Element ist sichtbar, füge Klasse .d-none hinzu
      this.showElement(i);
    } else {
      // Element ist nicht sichtbar, entferne Klasse .d-none
      this.hideElement(i);
    }
  }

  showElement(i:number) {
    // Logik zum Hinzufügen der Klasse .d-none zum Element
    let myProjectImg = document.getElementById(`my-project-img-${i}`);
    let myProjectDescription = document.getElementById(`my-project-description-${i}`);
    if (myProjectImg && myProjectDescription) {
      myProjectImg.classList.add('show');
      myProjectDescription.classList.add('show');
    }
  }

  hideElement(i:number) {
    // Logik zum Entfernen der Klasse .d-none vom Element
    let myProjectImg = document.getElementById(`my-project-img-${i}`);
    let myProjectDescription = document.getElementById(`my-project-description-${i}`);
    if (myProjectImg && myProjectDescription) {
      myProjectImg.classList.remove('show');
      myProjectDescription.classList.remove('show');
    }
  }


  // myProjectList = {
  //   name: ['Join', 'Sharkie', 'CRM', 'Pokedex'],
  //   image: ['sharkie.png','sharkie.png','sharkie.png','sharkie.png'],
  //   tools: ['JavaScript | HTML | CSS','JavaScript | HTML | CSS','JavaScript | HTML | CSS','JavaScript | HTML | CSS'],
  //   description: ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos exercitationem at distinctio vel eum incidunt consequuntur et dignissimos quaerat. Impedit!','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos exercitationem at distinctio vel eum incidunt consequuntur et dignissimos quaerat. Impedit!','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos exercitationem at distinctio vel eum incidunt consequuntur et dignissimos quaerat. Impedit!','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos exercitationem at distinctio vel eum incidunt consequuntur et dignissimos quaerat. Impedit!']
  // }

  myProjects = [
    {
      name: 'Join',
      image: 'join.png',
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
      image: 'simple-crm.png',
      tools: 'Angular | Firebase',
      description: 'A very Simple Customer Relationship Management system working with CRUD functionality.',
      link: 'https://github.com/Regige/join'
    },
    {
      name: 'Pokedex',
      image: 'pokedex.png',
      tools: 'JavaScript | HTML | CSS | Api',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      link: 'https://github.com/Regige/join'
    }
  ];
}

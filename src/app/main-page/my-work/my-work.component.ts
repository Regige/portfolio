import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectSampleComponent } from './project-sample/project-sample.component';
import { InViewDirective } from '../../in-view.directive';
import { VisibilityState } from '../../in-view.directive';


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
      this.showElement(i);
    } else {
      this.hideElement(i);
    }
  }

  showElement(i:number) {
    let myProjectImg = document.getElementById(`my-project-img-${i}`);
    let myProjectDescription = document.getElementById(`my-project-description-${i}`);
    if (myProjectImg && myProjectDescription) {
      myProjectImg.classList.add('show');
      myProjectDescription.classList.add('show');
    }
  }

  hideElement(i:number) {
    let myProjectImg = document.getElementById(`my-project-img-${i}`);
    let myProjectDescription = document.getElementById(`my-project-description-${i}`);
    if (myProjectImg && myProjectDescription) {
      myProjectImg.classList.remove('show');
      myProjectDescription.classList.remove('show');
    }
  }


  myProjects = [
    {
      name: 'Join',
      image: 'join.png',
      tools: 'JavaScript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      link: 'https://regina-gering.com/join/index.html',
      github: 'https://github.com/Regige/join-task-manager',
      githubBackend: '_'
    },
    {
      name: 'Sharkie',
      image: 'sharkie.png',
      tools: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale',
      link: 'https://regina-gering.com/sharkie/index.html',
      github: 'https://github.com/Regige/sharkie-game',
      githubBackend: '_'
    },
    {
      name: 'DABubble',
      image: 'dabubble.png',
      tools: 'Angular | Firebase',
      description: 'DaBubble is a chat messenger application for team communication including file sharing and authentication. It is inspired by Slack.',
      link: 'https://dabubble.regina-gering.com/',
      github: 'https://github.com/Dogan36/DaBubble',
      githubBackend: '_'
    },
    {
      name: 'Videoflix',
      image: 'videoflix.png',
      tools: 'Angular | Django',
      description: 'Videoflix is a video platform to watch videos. Users can register and get access to the content via authentication.',
      link: 'https://videoflix.regina-gering.com',
      github: 'https://github.com/Regige/videoflix_frontend',
      githubBackend: 'https://github.com/Regige/videoflix_backend'
    },
    // {
    //   name: 'Pokedex',
    //   image: 'pokedex.png',
    //   tools: 'JavaScript | HTML | CSS | Api',
    //   description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
    //   link: 'https://regina-gering.com/pokedex/index.html',
    //   github: 'https://github.com/Regige/pokedex'
    // }
  ];
}

import { Component } from '@angular/core';
import { StartSectionComponent } from './start-section/start-section.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { ContactComponent } from './contact/contact.component';
import { ActivatedRoute } from '@angular/router';
import { PathService } from '../path.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [StartSectionComponent, AboutMeComponent, SkillSetComponent, MyWorkComponent, ContactComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  currentPath: string = '/';

  constructor(private route: ActivatedRoute, private pathService: PathService) {}

  
  ngOnInit(): void {
    this.route.url.subscribe(urlSegments => {
      this.currentPath = urlSegments.join('/');
      console.log('it is working', this.currentPath);
    });

    this.pathService.setCurrentPath(this.currentPath);
  }
}

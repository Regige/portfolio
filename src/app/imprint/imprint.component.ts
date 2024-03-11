import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PathService } from '../path.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  currentPath: string = '/';

  constructor(private route: ActivatedRoute, private pathService: PathService) {}

  
  ngOnInit(): void {
    this.route.url.subscribe(urlSegments => {
      this.currentPath = urlSegments.join('/');
      console.log(this.currentPath);
    });

    this.pathService.setCurrentPath(this.currentPath);
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PathService } from '../path.service';

@Component({
  selector: 'app-privacy-police',
  standalone: true,
  imports: [],
  templateUrl: './privacy-police.component.html',
  styleUrl: './privacy-police.component.scss'
})
export class PrivacyPoliceComponent {

  currentPath: string = '/';

  constructor(private route: ActivatedRoute, private pathService: PathService) {}

  ngOnInit(): void {
    this.route.url.subscribe(urlSegments => {
      this.currentPath = urlSegments.join('/');
      // console.log(this.currentPath);
    });

    this.pathService.setCurrentPath(this.currentPath);
  }

}

import { Component } from '@angular/core';
import { InViewDirective } from '../../in-view.directive';
import { VisibilityState } from '../../in-view.directive';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [InViewDirective],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  onVisibilityChange(event: VisibilityState) {
    if (event.view === 'VISIBLE') {
      this.showElement();
    } else {
      this.hideElement();
    }
  }

  showElement() {
    let aboutMeH2 = document.getElementById('about-me-h2');
    let aboutMeText = document.getElementById('about-me-text');
    if (aboutMeText && aboutMeH2) {
      aboutMeH2.classList.add('show');
      aboutMeText.classList.add('show');
    }
  }

  hideElement() {
    let aboutMeH2 = document.getElementById('about-me-h2');
    let aboutMeText = document.getElementById('about-me-text');
    if (aboutMeText && aboutMeH2) {
      aboutMeH2.classList.remove('show');
      aboutMeText.classList.remove('show');
    }
  }

}

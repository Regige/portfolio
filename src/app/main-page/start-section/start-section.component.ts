import { Component } from '@angular/core';
import { InViewDirective } from '../../in-view.directive';
import { VisibilityState } from '../../in-view.directive';

@Component({
  selector: 'app-start-section',
  standalone: true,
  imports: [InViewDirective],
  templateUrl: './start-section.component.html',
  styleUrl: './start-section.component.scss'
})
export class StartSectionComponent {

  onVisibilityChange(event: VisibilityState) {
    if (event.view === 'VISIBLE') {
      this.showElement();
    } else {
      this.hideElement();
    }
  }


  showElement() {
    let startScreenImg = document.getElementById('start-screen-img');
    let startScreenText = document.getElementById('start-screen-text');
    let ctaText = document.getElementById('cta-text');
    if (startScreenImg && startScreenText && ctaText) {
      startScreenImg.classList.add('show');
      startScreenText.classList.add('show');
      ctaText.classList.add('bounceAnimation');
    }
  }

  hideElement() {
    let startScreenImg = document.getElementById('start-screen-img');
    let startScreenText = document.getElementById('start-screen-text');
    let ctaText = document.getElementById('cta-text');
    if (startScreenImg && startScreenText && ctaText) {
      startScreenImg.classList.remove('show');
      startScreenText.classList.remove('show');
      ctaText.classList.remove('bounceAnimation');
    }
  }
}

import { Component } from '@angular/core';
// import { ObserveElementDirective } from '../observe-element.directive';
import { InViewDirective } from '../../in-view.directive';
import { VisibilityState } from '../../in-view.directive';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [InViewDirective],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {

  onVisibilityChange(event: VisibilityState) {
    if (event.view === 'VISIBLE') {
      this.showElement();
    } else {
      this.hideElement();
    }
  }

  showElement() {
    let skillIconContainer = document.getElementById('skill-icon-container');
    if (skillIconContainer) {
      skillIconContainer.classList.add('show');
    }
  }

  hideElement() {
    let skillIconContainer = document.getElementById('skill-icon-container');
    if (skillIconContainer) {
      skillIconContainer.classList.remove('show');
    }
  }
}

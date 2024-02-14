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

  // isIntersecting (status: boolean ) {
  //   // console.log('Element ' + ' is intersecting ' + status)
  // }

  onVisibilityChange(event: VisibilityState) {
    if (event.view === 'VISIBLE') {
      // Element ist sichtbar, füge Klasse .d-none hinzu
      this.showElement();
    } else {
      // Element ist nicht sichtbar, entferne Klasse .d-none
      this.hideElement();
    }
  }

  showElement() {
    // Logik zum Hinzufügen der Klasse .d-none zum Element
    let skillIconContainer = document.getElementById('skill-icon-container');
    if (skillIconContainer) {
      skillIconContainer.classList.add('show');
    }
  }

  hideElement() {
    // Logik zum Entfernen der Klasse .d-none vom Element
    let skillIconContainer = document.getElementById('skill-icon-container');
    if (skillIconContainer) {
      skillIconContainer.classList.remove('show');
    }
  }
}

import { Component } from '@angular/core';
import { InViewDirective } from '../in-view.directive';
import { VisibilityState } from '../in-view.directive';

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
      // Element ist sichtbar, füge Klasse .d-none hinzu
      this.showElement();
    } else {
      // Element ist nicht sichtbar, entferne Klasse .d-none
      this.hideElement();
    }
  }


  // showElement() {
  //   // Logik zum Hinzufügen der Klasse .d-none zum Element
  //   let ctaText = document.getElementById('cta-text');
  //   if (ctaText) {
  //     ctaText.classList.add('show');
  //   }
  // }

  // hideElement() {
  //   // Logik zum Entfernen der Klasse .d-none vom Element
  //   let ctaText = document.getElementById('cta-text');
  //   if (ctaText) {
  //     ctaText.classList.remove('show');
  //   }
  // }


  showElement() {
    // Logik zum Hinzufügen der Klasse .d-none zum Element
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
    // Logik zum Entfernen der Klasse .d-none vom Element
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

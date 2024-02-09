import { Component } from '@angular/core';
import { InViewDirective } from '../in-view.directive';
import { VisibilityState } from '../in-view.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [InViewDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {


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
    let contactText = document.getElementById('contact-text');
    let contactInput = document.getElementById('contact-input');
    if (contactText && contactInput) {
      contactText.classList.add('show');
      contactInput.classList.add('show');
    }
  }

  hideElement() {
    // Logik zum Entfernen der Klasse .d-none vom Element
    let contactText = document.getElementById('contact-text');
    let contactInput = document.getElementById('contact-input');
    if (contactText && contactInput) {
      contactText.classList.remove('show');
      contactInput.classList.remove('show');
    }
  }
}

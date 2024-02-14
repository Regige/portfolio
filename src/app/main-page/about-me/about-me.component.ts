import { Component } from '@angular/core';
// import { ObserveVisibilityDirective } from '../observe-visibility.directive';
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

  // onVisible(element:string) {
  //   console.log('Das Element ist sichtbar: ', element)
  // }

  // _visibilityChangeHandler(event: any) {
  //   //console.log(event);
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
    let aboutMeH2 = document.getElementById('about-me-h2');
    let aboutMeText = document.getElementById('about-me-text');
    if (aboutMeText && aboutMeH2) {
      aboutMeH2.classList.add('show');
      aboutMeText.classList.add('show');
    }
  }

  hideElement() {
    // Logik zum Entfernen der Klasse .d-none vom Element
    let aboutMeH2 = document.getElementById('about-me-h2');
    let aboutMeText = document.getElementById('about-me-text');
    if (aboutMeText && aboutMeH2) {
      aboutMeH2.classList.remove('show');
      aboutMeText.classList.remove('show');
    }
  }

}

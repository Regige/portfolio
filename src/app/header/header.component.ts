import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {

  overlayMenuOpen = false;

  scrollTo(id:string) {
    let section = document.getElementById(id);
    let a = document.getElementById(`${id}-link`);

    if (section) {
      section.scrollIntoView({ block: "center", inline: "center" });
    } else if(a) {
      a.setAttribute('href', `#${id}`);
    } else {
      console.error(`Element with ID '${id}' not found.`);
    }
  }


  toggleMenu() {

    this.overlayMenuOpen = !this.overlayMenuOpen;

    // transform: translateX(0) !important;
  }
}

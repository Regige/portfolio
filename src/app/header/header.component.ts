import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {

  scrollTo(id:string) {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ block: "center", inline: "center" });
    } else {
      console.error(`Element with ID '${id}' not found.`);
    }
  }
}

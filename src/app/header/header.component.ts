import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit {

  isImprintPage: boolean = false;
  overlayMenuOpen = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    //   this.route.url.subscribe(urlSegments => {
    //   console.log(urlSegments);
    //   this.isImprintPage = urlSegments.some(segment => segment.path === 'imprint');
    //   console.log('Is imprint page:', this.isImprintPage);
    // });

    // this.route.url.subscribe(urlSegments => {
    //   this.isImprintPage = this.route.snapshot.url.join('/').includes('imprint');
    // });

    // this.isImprintPage = this.route.snapshot.url.join('/').includes('imprint');

    // this.isImprintPage = this.route.snapshot.url.toString().includes('imprint');

    this.isImprintPage = window.location.href.includes('imprint');
  }

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

    document.getElementById('menu-bar-element')
  }
}

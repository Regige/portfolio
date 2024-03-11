import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { PathService } from '../path.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit {

  overlayMenuOpen = false;
  mainPageDisplayed: boolean = true;

  private pathSubscription?: Subscription;

  constructor(private pathService: PathService) {}


  ngOnInit(): void {
      this.pathSubscription = this.pathService.currentPath$.subscribe((currentPath: string) => {
      this.updateDisplay(currentPath);
    });
  }


  ngOnDestroy(): void {
    if (this.pathSubscription) {
      this.pathSubscription.unsubscribe();
    }
  }


  updateDisplay(currentPath: string) {
    if (currentPath === 'imprint' || currentPath === 'privacy-police') {
      this.mainPageDisplayed = false;
    } else {
      this.mainPageDisplayed = true;
    }
  }


  // scrollTo(id:string) {
  //   let section = document.getElementById(id);
  //   let a = document.getElementById(`${id}-link`);

  //   if (section) {
  //     section.scrollIntoView({ block: "center", inline: "center" });
  //   } else if(a) {
  //     a.setAttribute('href', `#${id}`);
  //   } else {
  //     console.error(`Element with ID '${id}' not found.`);
  //   }
  // }


  toggleMenu() {

    this.overlayMenuOpen = !this.overlayMenuOpen;
  }


  checkOverlay() {
    if(this.overlayMenuOpen) {
      this.toggleMenu()
    }
  }
}

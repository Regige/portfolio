import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dialog-imprint',
  standalone: true,
  imports: [],
  templateUrl: `<dialog #dialog>
      This is a dialog.
      <button (click)="closeDialog()">Close</button>
    </dialog>`,
  styleUrl: './dialog-imprint.component.scss'
})

export class DialogImprintComponent {
  // @ViewChild('dialog') dialog: ElementRef;
  dialog = document.querySelector("dialog");

  openDialog() {
    if(this.dialog) {
      this.dialog.showModal();
    }
    // this.dialog.nativeElement.showModal();
  }

  closeDialog() {
    if(this.dialog) {
      this.dialog.close();
    }
    // this.dialog.nativeElement.close();
  }
}


// './dialog-imprint.component.html'
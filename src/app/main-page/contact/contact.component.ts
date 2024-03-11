import { AfterViewInit, Component, inject, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InViewDirective } from '../../in-view.directive';
import { VisibilityState } from '../../in-view.directive';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, InViewDirective, FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent implements AfterViewInit {

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    }
    
  mailTest = false;

  post = {
    endPoint: 'https://regina-gering.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
        headers: {
          'Content-Type': 'text/plain',
          responseType: 'text',
        },
    },
  };

  inputCheckbox:HTMLInputElement | null = null;
  inputCheckboxState = false;
  messageSubmitted = false;


  ngAfterViewInit() {
    this.inputCheckbox = document.getElementById('privacy-police') as HTMLInputElement | null;
  }


  inputChecked(checkboxPrivacyPolice:HTMLInputElement) {
    if(checkboxPrivacyPolice.checked) {
      this.inputCheckboxState = true; 
    } else {
      this.inputCheckboxState = false; 
    }
  }


  onSubmit(ngForm: NgForm) {
    if(ngForm.submitted) {
      if (ngForm.form.valid && this.inputCheckboxState == true && !this.mailTest) {
        this.http.post(this.post.endPoint, this.post.body(this.contactData))
          .subscribe({
            next: (response) => {
  
              ngForm.resetForm();
              this.inputCheckboxState = false; 
              this.messageSubmitted = true;
              if(this.inputCheckbox != null) {
                this.inputCheckbox.checked = false;
              }
            },
            error: (error) => {
              console.error(error);
            },
            complete: () => console.info('send post complete'),
          });
      } else if (ngForm.form.valid && this.inputCheckboxState == true && this.mailTest) {
          ngForm.resetForm();
          this.inputCheckboxState = false; 
          if(this.inputCheckbox != null) {
            this.inputCheckbox.checked = false;
          }
      }
    }
  }
    

  onVisibilityChange(event: VisibilityState) {
    if (event.view === 'VISIBLE') {
      this.showElement();
    } else {
      this.hideElement();
    }
  }

  showElement() {
    let contactText = document.getElementById('contact-text');
    let contactInput = document.getElementById('contact-input');
    if (contactText && contactInput) {
      contactText.classList.add('show');
      contactInput.classList.add('show');
    }
  }

  hideElement() {
    let contactText = document.getElementById('contact-text');
    let contactInput = document.getElementById('contact-input');
    if (contactText && contactInput) {
      contactText.classList.remove('show');
      contactInput.classList.remove('show');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

// Import Bootstrap JS types
declare var bootstrap: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    const templateParams = {
      from_name: this.contactForm.value.name,
      from_email: this.contactForm.value.email,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message
    };

    emailjs.send(
      'service_n0x487x',         // e.g. 'service_xxx123'
      'template_pvopsmh',        // e.g. 'template_abc456'
      templateParams,
      'pXM1Q1MxfWI_L-sms'          // e.g. 'Tg1Bx...'
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);

        // Show Bootstrap modal
        const modalEl = document.getElementById('successModal');
        if (modalEl) {
          const modal = new bootstrap.Modal(modalEl);
          modal.show();
        }

        this.contactForm.reset();
        this.submitted = false;
      },
      (error) => {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again.');
      }
    );
  }


}

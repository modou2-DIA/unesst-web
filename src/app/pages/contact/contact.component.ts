import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, HttpClientModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})


export class ContactComponent {
  contactForm: FormGroup;
  successMessage = '';
  errorMessage = '';
  showModal = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) return;

    const formData = this.contactForm.value;
    
    this.http.post('https://formspree.io/f/mqabobyr', formData).subscribe({
      next: () => {
        this.successMessage = 'Votre message a été envoyé avec succès !';
        this.errorMessage = '';
        this.showModal = true;
        this.contactForm.reset();
      },
      error: () => {
        this.errorMessage = 'Erreur lors de l\'envoi. Veuillez réessayer.';
        this.successMessage = '';
        this.showModal = true;
      }
    });
  }

  closeModal(): void {
    this.showModal = false;
  }
}
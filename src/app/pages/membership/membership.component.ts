import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-membership',
  imports: [ReactiveFormsModule,CommonModule ],
  templateUrl: './membership.component.html',
  styleUrl: './membership.component.scss'
})
export class MembershipComponent { 
   adhesionForm: FormGroup;
  showModal = false;
  modalMessage = '';
  modalSuccess = true;

  constructor(private fb: FormBuilder) {
    this.adhesionForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['']
    });
  }

  onSubmit() {
    if (this.adhesionForm.valid) {
      // Simule l'envoi des données
      console.log(this.adhesionForm.value);

      // Exemple : opération réussie
      this.modalMessage = 'Votre inscription a été envoyée avec succès. Merci de nous avoir rejoints !';
      this.modalSuccess = true;
      this.showModal = true;

      // Reset form
      this.adhesionForm.reset();
    } else {
      this.modalMessage = 'Veuillez remplir correctement tous les champs requis.';
      this.modalSuccess = false;
      this.showModal = true;
    }
  }

  closeModal() {
    this.showModal = false;
  }

}

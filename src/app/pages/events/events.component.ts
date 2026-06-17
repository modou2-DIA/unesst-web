

import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-events',
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {

    activeModal: string | null = null;


  @ViewChild('carousel') carousel!: ElementRef;

  activites = [
    {
      image: 'assets/images/dinner.JPG',
      type: 'Conférence',
      date: '15 Mars 2024',
      titre: "Dîner d'\u00c9change",
      description: "Une discussion enrichissante sur l'implication de la jeunesse dans le développement de l'Afrique.",
      lieu: 'Marmite Sénegalaise, Tunis',
      modalId: 'modal-dinner',
      icon: 'fas fa-map-marker-alt'
    },
    {
      image: 'assets/images/awards.JPG',
      type: 'Pédagogique',
      date: '09 Août 2024',
      titre: 'Remise des Prix',
      description: 'Célébration des meilleurs étudiants et stagiaires sénégalais pour leurs performances académiques.',
      lieu: 'plus de 10 lauréats',
      modalId: 'modal-remise',
      icon: 'fas fa-users'
    },
    {
      image: 'assets/images/tournoi.JPG',
      type: 'Sportive',
      date: '11 Mars 2024',
      titre: 'Match de Bienvenue',
      description: "Un match spécial organisé en l'honneur de notre nouvel ambassadeur.",
      lieu: 'Terrain bab el assal, Tunis',
      modalId: 'modal-tournoi',
      icon: 'fas fa-map-marker-alt'
    },
    {
      image: 'assets/images/journee-culturelle.jpg',
      type: 'Culturelle',
      date: '25 Décembre 2024',
      titre: 'Journée Culturelle',
      description: 'Le Sénégal à l\'honneur lors de la Journée Culturelle organisée par les stagiaires.',
      lieu: 'Salle des fêtes, Tunis',
      modalId: 'modal-culture',
      icon: 'fas fa-map-marker-alt'
    },
    {
      image: 'assets/images/kogn.JPG',
      type: 'Sportive',
      date: '14 Avril 2024',
      titre: 'Tournoi Kogn Kogn',
      description: 'Un tournoi palpitant réunissant les meilleurs joueurs pour une compétition amicale.',
      lieu: 'Terrain bab elassal Tunis',
      modalId: 'modal-tournoi',
      icon: 'fas fa-map-marker-alt'
    },
  ];

  openModal(id: string) {
    this.activeModal = id;
  }

  closeModal() {
    this.activeModal = null;
  }

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

}

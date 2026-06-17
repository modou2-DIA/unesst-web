import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // <
@Component({
  selector: 'app-news',
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
}) 
export class NewsComponent {

  documents = [
  {
    titre: "Statut de l'UNESST",
    description: "Le statut définit les objectifs, la structure et le fonctionnement de notre association. Il est approuvé par les membres fondateurs et conforme à la législation tunisienne.",
    file: "assets/docs/statuts-unesst.pdf"
  },
  {
    titre: "Règlement Intérieur",
    description: "Le règlement intérieur précise les règles de fonctionnement au quotidien, les droits et devoirs des membres, ainsi que les procédures disciplinaires.",
    file: "assets/docs/Reglement_Interieur_UNESST.pdf"
  },
  {
    titre: "Foire aux questions (FAQ)",
    description: "Cette FAQ a pour but de répondre aux questions les plus fréquentes que se posent les étudiants sénégalais en Tunisie concernant leur installation, leur quotidien et leurs démarches administratives.",
    file: "assets/docs/UNESST_FAQ_Etudiants_Tunisie.pdf"
  },
  {
    titre: "Démarches pour Obtenir une Carte de Séjour",
    description: "La carte de séjour est un document obligatoire pour tout étudiant étranger séjournant en Tunisie pour une durée supérieure à 3 mois.",
    file: "assets/docs/Demarches_Carte_Sejour_Etudiant_Tunisie.pdf"
  }
];

}

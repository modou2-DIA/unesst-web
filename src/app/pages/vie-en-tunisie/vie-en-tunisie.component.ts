
import { Component, ViewChild, ElementRef,AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
declare const google: any; // pour utiliser l'objet `google`
@Component({
  selector: 'app-vie-en-tunisie',
  imports: [CommonModule],
  templateUrl: './vie-en-tunisie.component.html',
  styleUrl: './vie-en-tunisie.component.scss'
})
export class VieEnTunisieComponent { 
  ngAfterViewInit(): void {
    this.initMap();
  }


ngOnInit(): void {
  const script = document.createElement('script');
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDyxgc3AoMBVYbrfp22lONgqBM2MlcYuAM';
  script.async = true;
  script.defer = true;
  script.onload = () => this.initMap();
  document.head.appendChild(script);
}

initMap(): void {
  const location = { lat: 36.841361, lng: 10.243083 };
  const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    zoom: 16,
    center: location,
  });
  new google.maps.Marker({
    position: location,
    map,
    title: "Ambassade du Sénégal en Tunisie",
  });
} 
infos = [
  {
    titre: 'Centres de santé',
    icon: 'fas fa-hospital',
    details: [
      'Hôpital Charles Nicolle (Tunis)',
      'Polyclinique Les Berges (Tunis)',
      'Hôpital Farhat Hached (Sousse)',
      'Hôpital Universitaire Sahloul (Sousse)',
    ]
  },
  {
    titre: 'Logement étudiant',
    icon: 'fas fa-home',
    details: [
      'Résidences universitaires (Cité U)',
      'Colocation entre étudiants',
      'Appartements meublés',
      'Familles d\'accueil',
    ]
  },
  {
    titre: 'Nourriture halal',
    icon: 'fas fa-utensils',
    details: [
      'Restaurants halal à Tunis',
      'Boucheries halal certifiées',
      'Marchés alimentaires',
      'Produits sénégalais disponibles',
    ]
  },
  {
    titre: 'Transport',
    icon: 'fas fa-bus',
    details: [
      'Métro léger (TGM)',
      'Bus et taxis collectifs',
      'Location de voitures',
      'Abonnements étudiants',
    ]
  },
  {
    titre: 'Culture et religion',
    icon: 'fas fa-landmark',
    details: [
      'Mosquées principales',
      'Centres culturels',
      'Associations sénégalaises',
      'Événements communautaires',
    ]
  },
  {
    titre: 'Sécurité',
    icon: 'fas fa-shield-alt',
    details: [
      'Numéros d\'urgence',
      'Conseils de sécurité',
      'Quartiers à privilégier',
      'Assistance consulaire',
    ]
  },
];
@ViewChild('carouselInfos', { static: false }) carouselInfos!: ElementRef;

scrollLeftInfos() {
  this.carouselInfos.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
}

scrollRightInfos() {
  this.carouselInfos.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
}



}

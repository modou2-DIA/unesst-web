import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-bureau',
  imports: [CommonModule],
  templateUrl: './bureau.component.html',
  styleUrl: './bureau.component.scss'
})
export class BureauComponent {
@ViewChild('testimonialContainer', { static: false }) container!: ElementRef; 
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;
  bureau = [
  {
    nom: 'Modou Sonko',
    poste: 'Président',
    description: 'Étudiant en Comptabilité, Master 2',
    photo: 'assets/images/sonko.png',
    facebook: 'https://www.facebook.com/modou.sonko.9828',
    twitter: 'https://x.com/sonkomodou2?s=11',
    instagram: 'https://www.instagram.com/modou_sonko_?igsh=MWowNGF4aDd0aHVndg==',
    linkedin: 'https://www.linkedin.com/in/modou-sonko-986480243'
  },
  {
    nom: 'Modou DIA',
    poste: 'Vice-Président',
    description: 'Ingénieur en Génie Informatique à ENICAR, 2ème année',
    photo: 'assets/images/dia.png',
    facebook: 'https://www.facebook.com/modou.dia.399041',
    twitter: 'https://x.com/modoudia2001?s=21&t=i7W-p16MRV433F5MtWNTgw',
    instagram: 'https://www.instagram.com/modouuu_dia_?igsh=MWQ1a2xjZXdrNG51bA%3D%3D',
    linkedin: 'https://www.linkedin.com/in/modou-dia-1a90b9308'
  },
  {
    nom: 'Fatimatou Bintou Sy',
    poste: 'Secrétaire Générale',
    description: 'Étudiante en génie électrique, 3ème année',
    photo: 'assets/images/fatima.png',
    facebook: 'https://www.facebook.com/fatima.zahra.sy.2025',
    twitter: '',
    instagram: '',
    linkedin: 'https://www.linkedin.com/in/fatoumata-bintou-sy-b1836b256'
  },
  {
    nom: 'Alioune Ndiaye',
    poste: 'Trésorier',
    description: 'Stagiaire en Systèmes intelligents à Ibn Sina, dernière année',
    photo: 'assets/images/alioune.png',
    facebook: 'https://www.facebook.com/profile.php?id=100085816450018',
    twitter: '',
    instagram: '',
    linkedin: ''
  },
  {
    nom: 'Mohamed Diagne THIAM',
    poste: 'Chargé des Sports',
    description: 'Étudiant en Finance à ISG Tunis, 3ème année',
    photo: 'assets/images/thiam.png',
    facebook: 'https://www.facebook.com/bayeediagne',
    twitter: 'https://x.com/bayeediagne?t=UiSnWJWyw9U3ub9eo9tvXA&s=09',
    instagram: 'https://www.instagram.com/mohamed.diagne.thiam/profilecard/?igsh=NGxsN3JiOWN5MGk3',
    linkedin: 'https://www.linkedin.com/in/mohamed-diagne-thiam-249a22278'
  },
  {
    nom: 'Mousthapha Beye',
    poste: 'Chargé Social',
    description: 'Étudiant en Gestion des Ressources Humaines, 3ème année',
    photo: 'assets/images/moustapha.png',
    facebook: 'https://www.facebook.com/share/1G9FX9RzuW/',
    twitter: 'https://x.com/TaphzoTB17?t=I2npJAjXW8hO_oZ3m-pZVw&s=08',
    instagram: 'https://www.instagram.com/taphzotb23?igsh=MWwzbHAyZ2V1aGlpYg==',
    linkedin: ''
  },
  {
    nom: 'Cheikh Tidiane Cissé',
    poste: 'Chargé de Communication',
    description: 'Stagiaire en Conducteur de Bâtiment, 2ème année',
    photo: 'assets/images/cheikh.png',
    facebook: '',
    twitter: '',
    instagram: 'https://www.instagram.com/ct_vitch11?igsh=emZ6NmQwYTg4NXNv&utm_source=qr',
    linkedin: 'https://www.linkedin.com/in/cheikh-cisse-64ba95308'
  },
  {
    nom: 'Modou FALL',
    poste: 'Chargé des Relations extérieures',
    description: 'Étudiant en Electronique, Electrotechnique et Automatique, 2ème année',
    photo: 'assets/images/modouFall.png',
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: ''
  },
  {
    nom: 'Souleymane DIALLO',
    poste: 'Adjoint Trésorier',
    description: 'Stagiaire en Systèmes intelligents à Ibn Sina, 2ème année',
    photo: 'assets/images/souleymane.png',
    facebook: 'https://www.facebook.com/jules.souleymane.399',
    twitter: '',
    instagram: '',
    linkedin: ''
  },
  {
    nom: 'Ousmane Baldé',
    poste: 'Adjoint Communication',
    description: 'Étudiant en Informatique de Gestion, 1ère année',
    photo: 'assets/images/ousmane.png',
    facebook: 'https://www.facebook.com/share/1DGTv42RCX/',
    twitter: '',
    instagram: 'https://www.instagram.com/ousmanebalde7991?igsh=MXcxcXl3bDNnejh2MA==',
    linkedin: ''
  },
  {
    nom: 'Ousmane DIATTA',
    poste: 'Adjoint Chargé des Sports',
    description: 'Étudiant en Finance, 3ème année',
    photo: 'assets/images/diatta.png',
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: ''
  },
  {
    nom: 'Mouhamed Dahirou Kébe',
    poste: 'Chargé de la Commission pédagogique',
    description: 'Stagiaire à Ibn Sina, 2ème année',
    photo: 'assets/images/kebe.png',
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: ''
  },
  {
    nom: 'Aicha BA',
    poste: 'Chargé de la cellule féminine',
    description: 'Étudiant en Electrique, Electrotechnique et Automatique, 3ème année',
    photo: 'assets/images/aicha1.jpg',
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: ''
  }
  
];


  testimonials = [
     {
      nom: 'Serigne Tall',
      promo: 'Promo 2015 - Sciences économiques',
      stars: 5,
      texte: 'Servir la communauté sénégalaise, c’est un acte de patriotisme qui élève autant qu’il engage. Mon parcours au sein de l’UNESST – de Chargé de l’Organisation à Secrétaire Général, puis Président, et enfin Président du Conseil Consultatif – a profondément marqué ma trajectoire personnelle et humaine. Plus qu’un engagement associatif, ce fut une aventure transformatrice. L’UNESST m’a fait sortir de ma zone de confort. Elle m’a appris à prendre la parole en public avec assurance, à interagir avec tout type de personnalité, à croire en moi. Elle a cultivé en moi le sens du don de soi, du service à la communauté et à la nation, sans rien attendre en retour. C’est à travers cette expérience que j’ai découvert l’essence du leadership : écouter avant d’agir, construire avec les autres, porter une vision partagée et rester fidèle aux valeurs d’unité, de solidarité et d’excellence... " ',
      role: 'Vérificateur de compte à SENRE',
      image: 'assets/images/tall.jpg'
    },
    {
      nom: 'Ousmane Fall',
      promo: 'Promo 2017 - Economie Quantitative',
      stars: 5,
      texte: 'Être président de l’UNESST a été l’une des expériences les plus marquantes de ma vie étudiante à Tunis. J’y ai trouvé des défis à relever chaque jour, une incroyable énergie collective et une vraie famille unie par les liens de l’inclusion sociale et de la solidarité. On a appris entres autres à écouter, à decider, à federer malgré les différences mais surtout à douter, à se remettre en question et à grandir. Chaque évènement organisé, chaque difficulté surmontée, chaque sourire partagé m’a rappelé que l’on peut avoir un impact réel sur la société, même à notre échelle. Cette expérience m’a donné confiance en moi et m’a permis de tisser des liens qui transcendent aujourd’hui les frontières. Je resterai toujours reconnaissant envers ceux qui m’ont accompagné durant cette belle aventure."',
      role: 'Data Manager/Analyst - Correspondant Informatique',
      image: 'assets/images/ousmaneFall.jpg'
    },
    {
      nom: 'Khouré SENE',
      promo: 'Promo 2016 - Finance',
      stars: 5,
      texte: '"L’UNESST! Une famille à laquelle j’ai appartenue pendant 6 ans!  L’on sait tous que la vie à l’étranger n’est pas facile, mais grâce aux activités de l’association, j’ai passé les meilleures années de ma vie jusque là avec l’UNESST. Des formations aux journées culturelles, en passant par les réunions et assemblées générales, elle (l’UNESST) a renforcé cette partie de ma personnalité qui me permet aujourd’hui de dégager autant d’assurance, de confiance et maitrise de soi dans le milieu professionnel et la vie de tous les jours. Fière d’avoir fait partie de cette famille! Keep up the good work ! Khouré SENE, Ancienne Trésorière et Vice-Présidente de l’UNESST"',
      role: 'Assistante Administrative - Ansamble Sénégal',
      image: 'assets/images/khoure.jpg'
    },
    {
      nom: 'Fallou Thiare',
      promo: 'Promo 2017 - Doctorant en théologie',
      stars: 5,
      texte: '"L\'UNESST représente une véritable plateforme de mutualisation des compétences et des talents, faisant de l\'adhésion une opportunité de réseautage et d\'acquisition de nouvelles expériences. C\'est pourquoi j\'invite chaleureusement les nouveaux étudiants à rejoindre cette grande famille, qui facilite leur intégration et leur ouvre de nouveaux horizons."',
      role: 'Assistant à l’Institut supérieur des sciences islamiques',
      image: 'assets/images/thiare.jpg'
    },
    {
      nom: 'Saliou SÉYE',
      promo: 'Promo 2017 - Étude Islamique',
      stars: 5,
      texte: '"Grâce à l\'UNESST, j\'ai pu accomplir les démarches d\'inscription en première année, obtenir l\'approbation pour le logement universitaire, m\'adapter à l\'environnement universitaire tunisien et bénéficier d\'opportunités de développement personnel et professionnel."',
      role: 'Doctorat en philosophie islamique',
      image: 'assets/images/seye.jpg'
    },
    {
      nom: 'Fatimatou GUEYE',
      promo: 'Promo 2023-Ingénieure en Modélisation pour l’Industrie et les Services (Modélisation et Data science)',
      stars: 5,
      texte: 'L’UNESST m’a permis grâce à leur accompagnement de m’intégrer facilement à l’Ecole Préparatoire et de m’en sortir. Les activités qu’ils organisent et les webinaires sont très intéressantes et m’ont permis d’élargir mon réseau et de rendre ma vie en Tunisie plus agréable et enrichissante.Ils m’ont mis en contact avec des élèves-ingénieurs qui m’ont guidé et épaulé tout au long de mon cursus en écoles préparatoires et en cycle d’ingénieur. J’ai effectué mon stage PFE dans une entreprise qui m\'a embauché par la suite en tant qu\'ingénieure juste après mon diplôme. ',
      
      role: 'Ingénieure en IA et Big Data chez SFM Technologies (Groupe SFM)',
      image: 'assets/images/fatou.png'
    }
   
  ];

   scrollLeft1() {
    this.carousel.nativeElement.scrollBy({ left: -320, behavior: 'smooth' });
  }

  scrollRight1() {
    this.carousel.nativeElement.scrollBy({ left: 320, behavior: 'smooth' });
  }
  scrollLeft() {
    this.container.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.container.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}




  
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importation des composants des pages
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { EventsComponent } from './pages/events/events.component';
import { NewsComponent } from './pages/news/news.component';
import { MembershipComponent } from './pages/membership/membership.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BureauComponent } from './pages/bureau/bureau.component';
import { VieEnTunisieComponent } from './pages/vie-en-tunisie/vie-en-tunisie.component';
export const routes: Routes = [
  { path: '', component: HomeComponent }, // Page d'accueil
  { path: 'about', component: AboutComponent }, // À propos de l'UNESST
  { path: 'events', component: EventsComponent }, // Événements
  { path: 'news', component: NewsComponent }, // Actualités
  { path: 'membership', component: MembershipComponent }, // Adhésion
  { path: 'contact', component: ContactComponent }, // Contact 
  { path: 'bureau', component: BureauComponent }, // Bureau
  { path: 'vie', component: VieEnTunisieComponent }, // VieEnTunisieComponent
  { path: '**', component: NotFoundComponent } // Page 404
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

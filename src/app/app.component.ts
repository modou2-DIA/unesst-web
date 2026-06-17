import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { HeaderComponent } from './components/header/header.component'; 
import { FooterComponent } from './components/footer/footer.component'; 
import { TestComponent } from './test/test.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'unesst-web';
  constructor(private router: Router) {}

  // Méthode pour fermer le menu de navigation 

  closeNavbar(): void {
    const navbarToggler = document.getElementById('navbarToggler');
    const navbarCollapse = document.getElementById('mainNavbar');

    if (navbarToggler && navbarCollapse) {
      // Fermer le menu en retirant la classe 'show'
      navbarCollapse.classList.remove('show');
      // Mettre à jour l'état du bouton toggler
      navbarToggler.setAttribute('aria-expanded', 'false');
    }
  }
}

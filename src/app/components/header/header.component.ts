import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router) {}
  showDropdown = false; 
  private hideTimeout: any;

  onMouseEnter() {
    clearTimeout(this.hideTimeout); // Empêche de cacher trop tôt
    this.showDropdown = true;
  }

  onMouseLeave() {
    this.hideTimeout = setTimeout(() => {
      this.showDropdown = false;
    }, 250); // Laisse 250ms avant de fermer
  }
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
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}

import { Component, HostListener, AfterViewInit } from '@angular/core';
import { BureauComponent } from "../bureau/bureau.component";
import { EventsComponent } from "../events/events.component";
import { AboutComponent } from "../about/about.component";
import { NewsComponent } from "../news/news.component";
import { VieEnTunisieComponent } from '../vie-en-tunisie/vie-en-tunisie.component';
import { ContactComponent } from "../contact/contact.component";
@Component({
  selector: 'app-home',
  imports: [BureauComponent, EventsComponent, AboutComponent, NewsComponent, VieEnTunisieComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  ngAfterViewInit() {
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
      if (window.scrollY > 300) {
        backToTop.style.display = 'block';
      } else {
        backToTop.style.display = 'none';
      }
    }
  }
  
}

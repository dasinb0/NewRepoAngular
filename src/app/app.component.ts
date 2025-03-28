import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent,  TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'newPortfolio';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Para Google Analytics
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'page_view', { page_path: event.urlAfterRedirects });
        }
        
        // Para Google Tag Manager
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'pageview',
            page: {
              path: event.urlAfterRedirects
            }
          });
        }
      }
    });
  }
}
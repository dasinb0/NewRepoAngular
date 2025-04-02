import { CommonModule } from '@angular/common';import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, TranslateModule, ThemeToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  menuItems = {
    home: '',
    about: '',
    experience: '',
    services: '',
    contact: ''
  };

  constructor(
    public languageService: LanguageService,
    private translateService: TranslateService
  ) {}
  
  ngOnInit() {
    // Cargar traducciones iniciales
    this.updateTranslations();
    
    // Suscribirse a cambios de idioma
    this.translateService.onLangChange.subscribe(() => {
      this.updateTranslations();
    });
  }
  
  updateTranslations() {
    this.translateService.get([
      'MENU.HOME',
      'MENU.ABOUT',
      'MENU.EXPERIENCE',
      'MENU.SERVICES',
      'MENU.CONTACT'
    ]).subscribe(translations => {
      this.menuItems = {
        home: translations['MENU.HOME'],
        about: translations['MENU.ABOUT'],
        experience: translations['MENU.EXPERIENCE'],
        services: translations['MENU.SERVICES'],
        contact: translations['MENU.CONTACT']
      };
    });
  }
  
  toggleLanguage() {
    const currentLang = this.languageService.getCurrentLanguage();
    this.languageService.changeLanguage(currentLang === 'es' ? 'en' : 'es');
  }
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
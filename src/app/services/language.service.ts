import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(private translate: TranslateService) {
    translate.addLangs(['es', 'en']);
    translate.setDefaultLang('es');
    
    // Recuperar preferencia guardada
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && ['es', 'en'].includes(savedLang)) {
      translate.use(savedLang);
    }
  }
  
  changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('preferredLanguage', lang);
  }
  
  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }
}
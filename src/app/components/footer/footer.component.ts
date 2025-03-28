import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  currentYear: number = 0;
  footerTranslations = {
    devTitle: '',
    specialization: '',
    quickLinks: '',
    contact: '',
    location: '',
    socialNetworks: '',
    rights: '',
    designedWith: '',
    andAngular: ''
  };

  constructor(
    private translateService: TranslateService,
    public languageService: LanguageService
  ) {}

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
    this.updateTranslations();
    
    this.translateService.onLangChange.subscribe(() => {
      this.updateTranslations();
    });
  }

  updateTranslations() {
    this.translateService.get([
      'FOOTER.DEV_TITLE',
      'FOOTER.SPECIALIZATION',
      'FOOTER.QUICK_LINKS',
      'FOOTER.CONTACT',
      'FOOTER.LOCATION',
      'FOOTER.SOCIAL_NETWORKS',
      'FOOTER.RIGHTS',
      'FOOTER.DESIGNED_WITH',
      'FOOTER.AND_ANGULAR'
    ]).subscribe(translations => {
      this.footerTranslations = {
        devTitle: translations['FOOTER.DEV_TITLE'],
        specialization: translations['FOOTER.SPECIALIZATION'],
        quickLinks: translations['FOOTER.QUICK_LINKS'],
        contact: translations['FOOTER.CONTACT'],
        location: translations['FOOTER.LOCATION'],
        socialNetworks: translations['FOOTER.SOCIAL_NETWORKS'],
        rights: translations['FOOTER.RIGHTS'],
        designedWith: translations['FOOTER.DESIGNED_WITH'],
        andAngular: translations['FOOTER.AND_ANGULAR']
      };
    });
  }
}

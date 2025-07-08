import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, TranslateModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  aboutTranslations = {
    title: '',
    whoAmI: '',
    introParagraph: '',
    experienceParagraph: '',
    name: '',
    email: '',
    phone: '',
    location: '',
    locationValue: '',
    availability: '',
    availabilityValue: '',
    downloadCV: '',
    contactMe: '',
    skillsTitle: '',
    frontend: '',
    backend: '',
    data: '',
    educationTitle: '',
    education1Period: '',
    education1Title: '',
    education1Institution: '',
    education1Description: '',
    education2Period: '',
    education2Title: '',
    education2Institution: '',
    education2Description: '',
    education3Period: '',
    education3Title: '',
    education3Institution: '',
    education3Description: ''
  };

  constructor(
    private translateService: TranslateService,
    public languageService: LanguageService,
  ) {}

  ngOnInit() {
    this.updateTranslations();
    
    this.translateService.onLangChange.subscribe(() => {
      this.updateTranslations();
    });
  }

  updateTranslations() {
    this.translateService.get([
      'ABOUT.TITLE',
      'ABOUT.WHO_AM_I',
      'ABOUT.INTRO_PARAGRAPH',
      'ABOUT.EXPERIENCE_PARAGRAPH',
      'ABOUT.NAME',
      'ABOUT.EMAIL',
      'ABOUT.PHONE',
      'ABOUT.LOCATION',
      'ABOUT.LOCATION_VALUE',
      'ABOUT.AVAILABILITY',
      'ABOUT.AVAILABILITY_VALUE',
      'ABOUT.DOWNLOAD_CV',
      'ABOUT.CONTACT_ME',
      'ABOUT.SKILLS_TITLE',
      'ABOUT.FRONTEND',
      'ABOUT.BACKEND',
      'ABOUT.DATA',
      'ABOUT.EDUCATION_TITLE',
      'ABOUT.EDUCATION1_PERIOD',
      'ABOUT.EDUCATION1_TITLE',
      'ABOUT.EDUCATION1_INSTITUTION',
      'ABOUT.EDUCATION1_DESCRIPTION',
      'ABOUT.EDUCATION2_PERIOD',
      'ABOUT.EDUCATION2_TITLE',
      'ABOUT.EDUCATION2_INSTITUTION',
      'ABOUT.EDUCATION2_DESCRIPTION',
      'ABOUT.EDUCATION3_PERIOD',
      'ABOUT.EDUCATION3_TITLE',
      'ABOUT.EDUCATION3_INSTITUTION',
      'ABOUT.EDUCATION3_DESCRIPTION'
    ]).subscribe(translations => {
      this.aboutTranslations = {
        title: translations['ABOUT.TITLE'],
        whoAmI: translations['ABOUT.WHO_AM_I'],
        introParagraph: translations['ABOUT.INTRO_PARAGRAPH'],
        experienceParagraph: translations['ABOUT.EXPERIENCE_PARAGRAPH'],
        name: translations['ABOUT.NAME'],
        email: translations['ABOUT.EMAIL'],
        phone: translations['ABOUT.PHONE'],
        location: translations['ABOUT.LOCATION'],
        locationValue: translations['ABOUT.LOCATION_VALUE'],
        availability: translations['ABOUT.AVAILABILITY'],
        availabilityValue: translations['ABOUT.AVAILABILITY_VALUE'],
        downloadCV: translations['ABOUT.DOWNLOAD_CV'],
        contactMe: translations['ABOUT.CONTACT_ME'],
        skillsTitle: translations['ABOUT.SKILLS_TITLE'],
        frontend: translations['ABOUT.FRONTEND'],
        backend: translations['ABOUT.BACKEND'],
        data: translations['ABOUT.DATA'],
        educationTitle: translations['ABOUT.EDUCATION_TITLE'],
        education1Period: translations['ABOUT.EDUCATION1_PERIOD'],
        education1Title: translations['ABOUT.EDUCATION1_TITLE'],
        education1Institution: translations['ABOUT.EDUCATION1_INSTITUTION'],
        education1Description: translations['ABOUT.EDUCATION1_DESCRIPTION'],
        education2Period: translations['ABOUT.EDUCATION2_PERIOD'],
        education2Title: translations['ABOUT.EDUCATION2_TITLE'],
        education2Institution: translations['ABOUT.EDUCATION2_INSTITUTION'],
        education2Description: translations['ABOUT.EDUCATION2_DESCRIPTION'],
        education3Period: translations['ABOUT.EDUCATION3_PERIOD'],
        education3Title: translations['ABOUT.EDUCATION3_TITLE'],
        education3Institution: translations['ABOUT.EDUCATION3_INSTITUTION'],
        education3Description: translations['ABOUT.EDUCATION3_DESCRIPTION']
      };
    });
  }

  // Método para obtener la ruta del CV según el idioma actual
  getCvPath(): string {
    return this.languageService.getCurrentLanguage() === 'es' 
      ? 'assets/archivos/CVv.pdf' 
      : 'assets/archivos/CVen.pdf';
  }
}
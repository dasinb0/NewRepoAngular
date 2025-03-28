import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, TranslateModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  homeTranslations = {
    hello: '',
    fullstackDev: '',
    specialization: '',
    contactMe: '',
    aboutMe: '',
    skillsTitle: '',
    // Habilidades
    angularTitle: '',
    angularDesc: '',
    javascriptTitle: '',
    javascriptDesc: '',
    cssTitle: '',
    cssDesc: '',
    responsiveTitle: '',
    responsiveDesc: '',
    // Proyectos
    featuredProjects: '',
    project1Title: '',
    project1Desc: '',
    project2Title: '',
    project2Desc: '',
    viewDemo: '',
    code: '',
    viewAllProjects: ''
  };

  constructor(
    private translateService: TranslateService,
    public languageService: LanguageService
  ) {}

  ngOnInit() {
    this.updateTranslations();
    
    this.translateService.onLangChange.subscribe(() => {
      this.updateTranslations();
    });
  }

  updateTranslations() {
    this.translateService.get([
      'HOME.HELLO',
      'HOME.FULLSTACK_DEV',
      'HOME.SPECIALIZATION',
      'HOME.CONTACT_ME',
      'HOME.ABOUT_ME',
      'HOME.SKILLS_TITLE',
      // Habilidades
      'HOME.ANGULAR_TITLE',
      'HOME.ANGULAR_DESC',
      'HOME.JAVASCRIPT_TITLE',
      'HOME.JAVASCRIPT_DESC',
      'HOME.CSS_TITLE',
      'HOME.CSS_DESC',
      'HOME.RESPONSIVE_TITLE',
      'HOME.RESPONSIVE_DESC',
      // Proyectos
      'HOME.FEATURED_PROJECTS',
      'HOME.PROJECT1_TITLE',
      'HOME.PROJECT1_DESC',
      'HOME.PROJECT2_TITLE',
      'HOME.PROJECT2_DESC',
      'HOME.VIEW_DEMO',
      'HOME.CODE',
      'HOME.VIEW_ALL_PROJECTS'
    ]).subscribe(translations => {
      this.homeTranslations = {
        hello: translations['HOME.HELLO'],
        fullstackDev: translations['HOME.FULLSTACK_DEV'],
        specialization: translations['HOME.SPECIALIZATION'],
        contactMe: translations['HOME.CONTACT_ME'],
        aboutMe: translations['HOME.ABOUT_ME'],
        skillsTitle: translations['HOME.SKILLS_TITLE'],
        // Habilidades
        angularTitle: translations['HOME.ANGULAR_TITLE'],
        angularDesc: translations['HOME.ANGULAR_DESC'],
        javascriptTitle: translations['HOME.JAVASCRIPT_TITLE'],
        javascriptDesc: translations['HOME.JAVASCRIPT_DESC'],
        cssTitle: translations['HOME.CSS_TITLE'],
        cssDesc: translations['HOME.CSS_DESC'],
        responsiveTitle: translations['HOME.RESPONSIVE_TITLE'],
        responsiveDesc: translations['HOME.RESPONSIVE_DESC'],
        // Proyectos
        featuredProjects: translations['HOME.FEATURED_PROJECTS'],
        project1Title: translations['HOME.PROJECT1_TITLE'],
        project1Desc: translations['HOME.PROJECT1_DESC'],
        project2Title: translations['HOME.PROJECT2_TITLE'],
        project2Desc: translations['HOME.PROJECT2_DESC'],
        viewDemo: translations['HOME.VIEW_DEMO'],
        code: translations['HOME.CODE'],
        viewAllProjects: translations['HOME.VIEW_ALL_PROJECTS']
      };
    });
  }
}
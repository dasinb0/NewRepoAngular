import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RouterLink, TranslateModule, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  experienceTranslations = {
    pageTitle: '',
    breadcrumbExperience: '',
    workExperience: '',
    // Experiencia 1
    job1Title: '',
    job1Company: '',
    job1Period: '',
    job1Description: '',
    job1Responsibilities: [],
    // Experiencia 2
    job2Title: '',
    job2Company: '',
    job2Period: '',
    job2Description: '',
    job2Responsibilities: [],
    // Experiencia 3
    job3Title: '',
    job3Company: '',
    job3Period: '',
    job3Description: '',
    job3Responsibilities: [],
     // Experiencia 4
    job4Title: '',
    job4Company: '',
    job4Period: '',
    job4Description: '',
    job4Responsibilities: [],
    // Proyectos
    projectsTitle: '',
    project1Title: '',
    project1Description: '',
    project2Title: '',
    project2Description: '',
    project3Title: '',
    project3Description: '',
    project4Title: '',
    project4Description: '',
    viewProject: '',
    viewCode: ''
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
      'EXPERIENCE.PAGE_TITLE',
      'EXPERIENCE.BREADCRUMB_EXPERIENCE',
      'EXPERIENCE.WORK_EXPERIENCE',
      // Experiencia 1
      'EXPERIENCE.JOB1_TITLE',
      'EXPERIENCE.JOB1_COMPANY',
      'EXPERIENCE.JOB1_PERIOD',
      'EXPERIENCE.JOB1_DESCRIPTION',
      'EXPERIENCE.JOB1_RESPONSIBILITIES',
      // Experiencia 2
      'EXPERIENCE.JOB2_TITLE',
      'EXPERIENCE.JOB2_COMPANY',
      'EXPERIENCE.JOB2_PERIOD',
      'EXPERIENCE.JOB2_DESCRIPTION',
      'EXPERIENCE.JOB2_RESPONSIBILITIES',
      // Experiencia 3
      'EXPERIENCE.JOB3_TITLE',
      'EXPERIENCE.JOB3_COMPANY',
      'EXPERIENCE.JOB3_PERIOD',
      'EXPERIENCE.JOB3_DESCRIPTION',
      'EXPERIENCE.JOB3_RESPONSIBILITIES',
       // Experiencia 4
      'EXPERIENCE.JOB4_TITLE',
      'EXPERIENCE.JOB4_COMPANY',
      'EXPERIENCE.JOB4_PERIOD',
      'EXPERIENCE.JOB4_DESCRIPTION',
      'EXPERIENCE.JOB4_RESPONSIBILITIES',
      // Proyectos
      'EXPERIENCE.PROJECTS_TITLE',
      'EXPERIENCE.PROJECT1_TITLE',
      'EXPERIENCE.PROJECT1_DESCRIPTION',
      'EXPERIENCE.PROJECT2_TITLE',
      'EXPERIENCE.PROJECT2_DESCRIPTION',
      'EXPERIENCE.PROJECT3_TITLE',
      'EXPERIENCE.PROJECT3_DESCRIPTION',
      'EXPERIENCE.PROJECT4_TITLE',
      'EXPERIENCE.PROJECT4_DESCRIPTION',
      'EXPERIENCE.VIEW_PROJECT',
      'EXPERIENCE.VIEW_CODE'
    ]).subscribe(translations => {
      this.experienceTranslations = {
        pageTitle: translations['EXPERIENCE.PAGE_TITLE'],
        breadcrumbExperience: translations['EXPERIENCE.BREADCRUMB_EXPERIENCE'],
        workExperience: translations['EXPERIENCE.WORK_EXPERIENCE'],
        // Experiencia 1
        job1Title: translations['EXPERIENCE.JOB1_TITLE'],
        job1Company: translations['EXPERIENCE.JOB1_COMPANY'],
        job1Period: translations['EXPERIENCE.JOB1_PERIOD'],
        job1Description: translations['EXPERIENCE.JOB1_DESCRIPTION'],
        job1Responsibilities: this.translateService.instant('EXPERIENCE.JOB1_RESPONSIBILITIES').split('|'),
        // Experiencia 2
        job2Title: translations['EXPERIENCE.JOB2_TITLE'],
        job2Company: translations['EXPERIENCE.JOB2_COMPANY'],
        job2Period: translations['EXPERIENCE.JOB2_PERIOD'],
        job2Description: translations['EXPERIENCE.JOB2_DESCRIPTION'],
        job2Responsibilities: this.translateService.instant('EXPERIENCE.JOB2_RESPONSIBILITIES').split('|'),
        // Experiencia 3
        job3Title: translations['EXPERIENCE.JOB3_TITLE'],
        job3Company: translations['EXPERIENCE.JOB3_COMPANY'],
        job3Period: translations['EXPERIENCE.JOB3_PERIOD'],
        job3Description: translations['EXPERIENCE.JOB3_DESCRIPTION'],
        job3Responsibilities: this.translateService.instant('EXPERIENCE.JOB3_RESPONSIBILITIES').split('|'),
         // Experiencia 4
        job4Title: translations['EXPERIENCE.JOB4_TITLE'],
        job4Company: translations['EXPERIENCE.JOB4_COMPANY'],
        job4Period: translations['EXPERIENCE.JOB4_PERIOD'],
        job4Description: translations['EXPERIENCE.JOB4_DESCRIPTION'],
        job4Responsibilities: this.translateService.instant('EXPERIENCE.JOB4_RESPONSIBILITIES').split('|'),
        // Proyectos
        projectsTitle: translations['EXPERIENCE.PROJECTS_TITLE'],
        project1Title: translations['EXPERIENCE.PROJECT1_TITLE'],
        project1Description: translations['EXPERIENCE.PROJECT1_DESCRIPTION'],
        project2Title: translations['EXPERIENCE.PROJECT2_TITLE'],
        project2Description: translations['EXPERIENCE.PROJECT2_DESCRIPTION'],
        project3Title: translations['EXPERIENCE.PROJECT3_TITLE'],
        project3Description: translations['EXPERIENCE.PROJECT3_DESCRIPTION'],
        project4Title: translations['EXPERIENCE.PROJECT4_TITLE'],
        project4Description: translations['EXPERIENCE.PROJECT4_DESCRIPTION'],
        viewProject: translations['EXPERIENCE.VIEW_PROJECT'],
        viewCode: translations['EXPERIENCE.VIEW_CODE']
      };
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button'
import { ModalComponent } from '../../components/modal/modal.component';


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RouterLink, TranslateModule, CommonModule, MatDialogModule, MatIconModule, MatTooltipModule, MatButtonModule],
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
      // Experiencia 5
    job5Title: '',
    job5Company: '',
    job5Period: '',
    job5Description: '',
    job5Responsibilities: [],
    // Proyectos
    projectsTitle: '',
    project1Title: '',
    project1Description: '',
    project1Summary: '',
    project2Title: '',
    project2Description: '',
    project2Summary: '',
    project3Title: '',
    project3Description: '',
    project3Summary: '',
    project4Title: '',
    project4Description: '',
    project4Summary: '',
    project5Title: '',
    project5Description: '',
    project5Summary: '',
    viewProject: '',
    viewCode: ''
  };

  constructor(
    private translateService: TranslateService,
    public languageService: LanguageService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.updateTranslations();
    
    this.translateService.onLangChange.subscribe(() => {
      this.updateTranslations();
    });
  }

openModal(projectId: number) {
  const projects = [
    {
      titleKey: 'EXPERIENCE.PROJECT1_TITLE',
      summaryKey: 'EXPERIENCE.PROJECT1_SUMMARY',
      demo: 'https://portal.hospitaldeclinicas.uba.ar/#/login',
      repo: 'https://github.com/dasinb0'
    },
    {
      titleKey: 'EXPERIENCE.PROJECT2_TITLE',
      summaryKey: 'EXPERIENCE.PROJECT2_SUMMARY',
      demo: 'https://www.telepagos.com.ar/',
      repo: 'https://github.com/dasinb0'
    },
    {
      titleKey: 'EXPERIENCE.PROJECT3_TITLE',
      summaryKey: 'EXPERIENCE.PROJECT3_SUMMARY',
      demo: 'https://drive.google.com/file/d/1c6hzMDo_rHp8HJjmDZvt-y86CXEG1oXM/view',
      repo: 'https://github.com/dasinb0/monorepo-Angular'
    },
    {
      titleKey: 'EXPERIENCE.PROJECT4_TITLE',
      summaryKey: 'EXPERIENCE.PROJECT4_SUMMARY',
      demo: 'https://drive.google.com/file/d/1MXMM1uhNDqCZW1piV28eZO4f1ueahZ-N/view',
      repo: 'https://github.com/dasinb0/EcommerceMpa'
    },
    {
      titleKey: 'EXPERIENCE.PROJECT5_TITLE',
      summaryKey: 'EXPERIENCE.PROJECT5_SUMMARY',
      demo: 'https://drive.google.com/file/d/1DzcIjBTVf8QDlgvRlhn_nxr684BQaxOA/view?usp=drive_link',
      repo: 'https://github.com/dasinb0'
    }
  ];

  const isMobile = window.innerWidth <= 768;

  this.dialog.open(ModalComponent, {
    data: projects[projectId],
    width: isMobile ? '95vw' : '500px',
    maxWidth: '95vw',
    maxHeight: isMobile ? '90vh' : '80vh',
    hasBackdrop: true,
    disableClose: false,
    autoFocus: false,
    restoreFocus: false,
    panelClass: 'custom-modal-panel',
    position: isMobile ? { top: '5vh' } : undefined
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
       // Experiencia 5
      'EXPERIENCE.JOB5_TITLE',
      'EXPERIENCE.JOB5_COMPANY',
      'EXPERIENCE.JOB5_PERIOD',
      'EXPERIENCE.JOB5_DESCRIPTION',
      'EXPERIENCE.JOB5_RESPONSIBILITIES',
      // Proyectos
      'EXPERIENCE.PROJECTS_TITLE',
      'EXPERIENCE.PROJECT1_TITLE',
      'EXPERIENCE.PROJECT1_DESCRIPTION',
      'EXPERIENCE.PROJECT1_SUMMARY',
      'EXPERIENCE.PROJECT2_TITLE',
      'EXPERIENCE.PROJECT2_DESCRIPTION',
      'EXPERIENCE.PROJECT2_SUMMARY',
      'EXPERIENCE.PROJECT3_TITLE',
      'EXPERIENCE.PROJECT3_DESCRIPTION',
      'EXPERIENCE.PROJECT3_SUMMARY',
      'EXPERIENCE.PROJECT4_TITLE',
      'EXPERIENCE.PROJECT4_DESCRIPTION',
      'EXPERIENCE.PROJECT4_SUMMARY',
      'EXPERIENCE.PROJECT5_TITLE',
      'EXPERIENCE.PROJECT5_DESCRIPTION',
      'EXPERIENCE.PROJECT5_SUMMARY',
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
         // Experiencia 5
        job5Title: translations['EXPERIENCE.JOB5_TITLE'],
        job5Company: translations['EXPERIENCE.JOB5_COMPANY'],
        job5Period: translations['EXPERIENCE.JOB5_PERIOD'],
        job5Description: translations['EXPERIENCE.JOB5_DESCRIPTION'],
        job5Responsibilities: this.translateService.instant('EXPERIENCE.JOB5_RESPONSIBILITIES').split('|'),
        // Proyectos
        projectsTitle: translations['EXPERIENCE.PROJECTS_TITLE'],
        project1Title: translations['EXPERIENCE.PROJECT1_TITLE'],
        project1Description: translations['EXPERIENCE.PROJECT1_DESCRIPTION'],
        project1Summary: translations['EXPERIENCE.PROJECT1_SUMMARY'],
        project2Title: translations['EXPERIENCE.PROJECT2_TITLE'],
        project2Description: translations['EXPERIENCE.PROJECT2_DESCRIPTION'],
        project2Summary: translations['EXPERIENCE.PROJECT2_SUMMARY'],
        project3Title: translations['EXPERIENCE.PROJECT3_TITLE'],
        project3Description: translations['EXPERIENCE.PROJECT3_DESCRIPTION'],
        project3Summary: translations['EXPERIENCE.PROJECT3_SUMMARY'],
        project4Title: translations['EXPERIENCE.PROJECT4_TITLE'],
        project4Description: translations['EXPERIENCE.PROJECT4_DESCRIPTION'],
        project4Summary: translations['EXPERIENCE.PROJECT4_SUMMARY'],
        project5Title: translations['EXPERIENCE.PROJECT5_TITLE'],
        project5Description: translations['EXPERIENCE.PROJECT5_DESCRIPTION'],
        project5Summary: translations['EXPERIENCE.PROJECT5_SUMMARY'],
        viewProject: translations['EXPERIENCE.VIEW_PROJECT'],
        viewCode: translations['EXPERIENCE.VIEW_CODE']
      };
    });
  }
}
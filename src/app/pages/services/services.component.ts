import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, TranslateModule, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {
  servicesTranslations = {
    pageTitle: '',
    breadcrumbServices: '',
    whatIOffer: '',
    // Servicios
    frontendDev: '',
    frontendDesc: '',
    frontendFeatures: [],
    responsiveDesign: '',
    responsiveDesc: '',
    responsiveFeatures: [],
    backendDev: '',
    backendDesc: '',
    backendFeatures: [],
    seoOptimization: '',
    seoDesc: '',
    seoFeatures: [],
    uiuxDesign: '',
    uiuxDesc: '',
    uiuxFeatures: [],
    webMaintenance: '',
    webMaintenanceDesc: '',
    webMaintenanceFeatures: [],
    // Proceso
    workProcess: '',
    processStep1Title: '',
    processStep1Desc: '',
    processStep2Title: '',
    processStep2Desc: '',
    processStep3Title: '',
    processStep3Desc: '',
    processStep4Title: '',
    processStep4Desc: '',
    processStep5Title: '',
    processStep5Desc: '',
    // CTA
    readyToStart: '',
    readyToStartDesc: '',
    contactMeNow: ''
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
      'SERVICES.PAGE_TITLE',
      'SERVICES.BREADCRUMB_SERVICES',
      'SERVICES.WHAT_I_OFFER',
      // Servicios
      'SERVICES.FRONTEND_DEV',
      'SERVICES.FRONTEND_DESC',
      'SERVICES.FRONTEND_FEATURES',
      'SERVICES.RESPONSIVE_DESIGN',
      'SERVICES.RESPONSIVE_DESC',
      'SERVICES.RESPONSIVE_FEATURES',
      'SERVICES.BACKEND_DEV',
      'SERVICES.BACKEND_DESC',
      'SERVICES.BACKEND_FEATURES',
      'SERVICES.SEO_OPTIMIZATION',
      'SERVICES.SEO_DESC',
      'SERVICES.SEO_FEATURES',
      'SERVICES.UIUX_DESIGN',
      'SERVICES.UIUX_DESC',
      'SERVICES.UIUX_FEATURES',
      'SERVICES.WEB_MAINTENANCE',
      'SERVICES.WEB_MAINTENANCE_DESC',
      'SERVICES.WEB_MAINTENANCE_FEATURES',
      // Proceso
      'SERVICES.WORK_PROCESS',
      'SERVICES.PROCESS_STEP1_TITLE',
      'SERVICES.PROCESS_STEP1_DESC',
      'SERVICES.PROCESS_STEP2_TITLE',
      'SERVICES.PROCESS_STEP2_DESC',
      'SERVICES.PROCESS_STEP3_TITLE',
      'SERVICES.PROCESS_STEP3_DESC',
      'SERVICES.PROCESS_STEP4_TITLE',
      'SERVICES.PROCESS_STEP4_DESC',
      'SERVICES.PROCESS_STEP5_TITLE',
      'SERVICES.PROCESS_STEP5_DESC',
      // CTA
      'SERVICES.READY_TO_START',
      'SERVICES.READY_TO_START_DESC',
      'SERVICES.CONTACT_ME_NOW'
    ]).subscribe(translations => {
      this.servicesTranslations = {
        pageTitle: translations['SERVICES.PAGE_TITLE'],
        breadcrumbServices: translations['SERVICES.BREADCRUMB_SERVICES'],
        whatIOffer: translations['SERVICES.WHAT_I_OFFER'],
        // Servicios
        frontendDev: translations['SERVICES.FRONTEND_DEV'],
        frontendDesc: translations['SERVICES.FRONTEND_DESC'],
        frontendFeatures: this.translateService.instant('SERVICES.FRONTEND_FEATURES').split('|'),
        responsiveDesign: translations['SERVICES.RESPONSIVE_DESIGN'],
        responsiveDesc: translations['SERVICES.RESPONSIVE_DESC'],
        responsiveFeatures: this.translateService.instant('SERVICES.RESPONSIVE_FEATURES').split('|'),
        backendDev: translations['SERVICES.BACKEND_DEV'],
        backendDesc: translations['SERVICES.BACKEND_DESC'],
        backendFeatures: this.translateService.instant('SERVICES.BACKEND_FEATURES').split('|'),
        seoOptimization: translations['SERVICES.SEO_OPTIMIZATION'],
        seoDesc: translations['SERVICES.SEO_DESC'],
        seoFeatures: this.translateService.instant('SERVICES.SEO_FEATURES').split('|'),
        uiuxDesign: translations['SERVICES.UIUX_DESIGN'],
        uiuxDesc: translations['SERVICES.UIUX_DESC'],
        uiuxFeatures: this.translateService.instant('SERVICES.UIUX_FEATURES').split('|'),
        webMaintenance: translations['SERVICES.WEB_MAINTENANCE'],
        webMaintenanceDesc: translations['SERVICES.WEB_MAINTENANCE_DESC'],
        webMaintenanceFeatures: this.translateService.instant('SERVICES.WEB_MAINTENANCE_FEATURES').split('|'),
        // Proceso
        workProcess: translations['SERVICES.WORK_PROCESS'],
        processStep1Title: translations['SERVICES.PROCESS_STEP1_TITLE'],
        processStep1Desc: translations['SERVICES.PROCESS_STEP1_DESC'],
        processStep2Title: translations['SERVICES.PROCESS_STEP2_TITLE'],
        processStep2Desc: translations['SERVICES.PROCESS_STEP2_DESC'],
        processStep3Title: translations['SERVICES.PROCESS_STEP3_TITLE'],
        processStep3Desc: translations['SERVICES.PROCESS_STEP3_DESC'],
        processStep4Title: translations['SERVICES.PROCESS_STEP4_TITLE'],
        processStep4Desc: translations['SERVICES.PROCESS_STEP4_DESC'],
        processStep5Title: translations['SERVICES.PROCESS_STEP5_TITLE'],
        processStep5Desc: translations['SERVICES.PROCESS_STEP5_DESC'],
        // CTA
        readyToStart: translations['SERVICES.READY_TO_START'],
        readyToStartDesc: translations['SERVICES.READY_TO_START_DESC'],
        contactMeNow: translations['SERVICES.CONTACT_ME_NOW']
      };
    });
  }
}
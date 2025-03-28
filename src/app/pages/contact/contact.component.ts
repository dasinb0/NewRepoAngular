import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;
  loading = false;
  success = false;
  
  contactTranslations = {
    title: '',
    subtitle: '',
    location: '',
    locationValue: '',
    email: '',
    phone: '',
    schedule: '',
    scheduleValue: '',
    followMe: '',
    sendMessage: '',
    fullName: '',
    namePlaceholder: '',
    nameRequired: '',
    emailLabel: '',
    emailPlaceholder: '',
    emailRequired: '',
    emailInvalid: '',
    subject: '',
    subjectPlaceholder: '',
    subjectRequired: '',
    message: '',
    messagePlaceholder: '',
    messageRequired: '',
    submit: '',
    sending: '',
    successMessage: ''
  };
  
  @ViewChild('formSubmit') formSubmit!: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private translateService: TranslateService,
    public languageService: LanguageService
  ) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
    
    this.updateTranslations();
    
    this.translateService.onLangChange.subscribe(() => {
      this.updateTranslations();
    });
  }

  updateTranslations() {
    this.translateService.get([
      'CONTACT.TITLE',
      'CONTACT.SUBTITLE',
      'CONTACT.LOCATION',
      'CONTACT.LOCATION_VALUE',
      'CONTACT.EMAIL',
      'CONTACT.PHONE',
      'CONTACT.SCHEDULE',
      'CONTACT.SCHEDULE_VALUE',
      'CONTACT.FOLLOW_ME',
      'CONTACT.SEND_MESSAGE',
      'CONTACT.FULL_NAME',
      'CONTACT.NAME_PLACEHOLDER',
      'CONTACT.NAME_REQUIRED',
      'CONTACT.EMAIL_LABEL',
      'CONTACT.EMAIL_PLACEHOLDER',
      'CONTACT.EMAIL_REQUIRED',
      'CONTACT.EMAIL_INVALID',
      'CONTACT.SUBJECT',
      'CONTACT.SUBJECT_PLACEHOLDER',
      'CONTACT.SUBJECT_REQUIRED',
      'CONTACT.MESSAGE',
      'CONTACT.MESSAGE_PLACEHOLDER',
      'CONTACT.MESSAGE_REQUIRED',
      'CONTACT.SUBMIT',
      'CONTACT.SENDING',
      'CONTACT.SUCCESS_MESSAGE'
    ]).subscribe(translations => {
      this.contactTranslations = {
        title: translations['CONTACT.TITLE'],
        subtitle: translations['CONTACT.SUBTITLE'],
        location: translations['CONTACT.LOCATION'],
        locationValue: translations['CONTACT.LOCATION_VALUE'],
        email: translations['CONTACT.EMAIL'],
        phone: translations['CONTACT.PHONE'],
        schedule: translations['CONTACT.SCHEDULE'],
        scheduleValue: translations['CONTACT.SCHEDULE_VALUE'],
        followMe: translations['CONTACT.FOLLOW_ME'],
        sendMessage: translations['CONTACT.SEND_MESSAGE'],
        fullName: translations['CONTACT.FULL_NAME'],
        namePlaceholder: translations['CONTACT.NAME_PLACEHOLDER'],
        nameRequired: translations['CONTACT.NAME_REQUIRED'],
        emailLabel: translations['CONTACT.EMAIL_LABEL'],
        emailPlaceholder: translations['CONTACT.EMAIL_PLACEHOLDER'],
        emailRequired: translations['CONTACT.EMAIL_REQUIRED'],
        emailInvalid: translations['CONTACT.EMAIL_INVALID'],
        subject: translations['CONTACT.SUBJECT'],
        subjectPlaceholder: translations['CONTACT.SUBJECT_PLACEHOLDER'],
        subjectRequired: translations['CONTACT.SUBJECT_REQUIRED'],
        message: translations['CONTACT.MESSAGE'],
        messagePlaceholder: translations['CONTACT.MESSAGE_PLACEHOLDER'],
        messageRequired: translations['CONTACT.MESSAGE_REQUIRED'],
        submit: translations['CONTACT.SUBMIT'],
        sending: translations['CONTACT.SENDING'],
        successMessage: translations['CONTACT.SUCCESS_MESSAGE']
      };
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }

    this.loading = true;
    
    // Envío manual del formulario HTML (FormSubmit)
    setTimeout(() => {
      this.formSubmit.nativeElement.submit();
      setTimeout(() => {
        this.loading = false;
        this.success = true;
        setTimeout(() => {
          this.success = false;
          this.contactForm.reset();
          this.submitted = false;
        }, 5000);
      }, 1000);
    }, 500);
  }

  // Getters
  get f() {
    return this.contactForm.controls;
  }
}
import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;
  loading = false;
  success = false;
  
  @ViewChild('formSubmit') formSubmit!: ElementRef;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
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

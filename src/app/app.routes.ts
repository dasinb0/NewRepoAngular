import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'sobre-mi', component: AboutComponent },
    { path: 'experiencia', component: ExperienceComponent },
    { path: 'servicios', component: ServicesComponent },
    { path: 'contacto', component: ContactComponent },
    { path: '**', redirectTo: '' }
  ];

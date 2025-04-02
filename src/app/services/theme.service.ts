import { Injectable, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private document = inject(DOCUMENT);
  private window = this.document.defaultView;
  private storageKey = 'theme-preference';
  
  // Signal para el estado del tema
  public isDarkMode = signal<boolean>(this.getColorPreference());

  constructor() {
    // Inicializar el tema al cargar
    this.setTheme(this.getColorPreference());
    
    // Escuchar cambios en el sistema
    this.window?.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches }) => {
      this.isDarkMode.set(matches);
      this.setTheme(matches);
    });
  }

  toggle() {
    const newMode = !this.isDarkMode();
    this.isDarkMode.set(newMode);
    this.setTheme(newMode);
    this.savePreference(newMode);
  }

  private setTheme(darkMode: boolean) {
    const root = this.document.documentElement;
    if (darkMode) {
      root.classList.add('dark-theme');
    } else {
      root.classList.remove('dark-theme');
    }
  }

  private savePreference(darkMode: boolean) {
    localStorage.setItem(this.storageKey, darkMode ? 'dark' : 'light');
  }

  private getColorPreference(): boolean {
    // Verificar preferencia guardada
    const savedPreference = localStorage.getItem(this.storageKey);
    if (savedPreference) {
      return savedPreference === 'dark';
    }
    
    // Si no hay preferencia guardada, usar la preferencia del sistema
    return this.window?.matchMedia('(prefers-color-scheme: dark)').matches || false;
  }
}
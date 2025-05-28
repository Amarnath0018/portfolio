import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private themeKey = 'selected-theme';

  setTheme(theme: string) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.themeKey, theme);
  }

  loadTheme() {
    const savedTheme = localStorage.getItem(this.themeKey) || 'light';
    this.setTheme(savedTheme);
  }
}

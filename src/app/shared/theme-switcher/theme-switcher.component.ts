import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  templateUrl: './theme-switcher.component.html'
})
export class ThemeSwitcherComponent {
  themes = ['light', 'dark', 'blue'];

  constructor(private themeService: ThemeService) {}

  onThemeChange(theme: string) {
    this.themeService.setTheme(theme);
  }
}

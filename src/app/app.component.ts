import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from "./layout/layout.component";
import { ThemeService } from './services/theme.service';
import { LandingPageComponent } from "./landing-page/landing-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  
  constructor(private themeService: ThemeService) {
    this.themeService.loadTheme(); // 👈 This applies the theme on app load
  }
}

import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthGuard } from './core/guards/auth.guard';
import { RedirectGuard } from './core/guards/redirect.guard';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
   {
    path: 'portfolio',
    loadComponent: () => import('./landing-page/landing-page.component')
      .then(m => m.LandingPageComponent)
  },
  {
    path: 'home',
    loadComponent: () => import('./layout/layout.component')
      .then(m => m.LayoutComponent)
  },
  {
    path: '',
    redirectTo: 'portfolio',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'portfolio'
  }
];

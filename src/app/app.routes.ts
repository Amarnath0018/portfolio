import { Routes } from '@angular/router';

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
    path: 'login',
    loadComponent: () => import('./login/login.component')
      .then(m => m.LoginComponent)
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

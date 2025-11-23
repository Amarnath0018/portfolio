import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
      MatIconModule,
      MatToolbarModule,
      MatButtonModule,
    ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  loading = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(email: string, password: string) {
    this.loading = true;

    this.authService.login(email, password).subscribe({
      next: (res) => {
      console.log("Login ", res);
        this.loading = false;
        this.router.navigate(['/home']); // Navigate to next page
      },
      error: (err) => {
      console.log("error ",err);
        this.loading = false;
        this.errorMessage = 'Invalid email or password';
      }
    });
  }
}

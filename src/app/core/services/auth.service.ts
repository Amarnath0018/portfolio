import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8090/outer-api/auth/login';

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    
    const headers = new HttpHeaders({
      'Authorization': 'Basic '+ btoa(email + ':' + password)
    });

    return this.http.post(
      this.loginUrl,{},
      { headers: headers, withCredentials: true, responseType: 'text' } // IMPORTANT → required to receive cookie
    ).pipe(
      tap((res: any) => {
        // Backend sets cookie. Here we just store login status.
        localStorage.setItem('isLoggedIn', 'true');
      })
    );
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/portfolio']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}

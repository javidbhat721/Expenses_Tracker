import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'auth_token';

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    // Simulate login success and token storage
    if (email && password) {
      localStorage.setItem(this.tokenKey, 'dummy-token');
      return true;
    }
    return false;
  }

  register(name: string, email: string, password: string): boolean {
    // Simulate registration success
    return true;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/auth/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}

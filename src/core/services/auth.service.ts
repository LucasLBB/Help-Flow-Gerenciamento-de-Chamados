import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { LoginCredentials } from '../signatures/login-request';
import { SignUpCredentials } from '../signatures/signup-request';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://localhost:7226/api/Auth'; // Substitua pela URL real da API

  constructor(private http: HttpClient) {}

  login(credentials: LoginCredentials): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials, { withCredentials: true });
  }

  signUp(credentials: SignUpCredentials): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, credentials, { withCredentials: true });
  }

  isAuthenticated(): Observable<boolean> {
    return this.http.get<{ authenticated: boolean }>(
      `${this.apiUrl}`,
      { withCredentials: true } // envia o cookie HTTP-only
    ).pipe(
      map(res => res.authenticated),
      catchError(() => of(false))
    );
  }

  refreshToken(refreshToken: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/refresh-token`, { refreshToken });
  }
}

import { Component } from '@angular/core';
import { SignUpCredentials } from '../../core/signatures/signup-request';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss'
})
export class SignUp {

  constructor(private authService: AuthService, private router: Router) {}

  credentials: SignUpCredentials = {
    userName: '',
    email: '',
    password: ''
  };
  messageError = '';
  isLoading = false;

  onSignUp() {
    if (this.credentials) {
      this.isLoading = true;
      this.authService.signUp(this.credentials).subscribe({
        next: () => {
          this.router.navigate(['/login']);
        },
        error: (error) => {
          this.isLoading = false;
          this.messageError = error.error.message;
        }
      });
    }
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginCredentials } from '../../core/signatures/login-request';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  messageError = '';
  credentials: LoginCredentials = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}
  
  showPassword = false;
  rememberMe = false;
  isLoading = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    if (this.credentials.email && this.credentials.password) {
      this.isLoading = true;
      
      this.authService.login(this.credentials).subscribe(
        (response) => {
          this.isLoading = false;
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          this.isLoading = false;
          this.messageError = error.error.message;
        }
      );
    }
  }
}

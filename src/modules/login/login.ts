import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  credentials = {
    username: '',
    password: ''
  };
  
  showPassword = false;
  rememberMe = false;
  isLoading = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    if (this.credentials.username && this.credentials.password) {
      this.isLoading = true;
      
      // Simular processo de login
      setTimeout(() => {
        console.log('Login realizado:', this.credentials);
        this.isLoading = false;
        // Aqui você pode adicionar a lógica real de autenticação
      }, 2000);
    }
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = '';
  password = '';

  constructor(private router: Router) {}

  loginUser() {

    const userData = JSON.parse(localStorage.getItem('user') || '{}');

    if (
      this.email === userData.email &&
      this.password === userData.password
    ) {

      alert('Login Successful');

      this.router.navigate(['/profile']);

    } else {

      alert('Invalid Credentials');
    }
  }
}
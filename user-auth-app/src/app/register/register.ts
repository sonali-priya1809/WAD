import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  user = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  registerUser() {

    localStorage.setItem('user', JSON.stringify(this.user));

    alert('Registration Successful');

    this.router.navigate(['/login']);
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

  user: any;

  constructor() {

    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }
}
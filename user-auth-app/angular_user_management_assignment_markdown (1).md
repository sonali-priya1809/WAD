# Angular User Management Application

# Aim
Create an Angular application which performs the following actions:

- Register User
- Login User
- Show User Data on Profile Component

---

# Objective
The objective of this assignment is to:

- Understand Angular standalone applications
- Learn Angular routing
- Implement forms using ngModel
- Store and retrieve data using LocalStorage
- Navigate between components

---

# Technologies Used

- Angular
- TypeScript
- HTML
- CSS
- LocalStorage

---

# Software Requirements

- Node.js
- Angular CLI
- VS Code
- Web Browser

---

# What is Angular?

Angular is a frontend web framework developed by Google used to create dynamic single-page web applications.

---

# Features of the Application

- User Registration
- User Login Authentication
- Profile Display
- LocalStorage Data Handling
- Angular Routing
- Responsive UI

---

# Project Creation

## Install Angular CLI

```bash
npm install -g @angular/cli
```

Check version:

```bash
ng version
```

---

# Create Angular Project

```bash
ng new user-management-app
```

Choose:

```text
Would you like to add Angular routing? → Yes
```

Choose:

```text
Stylesheet format → CSS
```

---

# Open Project Folder

```bash
cd user-management-app
```

---

# Generate Components

```bash
ng g c register
ng g c login
ng g c profile
```

---

# Folder Structure

```text
src/app
│
├── register
│   ├── register.ts
│   ├── register.html
│   ├── register.css
│
├── login
│   ├── login.ts
│   ├── login.html
│   ├── login.css
│
├── profile
│   ├── profile.ts
│   ├── profile.html
│   ├── profile.css
│
├── app.ts
├── app.html
├── app.css
├── app.routes.ts
├── app.config.ts
```

---

# app.routes.ts

```typescript
import { Routes } from '@angular/router';

import { Register } from './register/register';
import { Login } from './login/login';
import { Profile } from './profile/profile';

export const routes: Routes = [

  { path: '', component: Register },
  { path: 'login', component: Login },
  { path: 'profile', component: Profile }

];
```

---

# app.config.ts

```typescript
import { ApplicationConfig } from '@angular/core';

import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { importProvidersFrom } from '@angular/core';

import { FormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {

  providers: [

    provideRouter(routes),

    importProvidersFrom(FormsModule)

  ]

};
```

---

# main.ts

```typescript
import { bootstrapApplication } from '@angular/platform-browser';

import { appConfig } from './app/app.config';

import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
```

---

# app.ts

```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
```

---

# app.html

```html
<router-outlet></router-outlet>
```

---

# Register Component

## register.ts

```typescript
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
```

---

## register.html

```html
<div class="container">

    <h2>User Registration</h2>

    <input
        type="text"
        placeholder="Enter Name"
        [(ngModel)]="user.name">

    <input
        type="email"
        placeholder="Enter Email"
        [(ngModel)]="user.email">

    <input
        type="password"
        placeholder="Enter Password"
        [(ngModel)]="user.password">

    <button (click)="registerUser()">
        Register
    </button>

</div>
```

---

## register.css

```css
.container {
    width: 320px;
    margin: 100px auto;
    padding: 25px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);

    display: flex;
    flex-direction: column;
    gap: 15px;
}

h2 {
    text-align: center;
    color: darkblue;
}

input {
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
}

button {
    padding: 10px;
    background-color: teal;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: darkcyan;
}
```

---

# Login Component

## login.ts

```typescript
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
```

---

## login.html

```html
<div class="container">

    <h2>User Login</h2>

    <input
        type="email"
        placeholder="Enter Email"
        [(ngModel)]="email">

    <input
        type="password"
        placeholder="Enter Password"
        [(ngModel)]="password">

    <button (click)="loginUser()">
        Login
    </button>

</div>
```

---

## login.css

```css
.container {
    width: 320px;
    margin: 100px auto;
    padding: 25px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);

    display: flex;
    flex-direction: column;
    gap: 15px;
}

h2 {
    text-align: center;
    color: darkgreen;
}

input {
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
}

button {
    padding: 10px;
    background-color: darkblue;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: navy;
}
```

---

# Profile Component

## profile.ts

```typescript
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
```

---

## profile.html

```html
<div class="profile-card">

    <h2>User Profile</h2>

    <p>
        <strong>Name:</strong>
        {{ user.name }}
    </p>

    <p>
        <strong>Email:</strong>
        {{ user.email }}
    </p>

</div>
```

---

## profile.css

```css
.profile-card {

    width: 350px;
    margin: 100px auto;
    padding: 30px;

    background-color: white;

    border-radius: 10px;

    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);

    text-align: center;
}

h2 {
    color: darkred;
    margin-bottom: 20px;
}

p {
    font-size: 18px;
    margin: 10px 0;
}
```

---

# Run the Application

Start the Angular server:

```bash
ng serve
```

---

# Open in Browser

```text
http://localhost:4200
```

---

# Execution Flow

## Step 1: Register User

- Enter Name
- Enter Email
- Enter Password
- Click Register

Data gets stored in LocalStorage.

---

## Step 2: Login User

- Enter registered email
- Enter registered password
- Click Login

If credentials match, user is redirected to Profile page.

---

## Step 3: View Profile

Profile page displays:

- User Name
- User Email

---

# Important Concepts Used

## Angular Components
Reusable UI sections.

## Routing
Used for navigation between pages.

## ngModel
Provides two-way data binding.

## LocalStorage
Stores data inside browser.

## Standalone Components
Modern Angular feature eliminating the need for NgModule.

---

# Commands Summary

```bash
npm install -g @angular/cli

ng new user-management-app

cd user-management-app

ng g c register
ng g c login
ng g c profile

ng serve
```

---

# Expected Output

The application successfully performs:

- User Registration
- User Login Authentication
- User Profile Display

using Angular standalone components and LocalStorage.

---

# Viva Questions

## 1. What is Angular?
Angular is a frontend framework developed by Google for building web applications.

## 2. What is a component?
A component is a reusable UI block in Angular.

## 3. What is routing?
Routing enables navigation between pages/components.

## 4. What is ngModel?
ngModel is used for two-way data binding.

## 5. What is LocalStorage?
LocalStorage is browser storage used to save data locally.

## 6. What are standalone components?
Standalone components are Angular components that work without NgModules.

---

# Conclusion

Thus, an Angular application was successfully created to register users, authenticate login credentials, and display user profile information using Angular standalone components and LocalStorage.


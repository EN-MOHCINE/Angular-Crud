import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private loginservice: LoginService  ,
    private router: Router
  ) { }

  SingIn() {
    this.loginservice.LoginIn(this.email, this.password).subscribe({
      next: (response: any) => {
        localStorage.setItem('token', response.data.token);
        console.log( 'Login successful componen LoginComponent :', response);
        // Add navigation to users page after successful login
        this.router.navigate(['/users']);
      },
      error: (error) => {
        console.error('Login failed:', error);
        // You might want to show an error message to the user
      }
    });

    // const token : string | null = localStorage.getItem('token');
    // if (!token) {
    //   this.router.navigate(['/login']);
    //   return
    // }
   
    // console.log('Token:', token);
   
  }
}
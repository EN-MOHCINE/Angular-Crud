import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LoginService } from './services/login.service'; // Adjust the import according to your file structure

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private loginService: LoginService) {}

  canActivate(): Observable<boolean> {

    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']);
      return of(false);
    }
    return this.loginService.checkLogin(token).pipe(
      map((response: any) => {
        if (response.success) {
          console.log('User is authenticated:', response.success);
          return true;
        } else {
          console.log('User is not authenticated');
          this.router.navigate(['/login']);
          return false;
        }
      }),
      catchError((error) => {
        console.error('Login failed:', error);
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }
}

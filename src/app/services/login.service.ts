import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient) { }
  LoginIn( Email :any , Password :any ): Observable<any[]> {
    return this.http.post<any[]>('http://localhost:8000/api/login', { name: Email, password: Password } );
  }

  checkLogin(token: string): Observable<any> {
    return this.http.post<any>(`http://localhost:8000/api/check-token` , {}, { headers: { 'Authorization': `Bearer ${token}` } });
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}

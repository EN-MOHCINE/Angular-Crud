import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
   }

   getAll(): Observable<User[]> {
     return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users' , );
   }

  //  getOne(id: number): Observable<User> {
  //    return this.http.get<User>('http://127.0.0.1:8000/users/' + id);
  //  }

  //  create(user: User): Observable<User> {
  //   return this.http.post<User>('http://127.0.0.1:8000/users', user);
  // }

  //  update(user: User): Observable<User> {
  //   return this.http.put<User>('http://127.0.0.1:8000/users/' + user.id, user);
  // }

  //  delete(id: number): Observable<void> {
  //   return this.http.delete<void>('http://127.0.0.1:8000/users/' + id);
  //  }
}

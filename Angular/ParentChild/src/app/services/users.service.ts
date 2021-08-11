import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  serverURL: string = 'https://jsonplaceholder.typicode.com'

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.serverURL}/users`);
  }

  public getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.serverURL}/users/${id}`);
  }
}

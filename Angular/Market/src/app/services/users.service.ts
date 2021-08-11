import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Post } from '../model/post';
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
    return this.http.get<User>(`${this.serverURL}/${id}`);
  }

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.serverURL}/posts`);
  }

  public delPost(id: number): Observable<Post> {
    console.log( this.http.delete<Post>(`${this.serverURL}/${id}`))
    return this.http.delete<Post>(`${this.serverURL}/${id}`);
  }

}

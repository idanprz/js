import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  serverURL: string = 'https://jsonplaceholder.typicode.com'

  constructor(private http: HttpClient) { }

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.serverURL}/posts`);
  }

  public delPost(id: number): Observable<Post> {
    return this.http.delete<Post>(`${this.serverURL}/posts/${id}`);
  }
}

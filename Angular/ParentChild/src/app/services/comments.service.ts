import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../model/comment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  serverURL: string = 'https://jsonplaceholder.typicode.com'

  constructor(private http: HttpClient) { }

  public getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.serverURL}/comments`);
  }

  public delComment(id: number): Observable<Comment> {
    return this.http.delete<Comment>(`${this.serverURL}/comments/${id}`);
  }
}

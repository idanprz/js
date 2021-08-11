import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post';
// import { ServerURL } from '../app.component.ts'

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  static ServerURL: string = "http://localhost:3000/posts"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
      // 'Cache-Control': 'no-cache, no-store, must-revalidate'
      // Authorization: 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) { }

  GetPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(PostsService.ServerURL)
  }

  GetPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${PostsService.ServerURL}/${id}`)
  }

  PostPost(post: Post): Observable<Post> {
    // return this.http.post<Post>("http://localhost:3000/posts", JSON.stringify({'name': 123}), this.httpOptions)
    // return this.http.post<Post>(PostsService.ServerURL, JSON.stringify(post), this.httpOptions)
    // console.log(this.http.post<Post>("http://localhost:3000/posts", { id: 2, name: 'abc', author: 'bababa' }, this.httpOptions))
    this.http.post<Post>("https://jsonplaceholder.typicode.com/posts", { id: 2, name: 'abc', author: 'bababa' }).subscribe(res => console.log(JSON.stringify(res)))
    return this.http.post<Post>(PostsService.ServerURL, JSON.stringify(post), this.httpOptions)
  }


  // // Example POST method implementation: - Create
  // async postData(url = this.ServerURL, data = {}) {
  //   // Default options are marked with *
  //   const response = await fetch(url, {
  //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //     mode: 'cors', // no-cors, *cors, same-origin
  //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //     credentials: 'same-origin', // include, *same-origin, omit
  //     headers: {
  //       'Content-Type': 'application/json'
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     redirect: 'follow', // manual, *follow, error
  //     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //     body: JSON.stringify(data) // body data type must match "Content-Type" header
  //   });
  //   return response.json(); // parses JSON response into native JavaScript objects
  // }



  // GetPost(id: number) {
  //   let post: string = ''

}
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Post } from './model/post';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('display') display: ElementRef<HTMLInputElement> = {} as ElementRef;

  constructor(private postsService: PostsService) { }

  GetPosts() {
    return this.postsService.GetPosts().subscribe(
      posts => this.display.nativeElement.innerHTML = JSON.stringify(posts))
  }

  GetPost(id: number) {
    return this.postsService.GetPost(id).subscribe(
      post => this.display.nativeElement.innerHTML = JSON.stringify(post))
  }

  PostPost(post: Post){
    // console.log(this.postsService.PostPost(post))
    return this.postsService.PostPost(post)
  }




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

  // del(id: number) {
  //   const deleteMethod = {
  //     method: 'DELETE', // Method itself
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
  //     },
  //     // No need to have body, because we don't send nothing to the server.
  //   }
  //   // Make the HTTP Delete call using fetch api
  //   fetch(`${this.ServerURL}/${id}`, deleteMethod)
  //     .then(response => response.json())
  //     .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
  //     .catch(err => console.log(err)) // Do something with the error
  // }

  // put(url = this.ServerURL, data = {}) {
  //   fetch(`${this.ServerURL}/${data.id}`, {
  //     method: 'put', // or 'PUT'
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log('Success:', data);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // }

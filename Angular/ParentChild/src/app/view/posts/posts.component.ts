import { Component,  } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostsService } from 'src/app/services/posts.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  @Input() userId:number = 0

  posts:Post[] = []
  userPosts:Post[] = []

  constructor(private servPost:PostsService) {
    servPost.getPosts().subscribe(posts =>{
        this.posts = posts
        this.userPosts = posts.filter(post => this.userId == post.userId)
    })
  }
}

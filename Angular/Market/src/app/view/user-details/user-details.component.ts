import { Component, Input,  } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  posts:Post[] = []

  constructor(private servPosts:UsersService) {
    servPosts.getPosts().subscribe(posts =>{
        this.posts = posts
    })
  }


  @Input() id:number = 0
  @Input() name:string = ''
  @Input() username:string = ''
  @Input() email:string = ''

  DisplayPosts(userId:number){
    console.table(this.posts.filter(post => userId == post.userId))
  }

  RemovePost(postId:number){
  }
}

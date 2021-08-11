import { Component,  } from '@angular/core';
import { Input } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {

  @Input() post:Post = { body: '', id : 0, title : '', userId : 0}

  constructor(private servPost:PostsService) {}

  DeletePost(id:number){
    return this.servPost.delPost(id).subscribe(post => post)
  }
}

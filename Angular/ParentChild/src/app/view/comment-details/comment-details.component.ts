import { Component, Input} from '@angular/core';
import { Comment } from 'src/app/model/comment';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent  {

  @Input() comment:Comment = {id:0,body:'',email:'',name:'',postId:0}
  constructor(private servComments:CommentsService) {}

  DeleteComment(id:number){
    return this.servComments.delComment(id).subscribe(comment => comment)
  }
// DeletePost(id:number){
//     return this.servPost.delPost(id).subscribe(post => post)
//   }
}

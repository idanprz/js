import { Component, } from '@angular/core';
import { Input } from '@angular/core';
import { Comment } from 'src/app/model/comment';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {

  @Input() postId: number = 0

  comment: Comment[] = []
  userComments: Comment[] = []

  constructor(private servComments: CommentsService) {
    servComments.getComments().subscribe(comment => {
      this.comment = comment
      this.userComments = comment.filter(comment => this.postId == comment.postId)
    })
  }
}

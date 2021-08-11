import { Component,  } from '@angular/core';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users:User[] = []

  constructor(private servUser:UsersService) {
    servUser.getUsers().subscribe(res =>{
        this.users = res
    })
  }
}

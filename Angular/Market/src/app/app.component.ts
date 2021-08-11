import { Component } from '@angular/core';
import { ServPracticeService } from './services/serv-practice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num:number

  constructor(servNum:ServPracticeService){
    this.num = servNum.GetRandNum()
  }

  getNum():number{
    return this.num
  }
}

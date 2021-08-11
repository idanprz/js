import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ServPracticeService } from 'src/app/services/serv-practice.service';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.css']
})
export class SnacksComponent implements OnInit {

  snacksProducts: Product[]

  constructor(private servProduct:ServPracticeService) {
    this.snacksProducts = servProduct.GetProductsByCategory('snacks')
  }

  ngOnInit(): void {
  }


}

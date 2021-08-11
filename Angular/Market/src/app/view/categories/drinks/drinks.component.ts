import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ServPracticeService } from 'src/app/services/serv-practice.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {

  drinksProducts: Product[]

  constructor(private servProduct:ServPracticeService) {
    this.drinksProducts = servProduct.GetProductsByCategory('drinks')
  }

  ngOnInit(): void {
  }

}

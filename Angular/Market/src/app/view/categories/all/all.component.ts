import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ServPracticeService } from 'src/app/services/serv-practice.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  allProducts: Product[]

  constructor(private servProducts:ServPracticeService) {
    this.allProducts = servProducts.GetProducts()
  }

  ngOnInit(): void {
  }

}

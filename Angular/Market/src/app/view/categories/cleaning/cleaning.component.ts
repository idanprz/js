import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ServPracticeService } from 'src/app/services/serv-practice.service';


@Component({
  selector: 'app-cleaning',
  templateUrl: './cleaning.component.html',
  styleUrls: ['./cleaning.component.css']
})
export class CleaningComponent implements OnInit {

  cleaningProducts: Product[]

  constructor(private servProduct:ServPracticeService) {
    this.cleaningProducts = servProduct.GetProductsByCategory('cleaning')
  }

  ngOnInit(): void {
  }

}

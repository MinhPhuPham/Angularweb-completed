import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {product} from '../product'

@Component({
  selector: 'app-detail-products',
  templateUrl: './detail-products.component.html',
  styleUrls: ['./detail-products.component.css']
})
export class DetailProductsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  product
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('productId'))
      this.product = product.filter(product => {
        return product.id === id
      })[0];
    });
  }

  Onback(){
    window.history.back();
  }
  Add_cart(){
    console.log("preparing!")
  }
}

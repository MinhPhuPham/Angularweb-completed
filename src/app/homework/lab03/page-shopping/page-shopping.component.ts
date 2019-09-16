import { Component, OnInit } from '@angular/core';

import {product} from '../products'
@Component({
  selector: 'app-page-shopping',
  templateUrl: './page-shopping.component.html',
  styleUrls: ['./page-shopping.component.css']
})
export class PageShoppingComponent implements OnInit {

  constructor() { }
  listProducts=[]
  ngOnInit() {
    this.listProducts=[...product]
  }
  

}

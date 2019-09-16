import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {product} from '../products'
@Component({
  selector: 'app-detail-pro',
  templateUrl: './detail-pro.component.html',
  styleUrls: ['./detail-pro.component.css']
})
export class DetailProComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  product
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id'))
      this.product = product.filter(product => {
        return product.id === id
      })[0];
    });
  }

}

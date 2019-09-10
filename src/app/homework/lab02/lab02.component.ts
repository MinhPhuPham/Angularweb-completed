import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-lab02',
  templateUrl: './lab02.component.html',
  styleUrls: ['./lab02.component.css']
})
export class Lab02Component implements OnInit {
  
  items = [];
  pageOfItems: Array<any>;

  constructor() { }

  ngOnInit() {
    this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
}

import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { students } from './students';

@Component({
  selector: 'app-lab02',
  templateUrl: './lab02.component.html',
  styleUrls: ['./lab02.component.css']
})
export class Lab02Component implements OnInit {
  
  pageOfItems: Array<any>;

  config: any;
  constructor() {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.listStudents.length
    };
  }

  searchText
  listStudents = []

  ngOnInit() {
     this.listStudents = students.map((students, i) => (students));
  
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
}

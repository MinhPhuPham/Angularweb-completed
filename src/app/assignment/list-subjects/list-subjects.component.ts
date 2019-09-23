import { Component, OnInit } from '@angular/core';
import {subjects} from '../subjects'
@Component({
  selector: 'app-list-subjects',
  templateUrl: './list-subjects.component.html',
  styleUrls: ['./list-subjects.component.css']
})
export class ListSubjectsComponent implements OnInit {
  pageOfItems: Array<any>;
  config: any;
  constructor() { 
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.listSubjects.length
    };
  }
  searchText
  listSubjects=[]
  ngOnInit() {
    this.listSubjects=[...subjects]
  }
  pageChanged(event){
    this.config.currentPage = event;
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
}

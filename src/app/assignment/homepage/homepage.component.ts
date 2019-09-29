import { Component, OnInit } from '@angular/core';
import {subjects} from '../subjects'
import { from } from 'rxjs';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }
  listSubjects=[]
  ngOnInit() {
    this.listSubjects=[...subjects]
  }

}

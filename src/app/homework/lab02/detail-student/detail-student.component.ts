import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 

import {students} from '../students';
import {course} from '../course';
import {enrollments} from '../enrollments'

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.css']
})
export class DetailStudentComponent implements OnInit {
  
  constructor(private router: ActivatedRoute) { }
  student
  listStudents = [...students]
  ngOnInit() {
    this.router.paramMap.subscribe( params => {
      let id = parseInt(params.get('id'))
    
      this.student = this.listStudents.filter(student => {
        return student.id === id
      })[0]
    })
  }
}

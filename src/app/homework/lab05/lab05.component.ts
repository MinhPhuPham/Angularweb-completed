import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab05',
  templateUrl: './lab05.component.html',
  styleUrls: ['./lab05.component.css']
})
export class Lab05Component implements OnInit {

  long;
  wide;
  area;
  p;
  mark
  name
  birthday
  gender
  result
  errs
  isSalary
  salary
  groupAge
  nv = {
    name : null, 
    salary : null,
    gender : null,
    rate : null
  }
  data = [
    { age : "25", rate:0.07},
    { age : "25 to 40" , rate: 0.1},
    { age : "above 40" , rate :0.15}
  ]
  listproducts = [
    {
      id: 1,
      name: "Soft Drinks",
      price: 10000,
      amount: null,
      checked : false
    },
    {
      id: 2,
      name: "Black Coffee",
      price: 12000,
      amount: null,
      checked : false
    },
    {
      id: 3,
      name: "Cigarette",
      price: 18000,
      amount: null,
      checked : false
    }
  ];
  
  constructor() { }

  ngOnInit() {
    this.errs = []
    this.result = ""
    this.salary = ""
  }
  onSubmit() {
    this.errs = []
    this.result = ""
    if (!this.name)
      this.errs.push("Name is required!")
    if (!this.birthday)
      this.errs.push("Birthday is required!")
    if (!this.gender)
      this.errs.push("Gender is required!")
    if (!this.mark)
      this.errs.push("Mark is required")
    if (parseInt(this.mark) > 10 || parseInt(this.mark) < 0)
      this.errs.push("Wrong Mark!")
    if (this.errs.length === 0) {
      if (parseInt(this.mark) >= 5)
        this.result = "Passed"
        else
        this.result = "Failed"
    }
  }
  caculate() {
    this.area = this.long * this.wide;
    this.p = (parseInt(this.long) + parseInt(this.wide)) *2;
  }
  reward() {
    let i = this.nv.salary * this.nv.rate;
    if(this.nv.gender == "Male") {
      i += 200000;
    }
    return i;
  }
  Total() {
    let total = 0;
    for (let item of this.listproducts) {
      if(item.checked)
      total += item.amount * item.price;
    }
    return total;
  }
  onChangeName() {
    this.name = this.name.trim()
  }

  onChangeGender(gender) {
    this.gender = gender
  }

  onChangeSalary() {
    if (parseInt(this.salary).toString() !== this.salary.toString()) {
      this.isSalary = false
      this.salary = ""
  }
    else {
      this.isSalary = true
      if (this.salary)
        this.salary = parseInt(this.salary)
      else
        this.salary = ""
    }
  }

}

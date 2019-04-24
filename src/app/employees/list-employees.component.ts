import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] =  [
    {
      "id": 2,
      "name": "Mary",
      "gender": "Female",
      "contactPreference": "Phone",
      "phoneNumber": 2345978640,
      "dateOfBirth": new Date('2/11/1979'),
      "department": "HR",
      "email" : "abc@gmail.com",
      "isActive": true,
      "photoPath": "assets/images/mary.png"
    },
    {
      "id": 3,
      "name": "John",
      "gender": "Male",
      "contactPreference": "Phone",
      "phoneNumber": 5432978640,
      "dateOfBirth": new Date('3/11/1980'),
      "department": "Marketing",
      "email" : "xyz@gmail.com",
      "isActive": false,
      "photoPath": "assets/images/ravi.png"
    },
    {
      "id": 4,
      "name": "David",
      "gender": "Female",
      "contactPreference": "Phone",
      "phoneNumber": 2345978640,
      "dateOfBirth": new Date('4/11/1982'),
      "department": "Sales",
      "email" : "prq@gmail.com",
      "isActive": true,
      "photoPath": "assets/images/ravi.png"
    }
  ];
  employeeToDisplay: Employee;
  private arrayIndex = 1;
  constructor() { }

  ngOnInit() {
    this.employeeToDisplay = this.employees[0];
  }
  nextEmployee(): void {
    if (this.arrayIndex <= 2) {
      this.employeeToDisplay = this.employees[this.arrayIndex];
      this.arrayIndex ++;
    } else {
      this.employeeToDisplay = this.employees[0];
      this.arrayIndex = 1;
    }
  }

}

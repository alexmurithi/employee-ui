import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css'],
})
export class ListEmployeeComponent implements OnInit {
  employees: Employee[] = [];
  constructor() {}

  ngOnInit(): void {
    this.employees = [
      {
        id: 1,
        firstName: 'Alex',
        lastName: 'Gitari',
        emailId: 'gitsaleks@gmail.com',
      },
      {
        id: 2,
        firstName: 'Rose',
        lastName: 'Gatabi',
        emailId: 'tabs@gmail.com',
      },
    ];
  }
}

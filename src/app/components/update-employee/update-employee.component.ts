import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  employeeUpdateRequest: Employee = {
    firstName: '',
    lastName: '',
    emailId: '',
  };
  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = Number(params.get('id'));
        if (id) {
          this.employeeService.getEmployee(id).subscribe({
            next: (res) => {
              this.employeeUpdateRequest = res;
            },
          });
        }
      },
    });
  }

  updateEmployee() {
    this.employeeService
      .updateEmployee(this.employeeUpdateRequest.id, this.employeeUpdateRequest)
      .subscribe({
        next: (data) => {
          this.router.navigate(['employees']);
        },
      });
  }

  
}

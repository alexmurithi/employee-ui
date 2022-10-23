import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  baseAPIUrl: string = environment.baseAPIUrl;

  constructor(private http: HttpClient) {}
  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseAPIUrl + 'api/v1/employees'}`);
  }
  addEmployee(addEmployeeRequest: Employee): Observable<Employee> {
    return this.http.post<Employee>(
      `${this.baseAPIUrl + 'api/v1/employees'}`,
      addEmployeeRequest
    );
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(
      `${this.baseAPIUrl + 'api/employees/'}` + id
    );
  }

  updateEmployee(
    id: number,
    updateEmployeeRequest: Employee
  ): Observable<Employee> {
    return this.http.put<Employee>(
      `${this.baseAPIUrl + 'api/employees/'}` + id,
      updateEmployeeRequest
    );
  }
}

import { Component,Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class EmpService {
  employees: any[] = [
    { code: 'emp101', name: 'Karthik', gender: 'Male', annualSalary: 5500, dateOfBirth: '1988-06-25' },
    { code: 'emp102', name: 'Sachin', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '1982-06-09' },
  ];
  getEmployees() {
    return this.employees;
  }
}

@Component({
  selector: 'app-emplist',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2 style="color: red;">Answer 5</h2>
    <ul>
      <li *ngFor="let e of employees">{{e.code}} - {{e.name}}</li>
    </ul>
  `
})
export class EmpListComponent {
  employees: any[] = [];
  constructor(private service: EmpService) {
    this.employees = this.service.getEmployees();
  }
}

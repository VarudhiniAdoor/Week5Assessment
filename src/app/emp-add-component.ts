import { Component,Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmpService } from './emp-list-component';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-empadd',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <h2 style="color: red;">Answer 6</h2>
    <form (ngSubmit)="addEmployee()">
      <input [(ngModel)]="code" name="code" placeholder="Code"><br><br>
      <input [(ngModel)]="name" name="name" placeholder="Name"><br><br>
      <button type="submit">Add</button>
    </form>
    <ul>
      <li *ngFor="let e of employees">{{e.code}} - {{e.name}}</li>
    </ul>
  `
})
export class EmpAddComponent {
  employees: any[] = [];
  code = ''; name = '';

  constructor(private service: EmpService) {
    this.employees = this.service.getEmployees();
  }
  addEmployee() {
    this.service.employees.push({ code: this.code, name: this.name });
  }
}

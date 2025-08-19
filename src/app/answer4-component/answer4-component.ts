import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-answer4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './answer4-component.html',  
  styleUrl: './answer4-component.css' 

})
export class Answer4Component {
  employees: any[] = [
    { code: 'emp101', name: 'karthik', gender: 'Male', annualSalary: 5500, dateOfBirth: '1988-06-25' },
    { code: 'emp102', name: 'sachin', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '1982-06-09' },
    { code: 'emp103', name: 'rahul', gender: 'Male', annualSalary: 5900, dateOfBirth: '1979-08-12' },
    { code: 'emp104', name: 'mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '1980-10-14' },
  ];
}

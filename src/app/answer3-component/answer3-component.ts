import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-answer3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './answer3-component.html',  
  styleUrl: './answer3-component.css' 
})
export class Answer3Component {
  name: string = 'Rahul';
  age: number = 30;

  getMessage() {
    if (this.age < 13) return `Hello ${this.name}, you are child`;
    else if (this.age >= 13 && this.age <= 19) return `Hello ${this.name}, you are teenager`;
    else return `Hello ${this.name}, you are an adult`;
  }
}
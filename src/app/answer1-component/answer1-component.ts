import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-answer1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './answer1-component.html', 
  styleUrl: './answer1-component.css' 
})
export class Answer1Component {
  name: string = 'John';
  age: number = 20;
}

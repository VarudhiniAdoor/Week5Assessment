import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-answer2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './answer2-component.html',  
  styleUrl: './answer2-component.css' 
})
export class Answer2Component {
  name: string = 'Alice';
  age: number = 22;
}


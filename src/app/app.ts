import { Component, Injectable } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Answer1Component } from './answer1-component/answer1-component';
import { Answer2Component } from './answer2-component/answer2-component';
import { Answer3Component } from './answer3-component/answer3-component';
import { Answer4Component } from './answer4-component/answer4-component';
import { EmpListComponent } from './emp-list-component';
import { EmpAddComponent } from './emp-add-component';
import { Answer7Component } from './answer7-component/answer7-component';
import { ParentComponent } from './answer8/parent.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Answer1Component, Answer2Component, Answer3Component, Answer4Component,
    EmpListComponent, EmpAddComponent, Answer7Component, ParentComponent
  ],
  template: `
    <h1>Angular Assessment</h1>
    <div>
    <app-answer1></app-answer1> 
     <app-answer2></app-answer2> 
    <app-answer3></app-answer3> 
    <app-answer4></app-answer4> 
     <app-emplist></app-emplist>
     <app-empadd></app-empadd>
    <app-answer7></app-answer7>
    <app-parent></app-parent>
  `,
  styleUrl :'./app.css'

})
export class App {}

bootstrapApplication(App);


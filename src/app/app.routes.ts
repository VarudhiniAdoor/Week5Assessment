import { Routes } from '@angular/router';
import { Answer1Component } from './answer1-component/answer1-component';
import { Answer2Component } from './answer2-component/answer2-component';
import { Answer3Component } from './answer3-component/answer3-component';
import { Answer4Component } from './answer4-component/answer4-component';
import { EmpListComponent } from './emp-list-component';
import { EmpAddComponent } from './emp-add-component';
import { ParentComponent } from './answer8/parent.component';
import { Answer7Component } from './answer7-component/answer7-component';

export const routes: Routes = [
  { path: '', redirectTo: 'q1', pathMatch: 'full' },
  { path: 'q1', component: Answer1Component },
  { path: 'q2', component: Answer2Component },
  { path: 'q3', component: Answer3Component },
  { path: 'q4', component: Answer4Component },
  { path: 'q5', component: EmpListComponent },
  { path: 'q6', component: EmpAddComponent },
  { path: 'q7', component: Answer7Component },
  { path: 'q8', component: ParentComponent },
];
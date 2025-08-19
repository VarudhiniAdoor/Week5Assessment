import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer7Component } from './answer7-component';

describe('Answer7Component', () => {
  let component: Answer7Component;
  let fixture: ComponentFixture<Answer7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Answer7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Answer7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer4Component } from './answer4-component';

describe('Answer4Component', () => {
  let component: Answer4Component;
  let fixture: ComponentFixture<Answer4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Answer4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Answer4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

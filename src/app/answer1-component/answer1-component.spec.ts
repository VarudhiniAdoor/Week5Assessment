import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer1Component } from './answer1-component';

describe('Answer1Component', () => {
  let component: Answer1Component;
  let fixture: ComponentFixture<Answer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Answer1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Answer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

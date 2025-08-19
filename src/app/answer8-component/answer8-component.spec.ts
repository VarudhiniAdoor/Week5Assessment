import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer8Component } from './answer8-component';

describe('Answer8Component', () => {
  let component: Answer8Component;
  let fixture: ComponentFixture<Answer8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Answer8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Answer8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

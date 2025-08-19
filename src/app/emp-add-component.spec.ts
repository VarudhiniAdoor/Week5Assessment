import { TestBed } from '@angular/core/testing';

import { EmpAddComponent } from './emp-add-component';

describe('EmpAddComponent', () => {
  let service: EmpAddComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpAddComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

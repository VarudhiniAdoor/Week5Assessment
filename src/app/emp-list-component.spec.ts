import { TestBed } from '@angular/core/testing';

import { EmpListComponent } from './emp-list-component';

describe('EmpListComponent', () => {
  let service: EmpListComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpListComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

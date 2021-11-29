import { TestBed } from '@angular/core/testing';

import { LoginnoGuard } from './loginno.guard';

describe('LoginnoGuard', () => {
  let guard: LoginnoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginnoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

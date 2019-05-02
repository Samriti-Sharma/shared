import { TestBed } from '@angular/core/testing';

import { CheckGuardService } from './check-guard.service';

describe('CheckGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckGuardService = TestBed.get(CheckGuardService);
    expect(service).toBeTruthy();
  });
});

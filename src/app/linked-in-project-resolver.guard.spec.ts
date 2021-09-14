import { TestBed } from '@angular/core/testing';

import { LinkedInProjectResolverGuard } from './linked-in-project-resolver.guard';

describe('LinkedInProjectResolverGuard', () => {
  let guard: LinkedInProjectResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LinkedInProjectResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

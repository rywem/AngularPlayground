import { TestBed } from '@angular/core/testing';

import { FocusWithinServiceService } from './focus-within-service.service';

describe('FocusWithinServiceService', () => {
  let service: FocusWithinServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FocusWithinServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

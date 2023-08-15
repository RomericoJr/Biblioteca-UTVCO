import { TestBed } from '@angular/core/testing';

import { EstadiasFirebaseService } from './estadias-firebase.service';

describe('EstadiasFirebaseService', () => {
  let service: EstadiasFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadiasFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

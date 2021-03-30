import { TestBed } from '@angular/core/testing';

import { EletronicsService } from './eletronic.service';

describe('EletronicsService', () => {
  let service: EletronicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EletronicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

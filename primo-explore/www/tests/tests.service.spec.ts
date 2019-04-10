import { TestBed, inject } from '@angular/core/testing';

import { TestsService } from './tests.service';

describe('TestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestsService]
    });
  });

  it('should be created', inject([TestsService], (service: TestsService) => {
    expect(service).toBeTruthy();
  }));
});

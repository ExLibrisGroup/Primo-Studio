import { TestBed, inject } from '@angular/core/testing';

import { TestsService } from './tests.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule
        ],
      providers: [TestsService]
    });
  });

  it('should be created', inject([TestsService], (service: TestsService) => {
    expect(service).toBeTruthy();
  }));
});

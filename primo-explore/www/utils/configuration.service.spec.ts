import { TestBed, inject } from '@angular/core/testing';

import { ConfigurationService } from './configuration.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('ConfigurationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule,
            RouterTestingModule
        ],
      providers: [ConfigurationService]
    });
  });

  it('should be created', inject([ConfigurationService], (service: ConfigurationService) => {
    expect(service).toBeTruthy();
  }));
});

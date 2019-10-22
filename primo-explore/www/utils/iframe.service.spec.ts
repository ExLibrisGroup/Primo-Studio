import { TestBed, inject } from '@angular/core/testing';

import { IframeService } from './iframe.service';
import {ConfigurationService} from './configuration.service';

describe('IframeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
          IframeService,
          {provide: ConfigurationService, useClass: ConfigurationServiceMock}
      ]
    });
  });

  it('should be created', inject([IframeService], (service: IframeService) => {
    expect(service).toBeTruthy();
  }));
});

class ConfigurationServiceMock {

}

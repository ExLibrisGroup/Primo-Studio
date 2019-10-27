import { TestBed, inject } from '@angular/core/testing';

import { ColorThemeService } from './color-theme.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ConfigurationService} from '../utils/configuration.service';

describe('ColorThemeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule
        ],
      providers: [
          ColorThemeService,
          {provide: ConfigurationService, useClass: ConfigurationServiceMock}
      ]
    });
  });

  it('should be created', inject([ColorThemeService], (service: ColorThemeService) => {
    expect(service).toBeTruthy();
  }));
});

class ConfigurationServiceMock {

}

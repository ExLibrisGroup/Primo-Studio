import { TestBed, inject } from '@angular/core/testing';

import { EditorService } from './editor.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ConfigurationService} from '../utils/configuration.service';
import {IconsPickerService} from '../icons-picker/icons-picker.service';

describe('EditorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule
        ],
      providers: [
          EditorService,
          {provide: ConfigurationService, useClass: ConfigurationServiceMock},
          {provide: IconsPickerService, useClass: IconsPickerServiceMock},
      ]
    });
  });

  it('should be created', inject([EditorService], (service: EditorService) => {
    expect(service).toBeTruthy();
  }));
});

class ConfigurationServiceMock {

}

class IconsPickerServiceMock {

}

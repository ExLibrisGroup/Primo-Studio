import { TestBed, inject } from '@angular/core/testing';

import { IconsPickerService } from './icons-picker.service';

describe('IconsPickerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IconsPickerService]
    });
  });

  it('should be created', inject([IconsPickerService], (service: IconsPickerService) => {
    expect(service).toBeTruthy();
  }));
});

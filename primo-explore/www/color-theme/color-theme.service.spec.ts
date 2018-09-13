import { TestBed, inject } from '@angular/core/testing';

import { ColorThemeService } from './color-theme.service';

describe('ColorThemeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColorThemeService]
    });
  });

  it('should be created', inject([ColorThemeService], (service: ColorThemeService) => {
    expect(service).toBeTruthy();
  }));
});

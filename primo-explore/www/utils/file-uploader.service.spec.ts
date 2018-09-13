import { TestBed, inject } from '@angular/core/testing';

import { FileUploaderService } from './file-uploader.service';

describe('FileUploaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileUploaderService]
    });
  });

  it('should be created', inject([FileUploaderService], (service: FileUploaderService) => {
    expect(service).toBeTruthy();
  }));
});

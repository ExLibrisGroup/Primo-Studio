import { TestBed, inject } from '@angular/core/testing';

import { FileUploaderService } from './file-uploader.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('FileUploaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule
        ],
      providers: [FileUploaderService]
    });
  });

  it('should be created', inject([FileUploaderService], (service: FileUploaderService) => {
    expect(service).toBeTruthy();
  }));
});

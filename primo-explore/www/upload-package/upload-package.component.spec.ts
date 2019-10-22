import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPackageComponent } from './upload-package.component';
import {FileUploaderService} from '../utils/file-uploader.service';

describe('UploadPackageComponent', () => {
  let component: UploadPackageComponent;
  let fixture: ComponentFixture<UploadPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadPackageComponent ],
        providers: [
            {provide: FileUploaderService, useClass: FileUploaderServiceMock}
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class FileUploaderServiceMock {

}

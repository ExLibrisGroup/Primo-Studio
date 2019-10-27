import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImagesComponent } from './edit-images.component';
import {FileUploaderService} from '../utils/file-uploader.service';
import {IframeService} from '../utils/iframe.service';
import {ConfigurationService} from '../utils/configuration.service';
import {IconsPickerService} from '../icons-picker/icons-picker.service';

describe('EditImagesComponent', () => {
  let component: EditImagesComponent;
  let fixture: ComponentFixture<EditImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditImagesComponent ],
        providers: [
            {provide: FileUploaderService, useClass: FileUploaderServiceMock},
            {provide: IframeService, useClass: IframeServiceMock},
            {provide: ConfigurationService, useClass: ConfigurationServiceMock},
            {provide: IconsPickerService, useClass: IconsPickerServiceMock}
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class IconsPickerServiceMock {

}

class ConfigurationServiceMock {

}

class IframeServiceMock {

}

class FileUploaderServiceMock {


}

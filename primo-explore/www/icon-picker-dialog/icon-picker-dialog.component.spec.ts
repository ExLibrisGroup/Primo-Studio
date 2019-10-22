import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPickerDialogComponent } from './icon-picker-dialog.component';
import {MockDirective, MockPipe} from 'ng-mocks';
import {SearchIconPipe} from './search-icon.pipe';
import {CalcSVGViewBoxDirective} from '../utils/calc-view-box.directive';
import {IconsPickerService} from '../icons-picker/icons-picker.service';
import {ElementRef} from '@angular/core';

describe('IconPickerDialogComponent', () => {
  let component: IconPickerDialogComponent;
  let fixture: ComponentFixture<IconPickerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          IconPickerDialogComponent,
          MockDirective(CalcSVGViewBoxDirective),
          MockPipe(SearchIconPipe)
      ],
        providers: [
            {provide: IconsPickerService, useClass: IconsPickerServiceMock}
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconPickerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class IconsPickerServiceMock {
    getIcons() {
        return [];
    }
}

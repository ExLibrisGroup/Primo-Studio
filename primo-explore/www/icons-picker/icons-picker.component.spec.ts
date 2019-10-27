import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsPickerComponent } from './icons-picker.component';
import {MockComponent, MockDirective} from 'ng-mocks';
import {BusySpinnerComponent} from '../busy-spinner/busy-spinner.component';
import {CalcSVGViewBoxDirective} from '../utils/calc-view-box.directive';
import {IframeService} from '../utils/iframe.service';
import {IconsPickerService} from './icons-picker.service';
import {DomSanitizer} from '@angular/platform-browser';
import {ComponentFactoryResolver, ElementRef, ViewContainerRef} from '@angular/core';

describe('IconsPickerComponent', () => {
  let component: IconsPickerComponent;
  let fixture: ComponentFixture<IconsPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          IconsPickerComponent,
          MockComponent(BusySpinnerComponent),
          MockDirective(CalcSVGViewBoxDirective)
      ],
        providers: [
            {provide: IframeService, useClass: IframeServiceMock},
            {provide: IconsPickerService, useClass: IconsPickerServiceMock}
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class IconsPickerServiceMock {
    get icons() {
        return {}
    }
}

class IframeServiceMock {

}

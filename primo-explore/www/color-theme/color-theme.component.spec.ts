import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorThemeComponent } from './color-theme.component';
import {MockComponent} from 'ng-mocks';
import {BusySpinnerComponent} from '../busy-spinner/busy-spinner.component';
import {ColorThemeService} from './color-theme.service';
import {IframeService} from '../utils/iframe.service';

describe('ColorThemeComponent', () => {
  let component: ColorThemeComponent;
  let fixture: ComponentFixture<ColorThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          ColorThemeComponent,
          MockComponent(BusySpinnerComponent)
      ],
        providers: [
            {provide: ColorThemeService, useClass: ColorThemeServiceMock},
            {provide: IframeService, useClass: IframeServiceMock}
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class ColorThemeServiceMock {

}

class IframeServiceMock {

}

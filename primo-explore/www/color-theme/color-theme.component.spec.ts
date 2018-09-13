import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorThemeComponent } from './color-theme.component';

describe('ColorThemeComponent', () => {
  let component: ColorThemeComponent;
  let fixture: ComponentFixture<ColorThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorThemeComponent ]
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

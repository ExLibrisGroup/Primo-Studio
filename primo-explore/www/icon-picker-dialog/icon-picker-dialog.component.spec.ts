import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPickerDialogComponent } from './icon-picker-dialog.component';

describe('IconPickerDialogComponent', () => {
  let component: IconPickerDialogComponent;
  let fixture: ComponentFixture<IconPickerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconPickerDialogComponent ]
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

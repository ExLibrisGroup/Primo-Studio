import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImagesComponent } from './edit-images.component';

describe('EditImagesComponent', () => {
  let component: EditImagesComponent;
  let fixture: ComponentFixture<EditImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditImagesComponent ]
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

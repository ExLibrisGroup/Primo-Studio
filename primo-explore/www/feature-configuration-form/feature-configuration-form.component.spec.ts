import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureConfigurationFormComponent } from './feature-configuration-form.component';

describe('FeatureConfigurationFormComponent', () => {
  let component: FeatureConfigurationFormComponent;
  let fixture: ComponentFixture<FeatureConfigurationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureConfigurationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureConfigurationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

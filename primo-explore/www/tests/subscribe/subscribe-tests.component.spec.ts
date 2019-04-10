import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeTestsComponent } from './subscribe-tests.component';

describe('SubscribeTestsComponent', () => {
  let component: SubscribeTestsComponent;
  let fixture: ComponentFixture<SubscribeTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

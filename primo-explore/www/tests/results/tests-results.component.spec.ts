import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsResultsComponent } from './tests-results.component';

describe('TestsResultsComponent', () => {
  let component: TestsResultsComponent;
  let fixture: ComponentFixture<TestsResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestsResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

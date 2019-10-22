import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsComponent } from './tests.component';
import {MockComponent} from 'ng-mocks';
import {SubscribeTestsComponent} from './subscribe/subscribe-tests.component';
import {TestsService} from './tests.service';

describe('TestsComponent', () => {
  let component: TestsComponent;
  let fixture: ComponentFixture<TestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          TestsComponent,
          MockComponent(SubscribeTestsComponent)
      ],
        providers: [
            {provide: TestsService, useClass: TestsServiceMock}
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class TestsServiceMock {

}

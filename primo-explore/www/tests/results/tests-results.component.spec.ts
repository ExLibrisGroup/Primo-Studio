import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsResultsComponent } from './tests-results.component';
import {MockPipe} from 'ng-mocks';
import {TextFormatPipe} from '../../utils/text-format.pipe';
import {TestsService} from '../tests.service';
import {Observable} from 'rxjs';

describe('TestsResultsComponent', () => {
  let component: TestsResultsComponent;
  let fixture: ComponentFixture<TestsResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          TestsResultsComponent,
          MockPipe(TextFormatPipe)
      ],
        providers: [
            {provide: TestsService, useClass: TestsServiceMock}
        ]
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

class TestsServiceMock {
    getResults() {
        return new Observable(observer => {
            observer.next([]);
            observer.complete();
        });
    }
}

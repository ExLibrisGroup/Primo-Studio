import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeTestsComponent } from './subscribe-tests.component';
import {MockComponent, MockPipe} from 'ng-mocks';
import {MessagesComponent} from '../../messages/messages.component';
import {TextFormatPipe} from '../../utils/text-format.pipe';
import {BusySpinnerComponent} from '../../busy-spinner/busy-spinner.component';
import {HttpClient} from '@angular/common/http';
import {TestsService} from '../tests.service';
import {MatDialog, MatDialogModule} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {EMPTY, Observable} from 'rxjs';

describe('SubscribeTestsComponent', () => {
  let component: SubscribeTestsComponent;
  let fixture: ComponentFixture<SubscribeTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
          MatDialogModule
        ],
      declarations: [
          SubscribeTestsComponent,
          MockComponent(MessagesComponent),
          MockComponent(BusySpinnerComponent),
          MockPipe(TextFormatPipe)
      ],
        providers: [
            {provide: TestsService, useClass: TestsServiceMock}
        ]
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


class TestsServiceMock {
    fetchSuites() {
        return new Observable(observer => {
            observer.next([]);
            observer.complete();
        });
    }

    getSignedSuites() {
        return EMPTY;
    }
}

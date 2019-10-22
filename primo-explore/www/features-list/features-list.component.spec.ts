import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesListComponent } from './features-list.component';
import {MockComponent} from 'ng-mocks';
import {BusySpinnerComponent} from '../busy-spinner/busy-spinner.component';
import {FeaturesService} from '../utils/features.service';
import {IframeService} from '../utils/iframe.service';
import {MatDialog, MatDialogModule} from '@angular/material';
import {Overlay, OverlayModule} from '@angular/cdk/overlay';
import {ConfigurationService} from '../utils/configuration.service';
import {Observable} from 'rxjs';

describe('FeaturesListComponent', () => {
  let component: FeaturesListComponent;
  let fixture: ComponentFixture<FeaturesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            MatDialogModule,
            OverlayModule
        ],
      declarations: [
          FeaturesListComponent,
          MockComponent(BusySpinnerComponent)
      ],
        providers: [
            {provide: FeaturesService, useClass: FeaturesServiceMock},
            {provide: IframeService, useClass: IframeServiceMock},
            {provide: ConfigurationService, useClass: ConfigurationServiceMock}
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class ConfigurationServiceMock {

}

class IframeServiceMock {

}

class FeaturesServiceMock {
    fetchFeaturesData() {
        return new Observable(observer => {
            observer.next({});
            observer.complete();
        })
    }
}

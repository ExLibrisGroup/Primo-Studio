import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FeatureConfigurationFormComponent} from './feature-configuration-form.component';
import {FormlyModule} from '@ngx-formly/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {FeaturesService} from '../utils/features.service';

describe('FeatureConfigurationFormComponent', () => {
    let component: FeatureConfigurationFormComponent;
    let fixture: ComponentFixture<FeatureConfigurationFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormlyModule.forRoot(),
                MatDialogModule
            ],
            declarations: [FeatureConfigurationFormComponent],
            providers: [
                {provide: FeaturesService, useClass: FeaturesServiceMock},
                {provide: MatDialogRef, useValue: {}},
                {provide: MAT_DIALOG_DATA, useValue: {config: {form: []}}}
            ]
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

class FeaturesServiceMock {

}

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ConfigurationFormComponent} from './configuration-form.component';
import {IframeService} from '../utils/iframe.service';
import {ConfigurationService} from '../utils/configuration.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('ConfigurationFormComponent', () => {
    let component: ConfigurationFormComponent;
    let fixture: ComponentFixture<ConfigurationFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                ConfigurationFormComponent
            ],
            providers: [
                {provide: IframeService, useClass: IframeServiceMock},
                {provide: ConfigurationService, useClass: ConfigurationServiceMock}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ConfigurationFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

class IframeServiceMock {
    isUp() {
        return true;
    }
}

class ConfigurationServiceMock {

}

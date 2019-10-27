import {inject, TestBed} from '@angular/core/testing';

import {FeaturesService} from './features.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ConfigurationService} from './configuration.service';
import {Addon} from '../classes/addon';

describe('FeaturesService', () => {
    let service: FeaturesService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                RouterTestingModule
            ],
            providers: [
                FeaturesService,
                {provide: ConfigurationService, useClass: ConfigurationServiceMock}
            ]
        });

        service = TestBed.get(FeaturesService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('should be created', inject([FeaturesService], (service: FeaturesService) => {
        expect(service).toBeTruthy();
    }));

    it('should call "features.json" file from github when fetch features', () => {
        let sendData = [{empty: 'empty'}];
        service.fetchFeaturesData().subscribe(data => {
            expect(data).toEqual(sendData);
        });

        let req = httpMock.expectOne('https://raw.githubusercontent.com/primousers/primostudio/master/features.json');
        expect(req.request.method).toEqual('GET');
        req.flush(sendData);
    });

    it('should add feature', () => {
        let addon = new Addon('npmid', '0.0.1', 'prm-logo-after',
            'none', 'http://github.com/someone/foo', 'nothing',
            'Jane Doe', 'Awesome feature');
        let featureConfig = {some: undefined};
        let sentResponse = {status: 200};
        service.addFeature(addon, featureConfig).subscribe((response) => {
            expect(response).toEqual(sentResponse);
        });

        let req = httpMock.expectOne('/feature');
        expect(req.request.method).toEqual('POST');
        expect(req.request.body).toEqual({
            data: {
                id: 'npmid',
                version: '0.0.1',
                hook: 'prm-logo-after',
                featureConfig: featureConfig
            }});
        req.flush(sentResponse);
    });

    it('should remove feature', () => {
        let npmid = 'npmid';
        let hook = 'some-hook';
        let sentResponse = {status: 200};
        let installedFeatures = [npmid];
        let expectedData = {
            params: {
                id: npmid,
                hook: hook,
                installedFeatures: installedFeatures
            }
        };
        let configurationService: ConfigurationService = TestBed.get(ConfigurationService);
        configurationService.config.installedFeatures = installedFeatures;

        service.removeFeature(npmid, hook).subscribe((response) => {
            expect(response).toEqual(sentResponse);
            expect(configurationService.config.installedFeatures.length).toEqual(0);
        });

        let req = httpMock.expectOne('/remove_feature?installedFeatures=npmid&id=npmid&hook=some-hook');
        expect(req.request.method).toEqual('GET');
        req.flush(sentResponse);
    });
});

class ConfigurationServiceMock {
    _config: any;

    constructor() {
        this._config = {
            installedFeatures: []
        };
    }
    get config() {
        return this._config;
    }
}

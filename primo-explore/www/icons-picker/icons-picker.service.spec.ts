import {TestBed} from '@angular/core/testing';

import {IconsPickerService} from './icons-picker.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {ConfigurationService} from '../utils/configuration.service';
import {Icon, IconType} from '../classes/icon';

describe('IconsPickerService', () => {
    let httpMock: HttpTestingController;
    let service: IconsPickerService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                IconsPickerService,
                {provide: ConfigurationService, useClass: ConfigurationServiceMock}
            ]
        });

        service = TestBed.get(IconsPickerService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should have icons', () => {
        let bodyMock = '<svg><svg id="test" width="24" height="24" viewBox="0 0 24 24" y="0">kookoo balala</svg></svg>';
        let svgMock = new DOMParser().parseFromString(bodyMock, 'application/xml');
        let svgElement: SVGSVGElement = svgMock.querySelector('#test');

        let req = httpMock.expectOne(IconType.PRIMO_UI);
        expect(req.request.method).toEqual('GET');
        req.flush(bodyMock);

        let icons = {
            test: {
                'name': 'test',
                'id': 'test',
                'path': 'kookoo balala',
                'viewBox': svgElement.viewBox
            }
        };

        expect(service.icons).toEqual(icons);
    });

    it('should get icons on "/icons" call', () => {
        let bodyMock = '<svg><svg id="test" width="24" height="24" viewBox="0 0 24 24" y="0">blablabla</svg></svg>';
        let svgMock = new DOMParser().parseFromString(bodyMock, 'application/xml');
        let svgElement: SVGSVGElement = svgMock.querySelector('#test');
        let originalPath = 'kookoo balala';

        let req = httpMock.expectOne('/icons');
        expect(req.request.method).toEqual('GET');
        req.flush(bodyMock);

        let icons = {
            test: {
                'name': 'test',
                'id': 'test',
                'path': 'blablabla',
                'viewBox': svgElement.viewBox
            }
        };

        expect(service.icons).toEqual(icons);
        expect(service.icons.test.path).not.toEqual(originalPath);
    });

    it('should select default icon', () => {
        spyOn(document.head, 'querySelectorAll').and.returnValue([]);
        service.icons = {};
        service.iconSelected('test', new Icon());
        let expectedIcon = new Icon();
        expectedIcon.id = 'test';
        expectedIcon.name = 'test';
        expect(service.icons).toEqual({test: expectedIcon});
    });
});

class ConfigurationServiceMock {

}

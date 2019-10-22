import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {DownloadPackageComponent} from './download-package.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('DownloadPackageComponent', () => {
    let component: DownloadPackageComponent;
    let fixture: ComponentFixture<DownloadPackageComponent>;
    let httpMock: HttpTestingController;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [DownloadPackageComponent]
        })
            .compileComponents();

        httpMock = TestBed.get(HttpTestingController);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DownloadPackageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create "a" tag with download "package.zip"', fakeAsync(() => {
        let downloadPackageElement: HTMLElement = fixture.debugElement.nativeElement;
        let buttonElement: HTMLButtonElement = downloadPackageElement.querySelector('button');
        buttonElement.click();

        let req = httpMock.expectOne('/package');
        expect(req.request.method).toEqual('GET');
        req.flush(new ArrayBuffer(0));

        fixture.detectChanges();

        expect(document.body.querySelector('a[download="package.zip"]')).toBeDefined();

        tick(100);
        fixture.detectChanges();

        expect(document.body.querySelector('a[download="package.zip"]')).toBeNull();
    }));
});

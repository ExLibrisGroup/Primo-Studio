import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ServerComponent} from './server.component';
import {MockComponent, MockDirective} from 'ng-mocks';
import {ConfigurationFormComponent} from '../configuration-form/configuration-form.component';
import {ColorThemeComponent} from '../color-theme/color-theme.component';
import {EditImagesComponent} from '../edit-images/edit-images.component';
import {IconsPickerComponent} from '../icons-picker/icons-picker.component';
import {FeaturesListComponent} from '../features-list/features-list.component';
import {EditorTabComponent} from '../editor-tab/editor-tab.component';
import {EmailPrintEditorComponent} from '../email-print-editor/email-print-editor.component';
import {DownloadPackageComponent} from '../download-package/download-package.component';
import {UploadPackageComponent} from '../upload-package/upload-package.component';
import {TestsComponent} from '../tests/tests.component';
import {OneTimeBindingDirective} from '../utils/one-time-binding.directive';
import {TestsResultsComponent} from '../tests/results/tests-results.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ConfigurationService} from '../utils/configuration.service';
import {IframeService} from '../utils/iframe.service';
import {TestsService} from '../tests/tests.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRoute} from '@angular/router';

describe('ServerComponent', () => {
    let component: ServerComponent;
    let fixture: ComponentFixture<ServerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                RouterTestingModule,
                MatTooltipModule
            ],
            declarations: [
                ServerComponent,
                MockComponent(ConfigurationFormComponent),
                MockComponent(ColorThemeComponent),
                MockComponent(EditImagesComponent),
                MockComponent(IconsPickerComponent),
                MockComponent(FeaturesListComponent),
                MockComponent(EditorTabComponent),
                MockComponent(EmailPrintEditorComponent),
                MockComponent(DownloadPackageComponent),
                MockComponent(UploadPackageComponent),
                MockComponent(TestsComponent),
                MockComponent(TestsResultsComponent),
                MockDirective(OneTimeBindingDirective)
            ],
            providers: [
                {provide: ConfigurationService, useClass: ConfigurationServiceMock},
                {provide: IframeService, useClass: IframeServiceMock},
                {provide: TestsService, useClass: TestsServiceMock}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ServerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should select "Download" tab by click "Download"', () => {
        let componentElement = fixture.debugElement.nativeElement;
        let downloadButton = componentElement.querySelector('[title="Download"] .label');
        downloadButton.click();
        fixture.detectChanges();

        let sidenavContent: HTMLDivElement = componentElement.querySelector('.sidenav-content');

        expect(sidenavContent.children.length).toEqual(1);
        expect(component.selectedTab).toEqual(component.tabs.download);
        expect(sidenavContent.children[0].tagName.toLowerCase()).toEqual("prm-download-package");
    });

    it('should open "Addons" when url contains packageName param', () => {

        let componentElement = fixture.debugElement.nativeElement;
        let activatedRoute = TestBed.get(ActivatedRoute);
        activatedRoute.snapshot.queryParams.packageName = "myName";
        component.ngOnInit();
        fixture.detectChanges();

        let sidenavContent: HTMLDivElement = componentElement.querySelector('.sidenav-content');

        expect(sidenavContent.children.length).toEqual(1);
        expect(component.selectedTab).toEqual(component.tabs.addons);
        expect(sidenavContent.children[0].tagName.toLowerCase()).toEqual("prm-features-list");
    });
});

class ConfigurationServiceMock {

}

class IframeServiceMock {
    isUp() {
        return true;
    }
}

class TestsServiceMock {

}

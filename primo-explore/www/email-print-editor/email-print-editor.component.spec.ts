import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EmailPrintEditorComponent} from './email-print-editor.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MockComponent, MockPipe} from 'ng-mocks';
import {TextFormatPipe} from '../utils/text-format.pipe';
import {MapByPipe} from '../utils/map-by.pipe';
import {FilterByPipe} from '../utils/filter-by.pipe';
import {MatSelectModule} from '@angular/material/select';
import {CodeEditorComponent} from '../code-editor/code-editor.component';
import {BusySpinnerComponent} from '../busy-spinner/busy-spinner.component';
import {ConfigurationService} from '../utils/configuration.service';
import {IframeService} from '../utils/iframe.service';
import {EditorService} from '../editor-tab/editor.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MatDialogModule} from '@angular/material/dialog';
import {EMPTY, Observable} from 'rxjs';
import {CodeFile} from '../classes/code-file';

describe('EmailPrintEditorComponent', () => {
    let component: EmailPrintEditorComponent;
    let fixture: ComponentFixture<EmailPrintEditorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                MatDialogModule,
                MatCheckboxModule,
                MatSelectModule
            ],
            declarations: [
                EmailPrintEditorComponent,
                MockComponent(CodeEditorComponent),
                MockComponent(BusySpinnerComponent),
                MockPipe(TextFormatPipe),
                MockPipe(MapByPipe),
                MockPipe(FilterByPipe)
            ],
            providers: [
                {provide: ConfigurationService, useClass: ConfigurationServiceMock},
                {provide: IframeService, useClass: IframeServiceMock},
                {provide: EditorService, useClass: EditorServiceMock}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EmailPrintEditorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

class ConfigurationServiceMock {
    get config() {
        return {}
    }
}

class IframeServiceMock {
    isAttributesMapInitialized() {
        return EMPTY;
    }
}

class EditorServiceMock {
    private innerMap = new Map<string, CodeFile>();

    initCode(codeFile: CodeFile) {
        this.innerMap.set(codeFile.file_path, codeFile);
        return EMPTY.subscribe();
    }

    saveFile(codeFile: CodeFile) {
        this.innerMap.set(codeFile.file_path, codeFile);
        return EMPTY;
    }

    get codeFiles() {
        return this.innerMap;
    }
}

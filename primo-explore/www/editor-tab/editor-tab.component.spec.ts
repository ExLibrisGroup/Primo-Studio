import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorTabComponent } from './editor-tab.component';
import {MockComponent} from 'ng-mocks';
import {FileTreeComponent} from '../file-tree/file-tree.component';
import {BusySpinnerComponent} from '../busy-spinner/busy-spinner.component';
import {CodeEditorComponent} from '../code-editor/code-editor.component';
import {EditorService} from './editor.service';
import {IframeService} from '../utils/iframe.service';
import {ConfigurationService} from '../utils/configuration.service';
import {Observable} from 'rxjs';
import {CodeFile} from '../classes/code-file';

describe('EditorTabComponent', () => {
  let component: EditorTabComponent;
  let fixture: ComponentFixture<EditorTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          EditorTabComponent,
          MockComponent(FileTreeComponent),
          MockComponent(CodeEditorComponent),
          MockComponent(BusySpinnerComponent)
      ],
        providers: [
            {provide: EditorService, useClass: EditorServiceMock},
            {provide: IframeService, useClass: IframeServiceMock},
            {provide: ConfigurationService, useClass: ConfigurationServiceMock}
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class EditorServiceMock {
    files: any[];

    getFiles() {
        this.files = [];
    }

    getDefaultCodeFile() {
        return new CodeFile('css', '', '\\someFile.css', 0);
    }

    initCode(codeFile) {

    }
}

class IframeServiceMock {

}

class ConfigurationServiceMock {

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeEditorComponent } from './code-editor.component';
import {CodemirrorModule} from 'ng2-codemirror';
import {FormsModule} from '@angular/forms';
import {EditorService} from '../editor-tab/editor.service';
import {CodeFile} from '../classes/code-file';

describe('CodeEditorComponent', () => {
  let component: CodeEditorComponent;
  let fixture: ComponentFixture<CodeEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            CodemirrorModule,
            FormsModule
        ],
      declarations: [ CodeEditorComponent ],
        providers: [
            {provide: EditorService, useClass: EditorServiceMock}
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class EditorServiceMock {
    getDefaultCodeFile() {
        return {}
    }
}

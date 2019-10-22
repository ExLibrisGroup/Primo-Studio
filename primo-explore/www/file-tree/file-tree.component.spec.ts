import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileTreeComponent } from './file-tree.component';
import {MockPipe} from 'ng-mocks';
import {SplitPathPipe} from './split-path.pipe';
import {SliceCustomizationPathPipe} from './slice-customization-path.pipe';
import {ConfigurationService} from '../utils/configuration.service';
import {EditorService} from '../editor-tab/editor.service';

describe('FileTreeComponent', () => {
  let component: FileTreeComponent;
  let fixture: ComponentFixture<FileTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          FileTreeComponent,
          MockPipe(SplitPathPipe),
          MockPipe(SliceCustomizationPathPipe)
      ],
        providers: [
            {provide: ConfigurationService, useClass: ConfigurationServiceMock},
            {provide: EditorService, useClass: EditorServiceMock}
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileTreeComponent);
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

class EditorServiceMock {

}

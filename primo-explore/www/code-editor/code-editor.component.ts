import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {CodeFile} from "../classes/code-file";
import "codemirror/lib/codemirror.js";
import "codemirror/addon/edit/matchbrackets.js";
import "codemirror/addon/edit/closebrackets.js";
import "codemirror/addon/hint/show-hint.js"
import "codemirror/addon/hint/css-hint";
import "codemirror/addon/hint/javascript-hint";
import "codemirror/addon/hint/html-hint";
import "codemirror/mode/css/css.js";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/htmlembedded/htmlembedded";
import "codemirror/mode/xml/xml";
import {CodemirrorComponent} from "ng2-codemirror";
import {EditorService} from "../editor-tab/editor.service";

@Component({
  selector: 'prm-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit, AfterViewInit {

  @Output()
  private save: EventEmitter<CodeFile> = new EventEmitter<CodeFile>();

  @ViewChild('editor')
  private editor: CodemirrorComponent;

  private data: string;
  private _codemirrorOptions: any;
  private _model: CodeFile;
  private _readOnly: boolean = false;

  constructor(private editorService: EditorService){  }

  ngOnInit() {
    this.data = this.model.data;

    this._codemirrorOptions = {
      lineNumbers: true,
      lineWrapping: true,
      matchBrackets: true,
      autoCloseBrackets: true,
      mode: this.model.type,
      value: this.data || '',
      theme: 'primo-studio',
      extraKeys: {
        "Ctrl-Space": "autocomplete",
        "Cmd-Space": "autocomplete"
      }
    };
  }

  ngAfterViewInit(): void {
    this.editor.instance.onSave = () => {
      this.save.emit(this.model)
    }
  }

  get model(): CodeFile {
    return this._model;
  }

  @Input()
  set model(value: CodeFile) {
    if (value !== this._model) {
      if (this._model) {
        if (this._model.type !== value.type) {
          this.editor.instance.setOption('mode', value.type);
        }

        if (this._model.file_path != value.file_path) {
          this._readOnly = this.editorService.readonlyFilesRegex.test(value.file_path);
          if (this._readOnly) {
            this.editor.instance.setOption('readOnly', 'nocursor');
          } else {
            this.editor.instance.setOption('readOnly', false);
          }
        } else if (this._model.version !== value.version) {
          this.data = value.data;
          this.editor.instance.setValue(this.data);
        }
      }

      this._model = value;
    }
  }


  get codemirrorOptions(): any {
    return this._codemirrorOptions;
  }

  set codemirrorOptions(value: any) {
    this._codemirrorOptions = value;
  }

  get readOnly(): boolean {
    return this._readOnly;
  }

  set readOnly(value: boolean) {
    this._readOnly = value;
  }
}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EditorService} from "./editor.service";
import {IframeService} from "../utils/iframe.service";
import {Angulartics2GoogleAnalytics} from "angulartics2/ga";
import {CodeFile} from "../classes/code-file";
import * as CodeMirror from 'codemirror';
import {FileTree} from "../classes/file-tree";
import {ConfigurationService} from "../utils/configuration.service";

@Component({
  selector: 'prm-editor',
  templateUrl: './editor-tab.component.html',
  styleUrls: ['./editor-tab.component.scss']
})
export class EditorTabComponent implements OnInit {
  private inProgress: boolean;
  private expanded: boolean;
  private codeFile: CodeFile;

  @Output()
  private expandTab: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public editorService: EditorService,
              private iframeService: IframeService,
              private analytics: Angulartics2GoogleAnalytics,
              private configurationService: ConfigurationService){
    this.analytics.pageTrack('/');

    this.inProgress= false;
    this.expanded = true;
    this.toggleTab();

    this.editorService.getFiles();
    this.codeFile = this.editorService.getDefaultCodeFile();
    this.editorService.initCode(this.codeFile);
  }

  ngOnInit() {
    CodeMirror.commands.save = (instance) => {
      instance.onSave();
    };
  }

  onSave(data: CodeFile) {
      this.inProgress = true;
      this.editorService.saveFile(data).subscribe((resp)=>{
        if(+resp.status === 200){
          console.log('file "' + data.file_path + '" was saved');
          this.iframeService.refreshNuiIFrame();
        }
      }, (err)=> {
        console.log(err);
      }).add(()=>{
        this.inProgress = false;
      });
      this.analytics.eventTrack('save',{category: 'codeEditor', label: 'single_file: ' + data.file_path});
  }

  get codeFiles(): Map<string, CodeFile>{
    return this.editorService.codeFiles;
  }

  set codeFiles(newArr: Map<string, CodeFile>) {
    this.editorService.codeFiles = newArr;
  }

  toggleTab() {
    this.expanded = !this.expanded;
    this.expandTab.emit(this.expanded);
    this.analytics.eventTrack('expandTab', {category: 'codeEditor', label: this.expanded});
  }

  createTheme(){
    this.inProgress = true;
    this.editorService.createTheme().subscribe((resp)=>{
      if(+resp.status === 200){
        console.log('all files were saved');
        this.iframeService.refreshNuiIFrame();
      }
    }, (err)=> {
      console.log(err);
    }).add(()=>{
      this.inProgress = false;
    });
    this.analytics.eventTrack('save', {category: 'codeEditor', label: 'all_files'});
  }

  selectFile(file: FileTree) {
    let codeFile = FileTree.toCodeFile(file, this.configurationService.config.dirName);
    if (this.editorService.codeFiles.has(codeFile.file_path)) {
      codeFile = this.editorService.codeFiles.get(codeFile.file_path);
    } else {
      this.editorService.initCode(codeFile);
      this.editorService.codeFiles.set(codeFile.file_path, codeFile);
    }
    this.codeFile = codeFile;
  }
}

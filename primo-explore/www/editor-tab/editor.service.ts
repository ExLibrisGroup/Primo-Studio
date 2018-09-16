import { Injectable } from '@angular/core';
import {ConfigurationService} from "../utils/configuration.service";
import {HttpClient} from "@angular/common/http";
import {CodeFile} from "../classes/code-file";
import {FileTree} from "../classes/file-tree";

@Injectable({
  providedIn: 'root'
})
export class EditorService {
  private _codeFiles: Map<string, CodeFile>;
  private readonly _css: CodeFile;
  private _files: FileTree;
  private _readonlyFilesRegex: RegExp;

  constructor(private configurationService:ConfigurationService,
              private $http: HttpClient) {

    this.getFiles();

    this._readonlyFilesRegex = /.*custom(?:1|\.module)?\.(?:css|js)/;

    this._css = new CodeFile('css', '', '\\css\\studio-editor.css', 0);
    this.codeFiles = new Map();

    this.codeFiles.set(this._css.file_path, this._css);
  }

  getFiles() {
    this._files = new FileTree();
    this.$http.get<FileTree>('/file-tree').subscribe( response => {
      this._files = response;
      this._files.children = this._files.children.filter(function f(e) {
        if (e.type !== 'directory')
          return true;
        if (e.name === 'js' || e.name === 'img' || e.name === 'html' || e.name === 'css')
          return true;
        if (e.size) {
          return (e.children = e.children.filter(f)).length;
        }
      });
    }, () => {
      console.log('failed to get all files from server');
    })
  }

  initCode(fileJson: CodeFile) {
    this.$http.post('/code', fileJson, {responseType: 'text'}).subscribe((response) => {
      fileJson.data = response;
      fileJson.version++;
      this.codeFiles.set(fileJson.file_path, fileJson);
    }, () => {
      console.log('failed to get ' + fileJson.type + ' from server. file path: ' + fileJson.file_path);
    });
  }

  get config(){
    return this.configurationService.config;
  }

  get codeFiles(): Map<string, CodeFile> {
    return this._codeFiles;
  }

  set codeFiles(value: Map<string, CodeFile>) {
    this._codeFiles = value;
  }

  saveFile(fileJson) {
    return this.sendFilesToServer([fileJson]);
  }

  createTheme() {
    return this.sendFilesToServer(Array.from(this.codeFiles.values()));
  }

  sendFilesToServer(files) {
    let config = {
      data: {
        code: files
      },
      conf: this.config
    };
    return this.$http.put<any>('/code', config);
  }

  getDefaultCodeFile(): CodeFile {
    return this.codeFiles.get(this._css.file_path);
  }

  get readonlyFilesRegex(): RegExp {
    return this._readonlyFilesRegex;
  }

  set readonlyFilesRegex(value: RegExp) {
    this._readonlyFilesRegex = value;
  }


  get files(): FileTree {
    return this._files;
  }

  set files(value: FileTree) {
    this._files = value;
  }
}

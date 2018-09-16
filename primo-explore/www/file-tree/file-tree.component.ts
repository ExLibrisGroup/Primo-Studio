import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FileTree} from "../classes/file-tree";
import {ConfigurationService} from "../utils/configuration.service";
import {EditorService} from "../editor-tab/editor.service";

@Component({
  selector: 'prm-file-tree',
  templateUrl: './file-tree.component.html',
  styleUrls: ['./file-tree.component.scss']
})
export class FileTreeComponent implements OnInit {

  @Output()
  private fileSelected: EventEmitter<FileTree> = new EventEmitter();

  private _baseDir: FileTree;
  private _root: FileTree = {path: '', name: '', size: 0, type: "directory"};

  constructor(private configurationService: ConfigurationService,
              private editorService: EditorService) { }

  ngOnInit() {
    this._root = this.baseDir;
  }

  @Input()
  set baseDir(file: FileTree) {
    this._baseDir = file;
    this._root = file;
  }

  get baseDir(): FileTree {
    return this._baseDir;
  }

  isDirectory(file: FileTree) : boolean {
    return file.type === 'directory';
  }

  openDirectory(file: FileTree) {
    this._root = file;
  }

  openFile(file: FileTree) {
    this.fileSelected.emit(file);
  }

  setRoot(pathComp: string, root: FileTree = this.baseDir) {
    if (root.name === pathComp) {
      this._root = root;
    } else {
      if (root.children && root.children.length > 0) {
        root.children.forEach(node => this.setRoot(pathComp, node));
      }
    }
  }

  isReadonly(file: FileTree): boolean {
    return this.editorService.readonlyFilesRegex.test(file.path);
  }

  get userId() {
    return this.configurationService.config.dirName;
  }

  get view() {
    return this.configurationService.config.view;
  }


  get root(): FileTree {
    return this._root;
  }

  set root(value: FileTree) {
    this._root = value;
  }
}

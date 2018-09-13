import {CodeFile} from "./code-file";

export class FileTree {
  public name: string;
  public path: string;
  public size: number;
  public type: 'file' | 'directory';
  public extension?: string;
  public children?: FileTree[];

  static toCodeFile(file: FileTree, userId: string): CodeFile {
    return new CodeFile(FileTree.parseExtension(file), '', file.path.split(userId)[1], 0);
  }

  static parseExtension(file: FileTree) {
    switch (file.extension) {
      case '.js':
      case '.ts':
        return 'javascript';
      case '.css':
        return 'css';
      case '.html':
      case '.htm':
        return 'htmlembedded';
      case '.svg':
        return 'xml';
      default:
        return '';
    }
  }
}

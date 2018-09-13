import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceCustomizationPath'
})
export class SliceCustomizationPathPipe implements PipeTransform {

  transform(path: string[]): string[] {
    if (path) {
      return path.slice(2, path.length - 1);
    } else {
      return null;
    }
  }

}

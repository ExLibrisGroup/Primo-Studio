import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitPath'
})
export class SplitPathPipe implements PipeTransform {

  transform(value: string): string[] {
    if (value) {
      return value.split(/[\/\\]/g);
    } else {
      return null;
    }
  }

}

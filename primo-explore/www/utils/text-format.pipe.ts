import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFormat'
})
export class TextFormatPipe implements PipeTransform {

  transform(value: string): string {
      return value
          .trim()
          .split(' ')
          .map(v => v[0].toUpperCase() + v.substr(1).toLowerCase())
          .join(' ');
  }

}

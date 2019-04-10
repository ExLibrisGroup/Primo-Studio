import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringArrayLook'
})
export class StringArrayLookPipe implements PipeTransform {

  transform(values: string[]): string {
    return values.join(', ');
  }

}

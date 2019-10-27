import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapBy'
})
export class MapByPipe implements PipeTransform {

  transform<T,R>(arr: T[], mapBy: string): R[] {
    return arr.map(t => t[mapBy]);
  }

}

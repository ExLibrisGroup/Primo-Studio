import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform<T>(arr: T[], filterBy: string): T[] {
    return arr.filter(t => t[filterBy]);
  }

}

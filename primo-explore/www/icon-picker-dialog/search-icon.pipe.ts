import { Pipe, PipeTransform } from '@angular/core';
import {Icon} from "../classes/icon";

@Pipe({
  name: 'searchIcon'
})
export class SearchIconPipe implements PipeTransform {

  transform(value: Icon[], search: string): any {
    if (!search) {
      return value;
    }

    const searchValue = this.clean(search);

    return value.filter(icon => {
      let keep = false;
      if (icon.name) {
        keep = keep || this.clean(icon.name).includes(searchValue);
      }
      if (icon.id) {
        keep = keep || this.clean(icon.id).includes(searchValue);
      }
      if (icon.filter) {
        keep = keep || icon.filter.some(value => this.clean(value).includes(searchValue));
      }
      if (icon.aliases) {
        keep = keep || icon.aliases.some(value => this.clean(value).includes(searchValue));
      }
      return keep;
    });
  }

  clean(value: string): string {
    return value.trim().toLowerCase();
  }

}

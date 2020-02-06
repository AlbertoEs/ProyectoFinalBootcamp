import { Pipe, PipeTransform } from '@angular/core';
import { FilterPipe } from '../filter/filter.pipe';

@Pipe({
  name: 'chronology'
})
export class ChronologyPipe implements PipeTransform {

  constructor (private filterPipe: FilterPipe) { }

  transform(value: any, ...args: any): any {

    return value;
  }

  sortAsc(value: any) {
    value.sort(this.compareAsc);

    return value;
  }

  sortDesc(value: any) {
    value.sort(this.compareDesc);

    return value;
  }

  private compareAsc( a, b ) {
    if ( a.age == null)
      return 1;

    if ( b.age == null)
      return -1;

    if ( a.age < b.age ){
      return -1;
    }
    if ( a.age > b.age ){
      return 1;
    }
    return 0;
  }

  private compareDesc( a, b ) {
    if ( a.age == null)
      return 1;

    if ( b.age == null)
      return -1;


    if ( a.age > b.age ){
      return -1;
    }
    if ( a.age < b.age ){
      return 1;
    }
    return 0;
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { FilterPipe } from '../filter/filter.pipe';

@Pipe({
  name: 'chronology'
})
export class ChronologyPipe implements PipeTransform {

  constructor (private filterPipe: FilterPipe) { }

  transform(value: any, ...args: any): any {
    
    // Primero filtramos los datos que nos vienen
    //this.filterPipe.transform(value, )
    return null;
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { HousesService } from 'src/app/Providers/houses/houses.service';
import { IListUnifier } from 'src/app/interfaces/IListUnifier';
import { ObjectUnifierPipe } from '../objectUnifier/object-unifier.pipe';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  constructor(private objectUnifier: ObjectUnifierPipe) {}

  transform(originalArray: any[], args: any[]): any {
    return null;
  }

  /**
   * Filtra un array de un listado (casas o personajes) a partir de los elementos 
   * pasados por parámetro
   * @param originalArray 
   * @param args 
   */
  public filterListJson(originalArray: any[], args: any[]): any {
    let returnArray: any[] = [];

    let valueToFilter = '';

    if (!isNullOrUndefined(args) && !isNullOrUndefined(args['searchFilter']))
      valueToFilter = args['searchFilter'];

    for (let i = 0; i < originalArray.length; i++) {

      let valueFiltered = this.filterJson(originalArray[i], valueToFilter);
      !isNullOrUndefined(valueFiltered) ? returnArray.push(valueFiltered) : null;

    }

    return returnArray;
  }


  private filterJson(object: any, valueToFilter: string) {

    let objectReturn = this.objectUnifier.unifyLists(object);

    if (objectReturn.name.toLowerCase().indexOf(valueToFilter.toLowerCase()) === -1) {
      // El objeto NO concuerda con el filtro

      objectReturn = null;
    }

    return objectReturn;
  }
}

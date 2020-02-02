import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { HousesService } from 'src/app/Providers/houses/houses.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  constructor(private housesService: HousesService) {}

  transform(originalArray: any[], args: any[]): any {
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

  


  filterJson(object: any, valueToFilter: string) {

    interface IElement {
      name: string;
      image: string;
    }

    let objectReturn: IElement = {
      name: object.name,
      image: this.housesService.getImage(object)
    }

    if (objectReturn.name.toLowerCase().indexOf(valueToFilter.toLowerCase()) === -1) {
      // El objeto NO concuerda con el filtro

      objectReturn = null;
    }

    return objectReturn;
  }
}

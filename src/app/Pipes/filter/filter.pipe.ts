import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

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
      image: this.getImage(object)
    }

    if (objectReturn.name.toLowerCase().indexOf(valueToFilter.toLowerCase()) === -1) {
      // El objeto NO concuerda con el filtro

      objectReturn = null;
    }

    return objectReturn;
  }

  getImage(object: any) {

    let image = '../../../assets/img/escudo-espania.png';
    if (!isNullOrUndefined(object.logoURL))
      image = object.logoURL;
    else if (!isNullOrUndefined(object.image))
      image = object.image;

    return image;
  }
}

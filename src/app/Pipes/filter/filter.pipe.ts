import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(originalArray: any[], ...args: any[]): any {
    let returnArray: any[] = [];

    interface IElement {
      name: string;
      image: number;
    }

    let valueToFilter = args['valueToFilter'];

    if (isNullOrUndefined(valueToFilter))
      valueToFilter = '';

    for (let i = 0; i < originalArray.length; i++) {

      let valueFiltered = this.filterJson(originalArray[i], valueToFilter);
      !isNullOrUndefined(valueFiltered) ? returnArray.push(valueFiltered) : null;

    }

    return returnArray;
  }

  


  filterJson(object: any, valueToFilter: string) {

    let objectReturn = null;

    // Convierto a JSON el objeto
    let objectString = JSON.stringify(object);

    if (objectString.indexOf(valueToFilter) !== -1) {

      let image = '../../../assets/img/escudo-espania.png';
      if (!isNullOrUndefined(object.logoURL))
        image = object.logoURL;
      else if (!isNullOrUndefined(object.image))
        image = object.image;

      let element: IElement = {
        name: object.name,
        image: image
      }

      objectReturn = element;
    }

    return objectReturn;
  }
}

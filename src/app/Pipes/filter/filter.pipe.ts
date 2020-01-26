import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(originalArray: any[], ...args: any[]): any {
    let returnArray: any[] = [];

    const valueToFilter = args['valueToFilter'];

    if (valueToFilter !== null) {
      for (let i = 0; i < originalArray.length; i++) {

        // Convierto a JSON el objeto
        let objetoJSON = JSON.stringify(originalArray[i]);

        if (objetoJSON.indexOf(valueToFilter) !== -1) {
          returnArray.push(JSON.parse(objetoJSON));
        }
      }

      return returnArray;

    } else {
      return originalArray;
    }
  }
}

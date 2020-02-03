import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { ValueTransformer } from '@angular/compiler/src/util';
import { ConstantsService } from 'src/app/Providers/constants/constants.service';
import { HousesService } from 'src/app/Providers/houses/houses.service';
import { DatePipe } from '@angular/common';
import { IListUnifier } from 'src/app/interfaces/IListUnifier';
import { IDetailsUnifier } from 'src/app/interfaces/IDetailsUnifier';

@Pipe({
  name: 'objectUnifier'
})
export class ObjectUnifierPipe implements PipeTransform {

  constructor(private consts: ConstantsService,
              //private housesService: HousesService,
              private datePipe: DatePipe) { }

  transform(value: any, args: any): any {
    return null;
  }

  /**
   * Método que unifica los objetos devueltos por las API de personajes y casas
   * para devolver un único objeto para pintar en el componente list
   * @param object 
   */
  public unifyLists(object: any) {

    let objectReturn: IListUnifier = {
      name: object.name,
      age: !isNullOrUndefined(object.age) ? object.age.age : 0,
      image: this.getCharacterOrHouseImage(object)
    }

    return objectReturn;
  }

  /**
   * Método que unifica los objetos devueltos por las API de personajes y casas
   * para devolver un único objeto para pintar en el componente details
   * @param value 
   * @param args 
   */
  public unifyDetails(value: any, args: any) {

    if (!isNullOrUndefined(args) && !isNullOrUndefined(args.page)) {

      const page = args.page;

      if (page === this.consts.Characters) {
        return this.fillObject(value, page, args.houseData);
      } else {
        return this.fillObject(value, page, null);
      }
      
    } else {
      return value;
    }
  }

  /**
   * Método que a partir de un objeto de casas o de personajes
   * devuelve su imagen en caso de que exista. Si no existe, devuelve una imagen predefinida
   * @param object 
   */
  public getCharacterOrHouseImage(object: any): string {

    let image = 'assets/img/escudo-espania.png';

    if (!isNullOrUndefined(object)) {
      
      if (!isNullOrUndefined(object.logoURL))
        image = object.logoURL;
      else if (!isNullOrUndefined(object.image))
        image = object.image;
    }

    return image;
  }


  private fillObject(value: any, page: string, houseData: any) {

    let returnObject: IDetailsUnifier = {
      image: '',
      title: '',
      col1: {
        title: '',
        content: []
      },
      col2: {
        title: '',
        content: []
      },
      col3: {
        title: '',
        content: []
      },
      col4: {
        title: '',
        content: []
      },
      col5: {
        title: '',
        content: []
      },
      col6: {
        title: '',
        content: []
      }
    };

    returnObject.image        = this.getCharacterOrHouseImage(value);
    returnObject.title        = value.name;

    returnObject.col1.title   = (page === this.consts.Characters) ? 'house' : 'sigil';
    returnObject.col2.title   = (page === this.consts.Characters) ? 'allegiances' : 'seat';
    returnObject.col3.title   = (page === this.consts.Characters) ? 'appearances' : 'region';
    returnObject.col4.title   = (page === this.consts.Characters) ? 'father' : 'allegiances';
    returnObject.col5.title   = (page === this.consts.Characters) ? 'decendents' : 'religions';
    returnObject.col6.title   = (page === this.consts.Characters) ? 'titles' : 'foundation';

    returnObject.col1.content = (page === this.consts.Characters) ? this.getHouseImage(houseData) : [value.sigil];
    returnObject.col2.content = (page === this.consts.Characters) ? value.allegiances : value.seat;
    returnObject.col3.content = (page === this.consts.Characters) ? value.appearances : value.region;
    returnObject.col4.content = (page === this.consts.Characters) ? [value.father] : value.allegiance;
    returnObject.col5.content = (page === this.consts.Characters) ? value.siblings : value.religion;
    returnObject.col6.content = (page === this.consts.Characters) ? value.titles : [this.datePipe.transform(value.createdAt, 'dd/MM/yyyy')];

    return returnObject;
  }



  private getHouseImage(houseData: any): any {
    const imageSrc = this.getCharacterOrHouseImage(houseData[0]);

    return `<img src="${imageSrc}" alt="${!isNullOrUndefined(houseData[0]) && !isNullOrUndefined(houseData[0].name) ? houseData[0].name : 'No house data'}" class="b-details__content-image" />`;
  }
}

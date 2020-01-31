import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { ValueTransformer } from '@angular/compiler/src/util';

@Pipe({
  name: 'objectUnifier'
})
export class ObjectUnifierPipe implements PipeTransform {

  constructor(private consts: ConstantsService) { }

  transform(value: any, args: any[]): any {

    interface IElement {
      image: string,
      detailsTitle: string,
      col1: {
        title: string,
        content: any[]
      },
      col2: {
        title: string,
        content: any[]
      },
      col3: {
        title: string,
        content: any[]
      },
      col4: {
        title: string,
        content: any[]
      },
      col5: {
        title: string,
        content: any[]
      },
      col6: {
        title: string,
        content: any[]
      }
    }

    let returnObject: IElement;
    
    if (!isNullOrUndefined(args) && !isNullOrUndefined(args.page)) {

      const page = rgs.page;

      returnObject.image        = (page === consts.Characters) ? value.image : value.logoURL;
      returnObject.detailsTitle = value.name;

      returnObject.col1.title   = (page === consts.Characters) ? 'house' : 'sigil';
      returnObject.col2.title   = (page === consts.Characters) ? 'allegiances' : 'seat';
      returnObject.col3.title   = (page === consts.Characters) ? 'appearances' : 'region';
      returnObject.col4.title   = (page === consts.Characters) ? 'father' : 'allegiances';
      returnObject.col5.title   = (page === consts.Characters) ? 'decendents' : 'religions';
      returnObject.col6.title   = (page === consts.Characters) ? 'titles' : 'foundation';

      returnObject.col1.content = (page === consts.Characters) ? '<img src="${value.image}" alt="${value.name}" />' : value.sigil;
      returnObject.col2.content = (page === consts.Characters) ? value.allegiances : value.seat;
      returnObject.col3.content = (page === consts.Characters) ? value.appearances : value.region;
      returnObject.col4.content = (page === consts.Characters) ? value.father : value.allegiances;
      returnObject.col5.content = (page === consts.Characters) ? value.siblings : value.religion;
      returnObject.col6.content = (page === consts.Characters) ? value.titles : value.createdAt;

      return returnObject;
    } else {
      return value;
    }
  }
}

import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  private _filterValue: ReplaySubject<any> = new ReplaySubject(1);

  get getFilter() {
    return this._filterValue;
  }

  setFilter(filter: any) {
    this._filterValue.next(filter);
  }
}

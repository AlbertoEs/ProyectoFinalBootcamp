import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  private _filterValue: ReplaySubject<string> = new ReplaySubject(1);

  get getFilter() {
    return this._filterValue;
  }

  setFilter(filter: string) {
    this._filterValue.next(filter);
  }
}

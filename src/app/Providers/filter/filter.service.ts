import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  private _filterValue: ReplaySubject<any> = new ReplaySubject(1);

  get getFilterValue() {
    return this._fileDetail;
  }

  public setFilterValue(filter: any) {
    this._fileDetail = filter;
  }
}

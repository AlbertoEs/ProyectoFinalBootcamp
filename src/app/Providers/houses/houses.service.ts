import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  private apiUrl = "https://api.got.show/api/show/houses";

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any> {
    let observable: Observable<any> = this.httpClient.get(this.apiUrl);
    return observable;   
  }
}

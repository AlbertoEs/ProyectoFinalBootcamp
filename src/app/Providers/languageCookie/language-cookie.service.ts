import { Injectable } from '@angular/core';
import { ConstantsService } from '../constants/constants.service';
import { CookieService } from 'ngx-cookie-service';
import { ReplaySubject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageCookieService {

  private readonly defaultLanguage: string = this.consts.Spanish;

  constructor(private consts: ConstantsService, private cookieService: CookieService) { }

  // Comprueba si la cookie existe. Si es el caso retorna el valor, y en caso contrario la crea en español
  getValue() {

    if(this.cookieService.check(this.consts.CookieName))
      return this.cookieService.get(this.consts.CookieName);
    else {
      this.createCookie(this.defaultLanguage);
      return this.getValue();
    }
  }

  createCookie(language: string) {
    this.cookieService.set(this.consts.CookieName, language, this.nextYear(), '/');
  }

  checkCookie() {
    return this.cookieService.check(this.consts.CookieName);
  }

  // Retorna la fecha actual añadiéndole un año
  private nextYear() {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    var nextYear = new Date(year + 1, month, day);

    return nextYear;
  }
}

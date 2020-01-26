import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConstantsService {

    constructor() { }

    // Traductor pipe constants
    public readonly Capitalized = 'CAPITALIZED';
    public readonly Plural = 'PLURAL';

    public readonly Characters = 'CHARACTERS';
    public readonly Houses = 'HOUSES';

    public readonly CookieName = 'languageCookie';
    public readonly Spanish = 'spanish';
    public readonly English = 'english';
}

import { Pipe, PipeTransform } from "@angular/core";
import jsonTraductor from './traductor.json';
import { LanguageCookieService } from '../../Providers/languageCookie/language-cookie.service.js';
import { ConstantsService } from '../../Providers/constants/constants.service.js';
import { TitleCasePipe } from '@angular/common';

@Pipe({
	name: 'traductor',
	pure: false
})
export class TraductorPipe implements PipeTransform {

	public language: string;

	constructor(private languageService: LanguageCookieService, 
				private consts: ConstantsService,
				private titlecase: TitleCasePipe) { }

	executeCommands(value: string ,commands: string[]) {
		
		let returnValue: string;

		for (let i = 0; i < commands.length; i++) {
			let command = commands[i];

			switch(command) {
				case this.consts.Capitalized: // CAPITALIZED
					returnValue = this.titlecase.transform(value);
					break;
			}
		}

		return returnValue;
	}

	transform(value: string, ...commands: string[]): string {

		let traducedValue: string = value;

		try {

			this.language = this.languageService.getValue();

			// Búsqueda del valor en el idioma deseado en el Json
			traducedValue = jsonTraductor[this.language][value];

			traducedValue = this.executeCommands(traducedValue, commands);
		
		} catch(ex) {
			console.error(value + ' cant be translate');
		} finally {
			return traducedValue;
		}
	}
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IAppInputVar } from 'src/app/interfaces/IAppInputVar';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	/*@Output() navVariables = new EventEmitter<IAppInputVar>();

	constructor() {
		this.navVariables.emit({
			showFilter: false,
			showTotalFilter: false, 
			showReturnIcon: false,
			showHomeIcon: false,
			showNavBottom: true,
			bemClass: 'b-home'
		});
	}
	*/
	ngOnInit() {
		
	}

}

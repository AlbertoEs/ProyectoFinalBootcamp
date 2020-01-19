import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	public numbers: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,234,234,2342,3423,423,423,42,34,234,234,23,423,423,423,4,234,23,423,423,42,34,23,534,5,34,5,345,34,5345,345,345,345,34,5];

	constructor() { }

	ngOnInit() {
	}

}

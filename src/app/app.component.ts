import { Component, Output } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Game Of Front';

    public showFilter: boolean = false;
    public showTotalFilter: boolean = false;
    public showReturnIcon: boolean = false;
    public showHomeIcon: boolean = false;

    public showNavBottom: boolean = false;

    public bemClass: string = '';

    constructor (private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {

        this.router.events.subscribe((event) => {
            if(event instanceof NavigationEnd) {
                let snapshot = this.route.root.firstChild.snapshot;

                let nameParam = this.router.url.split('/')[2];

                if (isNullOrUndefined(nameParam))
                    this.changeVariables(snapshot.data['page']);
                else
                    this.changeVariables(snapshot.data['pageDetails']);
            }
        });
    }

    changeVariables(route: string) {
        try {
            switch (route) {
                case 'home':
                    this.showFilter = false;
                    this.showTotalFilter = false;
                    this.showReturnIcon = false;
                    this.showHomeIcon = false;
                    this.showNavBottom = true;
                    this.bemClass = 'b-home';
                    break;
                case 'charactersList':
                    this.showFilter = true;
                    this.showTotalFilter = false;
                    this.showReturnIcon = false;
                    this.showHomeIcon = true;
                    this.showNavBottom = true;
                    this.bemClass = 'b-list';
                    break;
                case 'housesList':
                    this.showFilter = true;
                    this.showTotalFilter = false;
                    this.showReturnIcon = false;
                    this.showHomeIcon = true;
                    this.showNavBottom = true;
                    this.bemClass = 'b-list';
                    break;
                case 'charactersDetails':
                    this.showFilter = false;
                    this.showTotalFilter = false;
                    this.showReturnIcon = true;
                    this.showHomeIcon = true;
                    this.showNavBottom = false;
                    this.bemClass = 'b-details';
                    break;
                case 'housesDetails':
                    this.showFilter = false;
                    this.showTotalFilter = false;
                    this.showReturnIcon = true;
                    this.showHomeIcon = true;
                    this.showNavBottom = false;
                    this.bemClass = 'b-details';
                    break;
                case 'chronology':
                    this.showFilter = true;
                    this.showTotalFilter = false;
                    this.showReturnIcon = false;
                    this.showHomeIcon = true;
                    this.showNavBottom = true;
                    this.bemClass = 'b-chronology';
                    break;
            }
        } catch (ex) {
            console.error ('route no tiene el formato apropiado');
        }
    }
}

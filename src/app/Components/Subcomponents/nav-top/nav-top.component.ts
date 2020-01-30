import { Component, OnInit, Input, Output } from '@angular/core';
import { ConstantsService } from 'src/app/Providers/constants/constants.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LanguageCookieService } from 'src/app/Providers/languageCookie/language-cookie.service';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.scss']
})
export class NavTopComponent implements OnInit {

    @Input() showFilter: boolean = true;
    @Input() showTotalFilter: boolean = false;
    @Input() showReturnIcon: boolean = true;
    @Input() showHomeIcon: boolean = true;

    @Output() outSearchFilter = new EventEmitter<string>();
    @Output() outHomeFilter = new EventEmitter<string>();
    @Output() outAgeFilter = new EventEmitter<string>();

    public filterForm = new FormGroup({
        searchFilter: new FormControl(''),
        homeFilter: new FormControl(''),
        ageFilter: new FormControl('')
    });
    

    constructor(private formBuilder: FormBuilder, 
                public constants: ConstantsService,
                private languajeCookie: LanguageCookieService ) { }

    public ngOnInit() {
        //this.buildForm();
        this.onChangeFilter();
    }

    onChangeFilter() {
        this.filterForm.valueChanges.subscribe(val => {
            this.outSearchFilter.emit(val.searchFilter)
        });
    }

    // Traductor
    changeLanguaje($event, language) {
        this.languajeCookie.createCookie(language);
    }

}

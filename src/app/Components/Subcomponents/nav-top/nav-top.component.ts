import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConstantsService } from 'src/app/Providers/constants/constants.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LanguageCookieService } from 'src/app/Providers/languageCookie/language-cookie.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.scss']
})
export class NavTopComponent implements OnInit {

    @Input() showFilter: boolean = false;
    @Input() showTotalFilter: boolean = false;
    @Input() showReturnIcon: boolean = false;
    @Input() showHomeIcon: boolean = false;

    @Output() changeFilter = new EventEmitter<string>();

    public filterForm = new FormGroup({
        searchFilter: new FormControl(''),
        homeFilter: new FormControl(''),
        ageFilter: new FormControl('')
    });
    

    constructor(private formBuilder: FormBuilder, 
                public constants: ConstantsService,
                private languajeCookie: LanguageCookieService,
                private location: Location) { }

    public ngOnInit() {
        //this.buildForm();
        this.onChangeFilter();
    }

    onChangeFilter() {
        this.filterForm.valueChanges.subscribe(val => {
            this.changeFilter.emit(val);
        });
    }

    // Traductor
    changeLanguaje($event, language) {
        this.languajeCookie.createCookie(language);
        return false;
    }

    goBack() {
        this.location.back();
        return false;
    }

}

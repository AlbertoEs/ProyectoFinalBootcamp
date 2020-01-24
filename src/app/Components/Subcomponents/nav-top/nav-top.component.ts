import { Component, OnInit, Input } from '@angular/core';
import { ConstantsService } from 'src/app/Providers/constants/constants.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.scss']
})
export class NavTopComponent implements OnInit {

    @Input() showFilter: boolean = true;
    @Input() showTotalFilter: boolean = true;
    @Input() showReturnIcon: boolean = true;
    @Input() showHomeIcon: boolean = true;

    public filterForm: FormGroup = new FormGroup({
        searchFilter: new FormControl(''),
        homeFilter: new FormControl(''),
        ageFilter: new FormControl('')
    });

    constructor(private formBuilder: FormBuilder, 
                public constants: ConstantsService ) { }

    public ngOnInit() {
        //this.buildForm();
    }

}

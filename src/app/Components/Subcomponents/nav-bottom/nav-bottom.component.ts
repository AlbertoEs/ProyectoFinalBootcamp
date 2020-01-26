import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/Providers/constants/constants.service';

@Component({
  selector: 'app-nav-bottom',
  templateUrl: './nav-bottom.component.html',
  styleUrls: ['./nav-bottom.component.scss']
})
export class NavBottomComponent implements OnInit {

  constructor(public constants: ConstantsService) { }

  ngOnInit() {
  }

}

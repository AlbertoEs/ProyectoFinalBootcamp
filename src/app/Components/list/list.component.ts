import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConstantsService } from 'src/app/Providers/constants/constants.service';
import { CharactersService } from 'src/app/Providers/characters/characters.service';
import { FilterPipe } from 'src/app/Pipes/filter/filter.pipe';
import { Router, ActivatedRoute } from '@angular/router';
import { HousesService } from 'src/app/Providers/houses/houses.service';
import { IAppInputVar } from 'src/app/interfaces/IAppInputVar';
import { FilterService } from 'src/app/Providers/filter/filter.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private typeOfList: string; // Characters o Houses
  public elementsList = [];

  @Output() navVariables = new EventEmitter<IAppInputVar>();

  constructor(public consts: ConstantsService,
              private characterService: CharactersService,
              private housesService: HousesService,
              private filterPipe: FilterPipe,
              public router: Router,
              private filterService: FilterService) 
  {
    if (this.router.url.indexOf('characters') !== -1) 
      this.typeOfList = consts.Characters;
    else
      this.typeOfList = consts.Houses;

    this.navVariables.emit({
			showFilter: true,
			showTotalFilter: false, 
			showReturnIcon: false,
			showHomeIcon: true,
			showNavBottom: true,
      bemClass: 'b-list'
		});
  }


  ngOnInit() {
    this.getFilterValues(); 
    this.drawElements(null);
  }

  getFilterValues() {
    this.filterService.getFilter.subscribe(filter => {
      console.log(filter);
      this.drawElements (filter);
    });
  }

  drawElements (filter: any) {
    document.querySelector('.lds-ellipsis__container').classList.add("show-loader");
    if (this.typeOfList === this.consts.Characters) {
      this.getCharacters(filter);
    } else if (this.typeOfList === this.consts.Houses) {
      this.getHouses(filter);
    }
  }

  getCharacters(filterValue: any) {

    this.characterService.getData().subscribe(
      (data) => {
        this.elementsList = this.filterPipe.filterListJson(data, filterValue);
        document.querySelector('.lds-ellipsis__container').classList.add("hide-loader");
      }   
    );

  }


  getHouses(filterValue: any) {

    this.housesService.getData().subscribe(
      (data) => {
        this.elementsList = this.filterPipe.filterListJson(data, filterValue);
        document.querySelector('.lds-ellipsis__container').classList.add("hide-loader");
      }   
    );

  }

}

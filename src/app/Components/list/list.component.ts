import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/Providers/constants/constants.service';
import { CharactersService } from 'src/app/Providers/characters/characters.service';
import { FilterPipe } from 'src/app/Pipes/filter/filter.pipe';
import { Router, ActivatedRoute } from '@angular/router';
import { HousesService } from 'src/app/Providers/houses/houses.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private typeOfList: string; // Characters o Houses
  public elementsList = [];

  constructor(public consts: ConstantsService,
              private characterService: CharactersService,
              private housesService: HousesService,
              private filter: FilterPipe,
              public router: Router) 
  {
    if (this.router.url.indexOf('characters') !== -1) 
      this.typeOfList = consts.Characters;
    else
      this.typeOfList = consts.Houses;
  }


  ngOnInit() {
    this.drawElements(null);
  }

  getFilterValues(filter: any) {
    console.log(filter);
    this.drawElements(filter);
  }

  drawElements (filter: any) {
    if (this.typeOfList === this.consts.Characters) {
      this.getCharacters(filter);
    } else if (this.typeOfList === this.consts.Houses) {
      this.getHouses(filter);
    }
  }

  getCharacters(filter: any) {

    this.characterService.getData().subscribe(
      (data) => {
        this.elementsList = this.filter.transform(data, filter);
      }   
    );

  }


  getHouses(filter: any) {

    this.housesService.getData().subscribe(
      (data) => {
        this.elementsList = this.filter.transform(data, filter);
      }   
    );

  }

}

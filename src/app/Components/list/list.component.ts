import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/Providers/constants/constants.service';
import { CharactersService } from 'src/app/Providers/characters/characters.service';
import { FilterPipe } from 'src/app/Pipes/filter/filter.pipe';
import { Router } from '@angular/router';

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
              private filter: FilterPipe,
              private router: Router) 
  {
    if (this.router.url.indexOf('characters') !== -1) 
      this.typeOfList = consts.Characters;
    else
      this.typeOfList = consts.Houses;
  }



  ngOnInit() {
    if (this.typeOfList === this.consts.Characters) {
      this.getCharacters(null);
    }
  }

  getCharacters(filter: string) {

    this.characterService.getData().subscribe(
      (data) => {
        this.elementsList = this.filter.transform(data, filter);
      }   
    );

  }



}

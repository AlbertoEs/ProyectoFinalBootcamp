import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/Providers/characters/characters.service';
import { FilterPipe } from 'src/app/Pipes/filter/filter.pipe';

@Component({
  selector: 'app-chronology',
  templateUrl: './chronology.component.html',
  styleUrls: ['./chronology.component.scss']
})
export class ChronologyComponent implements OnInit {

  public characterList: any[];

  constructor(private characterService: CharactersService,
              private filter: FilterPipe) { }

  ngOnInit() {
    this.getCharacters(null);
  }

  getCharacters(filter: any) {

    this.characterService.getData().subscribe(
      (data) => {
        this.characterList = this.filter.filterListJson(data, filter);
      }   
    );

  }

}

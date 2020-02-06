import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CharactersService } from 'src/app/Providers/characters/characters.service';
import { FilterPipe } from 'src/app/Pipes/filter/filter.pipe';
import { IAppInputVar } from 'src/app/interfaces/IAppInputVar';
import { ChronologyPipe } from 'src/app/Pipes/chronology/chronology.pipe';
import { FilterService } from 'src/app/Providers/filter/filter.service';

@Component({
  selector: 'app-chronology',
  templateUrl: './chronology.component.html',
  styleUrls: ['./chronology.component.scss']
})
export class ChronologyComponent implements OnInit {

  public characterList: any[];

  private filter: any;
  public minEdad: number;

  public sortAsc: boolean;

  @Output() navVariables = new EventEmitter<IAppInputVar>();

  constructor(private characterService: CharactersService,
              private filterPipe: FilterPipe,
              private chronologyPipe: ChronologyPipe,
              private filterService: FilterService) {

    this.sortAsc = true;
    
    this.navVariables.emit({
			showFilter: true,
			showTotalFilter: false, 
			showReturnIcon: false,
			showHomeIcon: true,
			showNavBottom: true,
      bemClass: 'b-chronology'
		});
  }

  changeSort() {
    this.sortAsc = !this.sortAsc;
    this.getCharacters(this.filter);
    return false;
  }

  ngOnInit() {
    this.getCharacters(null);
    this.getFilterValues();
  }

  getFilterValues() {
    this.filterService.getFilter.subscribe(filter => {
      this.filter = filter;
      this.getCharacters(this.filter);
    });
  }

  getCharacters(filter: any) {

    this.characterService.getData().subscribe(
      (data) => {
        this.characterList = this.filterPipe.filterListJson(data, filter);

        if (this.sortAsc) {
          this.characterList = this.chronologyPipe.sortAsc(this.characterList);
          this.minEdad = 0;
        } else {
          this.characterList = this.chronologyPipe.sortDesc(this.characterList);
          this.minEdad = this.characterList[0].age;
        }
      }   
    );

  }

}

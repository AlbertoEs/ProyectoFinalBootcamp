import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CharactersService } from 'src/app/Providers/characters/characters.service';
import { FilterPipe } from 'src/app/Pipes/filter/filter.pipe';
import { IAppInputVar } from 'src/app/interfaces/IAppInputVar';

@Component({
  selector: 'app-chronology',
  templateUrl: './chronology.component.html',
  styleUrls: ['./chronology.component.scss']
})
export class ChronologyComponent implements OnInit {

  public characterList: any[];

  @Output() navVariables = new EventEmitter<IAppInputVar>();

  constructor(private characterService: CharactersService,
              private filter: FilterPipe) {
    
    this.navVariables.emit({
			showFilter: true,
			showTotalFilter: false, 
			showReturnIcon: false,
			showHomeIcon: true,
			showNavBottom: true,
      bemClass: 'b-chronology'
		});
  }

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

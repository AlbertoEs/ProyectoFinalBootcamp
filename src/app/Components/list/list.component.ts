import { Component, OnInit, Input } from '@angular/core';
import { ConstantsService } from 'src/app/Providers/constants/constants.service';
import { CharactersService } from 'src/app/Providers/characters/characters.service';
import { FilterPipe } from 'src/app/Pipes/filter/filter.pipe';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() typeOfList: string; // Characters o Houses
  public elementsList = [];

  constructor(public consts: ConstantsService,
              private characterService: CharactersService,
              private filter: FilterPipe) { }



  ngOnInit() {
    console.log(this.typeOfList);

    if (this.typeOfList === this.consts.Characters) {
      this.getCharacters(null);
    }
  }

  getCharacters(filter: string) {

    this.characterService.getData().subscribe(
      (data) => {
        console.log(data);
        this.elementsList = this.filter.transform(data, filter);
      }   
    );

  }



}

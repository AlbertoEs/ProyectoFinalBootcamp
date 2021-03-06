import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConstantsService } from 'src/app/Providers/constants/constants.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ObjectUnifierPipe } from 'src/app/Pipes/objectUnifier/object-unifier.pipe';
import { CharactersService } from 'src/app/Providers/characters/characters.service';
import { HousesService } from 'src/app/Providers/houses/houses.service';
import { IAppInputVar } from 'src/app/interfaces/IAppInputVar';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public details: any;

  public typeOfDetail: string;
  public paramName: string;

  private args: any;

  @Output() navVariables = new EventEmitter<IAppInputVar>();

  constructor(public consts: ConstantsService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private objectUnifier: ObjectUnifierPipe,
              private characterService: CharactersService,
              private housesService: HousesService) {

    if (this.router.url.indexOf('characters') !== -1) 
      this.typeOfDetail = consts.Characters;
    else
      this.typeOfDetail = consts.Houses;

    this.args = {
      page: this.typeOfDetail
    };

    this.paramName = this.activatedRoute.snapshot.paramMap.get('name');
  }

  ngOnInit() {

    if (this.typeOfDetail == this.consts.Characters)
      this.getCharacterDetails();
    else
      this.getHouseDetails();
  }


  getCharacterDetails() {

    this.characterService.getData(this.paramName).subscribe(
      (data) => {

        this.housesService.getData(data.house).subscribe(
          (houseData) => {
            this.args.houseData = houseData;
            this.details = this.objectUnifier.unifyDetails(data, this.args);
          }
        );
      }
    );
  }


  getHouseDetails() {

    this.housesService.getData(this.paramName).subscribe(
      (data) => {
        this.details = this.objectUnifier.unifyDetails(data[0], this.args);
      }
    );
  }
}

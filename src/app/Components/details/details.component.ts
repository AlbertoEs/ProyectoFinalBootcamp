import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/Providers/constants/constants.service';
import { Router } from '@angular/router';
import { ObjectUnifierPipe } from 'src/app/Pipes/objectUnifier/object-unifier.pipe';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public details: any;

  public typeOfDetail: string;
  public paramName: string;

  constructor(public consts: ConstantsService,
              private router: Router,
              private objectUnifier: ObjectUnifierPipe) {

    if (this.router.url.indexOf('characters') !== -1) 
      this.typeOfDetail = consts.Characters;
    else
      this.typeOfDetail = consts.Houses;

    this.paramName = this.route.snapshot.paramMap.get('name');
  }

  ngOnInit() {

    if (this.typeOfDetail == consts.Characters)
      this.getCharacterDetails();
    else
      this.getHouseDetails();
  }


  getCharacterDetails() {

    this.characterService.getData(this.paramName).subscribe(
      (data) => {
        this.details = this.objectUnifier.transform(data, this.typeOfDetail);
      }
    );
  }


  getHouseDetails() {

    this.housesService.getData(this.paramName).subscribe(
      (data) => {
        this.details = this.objectUnifier.transform(data, this.typeOfDetail);
      }
    );
  }
}

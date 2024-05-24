import { Router } from '@angular/router';
import { EmbaucheService } from './../embauche.service';
import { Component, Input, OnInit } from '@angular/core';
import { Personne } from 'src/app/model/personne';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCVComponent implements OnInit {

  @Input() personne!: Personne

  constructor(private readonly embaucheService: EmbaucheService, private readonly route: Router){}

  ngOnInit(): void {

  }
  embaucher(){
    this.embaucheService.embaucher(this.personne);
  }
  moreInfo(){
    const link = ['cv', this.personne.id];
    this.route.navigate(link);
  }

}

import { CvService } from './../cv.service';
import { PremierService } from './../../premier.service';
import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  personnes!: Personne[];

  selectedPersonne!: Personne;

  constructor(private readonly premierService: PremierService, private readonly cvService: CvService) {}

  ngOnInit(): void {
    this.personnes = this.cvService.getPersonnes();

    this.premierService.addData('data from cv component');
    this.premierService.logger(this.personnes);
  }

  selectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }
}

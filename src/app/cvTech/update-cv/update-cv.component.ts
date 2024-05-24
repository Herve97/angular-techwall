import { Component, OnInit } from '@angular/core';
import { CvService } from '../cv.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Personne } from 'src/app/model/personne';

@Component({
  selector: 'app-update-cv',
  templateUrl: './update-cv.component.html',
  styleUrls: ['./update-cv.component.css'],
})
export class UpdateCvComponent implements OnInit {
  personne!: Personne | undefined;

  constructor(
    private cvService: CvService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      // console.log('Le params: ', parseInt(params['id']));
      this.personne = this.cvService.getPersonneById(parseInt(params['id']));
    });
  }

  updateCv(formulaire: NgForm) {
    const link = ['cv'];
    if(this.personne){
      this.cvService.updatePersonne(this.personne.id, formulaire.value);
      this.router.navigate(link);
    }else{
      this.router.navigate(link);
    }
  }
}

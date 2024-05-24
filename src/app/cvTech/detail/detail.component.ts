import { Component, OnInit } from '@angular/core';
import { CvService } from '../cv.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Personne } from 'src/app/model/personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  personne!: Personne | undefined;
  constructor(
    private readonly cvService: CvService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      // console.log('Le params: ', parseInt(params['id']));
      this.personne = this.cvService.getPersonneById(parseInt(params['id']));
    })
  }

  deletePersonne(id: number){
    this.cvService.deletePersonne(id);
    this.router.navigate(['cv']);
    // if(this.personne){
    //   this.cvService.deletePersonne(this.personne.id)
    //   this.router.navigate(['cv']);
    // }else{
    //   this.router.navigate(['cv']);
    // }
  }

  updatePersonne(id: number){
    const link = ['cv/updateCv', id];
    this.router.navigate(link);
  }

}

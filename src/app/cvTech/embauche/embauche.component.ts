import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/model/personne';
import { EmbaucheService } from '../embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {

  personnes!: Personne[];

  constructor(private readonly embaucheService: EmbaucheService){}

  ngOnInit(): void {
   this.personnes = this.embaucheService.getEmbauchees();
  }

}

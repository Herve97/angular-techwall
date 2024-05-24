import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  est = false;
  barca = false;
  milan = true;

  constructor(){}

  ngOnInit(): void {

  }

  changeTeam(){
    this.est = true;
    this.barca = false;
    this.milan = false;
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/model/personne';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css'],
})
export class ListCVComponent implements OnInit {
  @Input() personnes!: Personne[];
  @Output() selectedPersonne = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  selectPersonne(selectedPersonne: Personne){
    this.selectedPersonne.emit(selectedPersonne)
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/model/personne';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css'],
})
export class ItemCVComponent implements OnInit {
  @Input() personne!: Personne;
  @Output() selectedPersonne = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  selectPersonne() {
    // Todo: emettre un événement et y injecter la personne
    this.selectedPersonne.emit(this.personne);
  }
}

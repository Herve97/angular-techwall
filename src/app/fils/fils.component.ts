import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit{

  @Input() filsProperty: any; // le décorateur @Input() permet à cet objet d'être vu/appelé par le composant père
  @Output() sendRequesttoData = new EventEmitter(); // Permet au fils d'envoyer les données au parent

  ngOnInit(): void {
    console.log(this.filsProperty)
  }

  sendEvent(){
    this.sendRequesttoData.emit(`Please can I have some money :)`)
  }

}

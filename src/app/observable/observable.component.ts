import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {

  monObservable!: Observable<string>;
  mesimages = [
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',
    'rotating_card_profile.png',
    'rotating_card_thumb.png',
    'rotating_card_thumb2.png',
    'rotating_card_thumb3.png',
    'rotating_card_thumb.jpg',
    'tim_logo.png',
  ]

  currentImage!: string;

  constructor() {}

  ngOnInit(): void {
    this.monObservable = new Observable(
      (observer)=>{
        let i = this.mesimages.length - 1;
        setInterval(()=>{
          observer.next(this.mesimages[i]);
          if(i > 0){
            i--;
          }else{
            i = this.mesimages.length - 1;
          }
        }, 1500)
      }
    );
    this.monObservable.subscribe((result)=>{
      this.currentImage = result;
    })
  }
}

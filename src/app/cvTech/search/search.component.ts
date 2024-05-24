import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Personne } from 'src/app/model/personne';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchResult!: any[];

  constructor(private readonly cvService: CvService) {}

  ngOnInit(): void {
    this.searchResult = [];
  }

  search(searchInput: any) {
    let name = searchInput.value;
    name = name.trim();
    if(name.length){
      const result = this.cvService.findByName(searchInput.value);
      this.searchResult.push(result);
      console.log("Le result: ", this.searchResult)
    }else{
      this.searchResult = [];
    }

  }

  selectPersonne(personne: Personne){

  }
}

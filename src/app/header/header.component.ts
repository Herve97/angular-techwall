import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  visibility: boolean = false;

  constructor(){

  }

  ngOnInit(): void {

  }

  logout(){
    localStorage.removeItem('token');
  }

  show(){
    this.visibility = !this.visibility;
  }

}

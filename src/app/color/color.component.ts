import { Component, OnInit } from '@angular/core';
import { PremierService } from '../premier.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  color: any = 'red';

  constructor(
    private readonly premierService: PremierService,
    private readonly router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  // changeColor(InputColor: any) {
  //   console.log(InputColor.value);
  //   this.color = InputColor.value;
  //   InputColor.value = '';
  // }

  ngOnInit(): void {
    this.premierService.addData('data from app-color');
    this.premierService.logger(this.color);
    this.activatedRoute.params.subscribe((params)=>{
      this.color = params['default'];
    })
  }

  processRequest(message: any) {
    alert(message);
  }

  goToCV(){
    this.router.navigate(['cv'])
  }
}

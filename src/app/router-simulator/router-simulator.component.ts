import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-router-simulator',
  templateUrl: './router-simulator.component.html',
  styleUrls: ['./router-simulator.component.css'],
})
export class RouterSimulatorComponent implements OnInit {

  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  goToComponent(selectComposant: string) {
    this.router.navigate([selectComposant]);
  }
}

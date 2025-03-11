import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  router=inject(Router);
  starshipsActive: boolean = false;
  homeActive: boolean = true;
  showHome() {
    this.homeActive = true;
    this.starshipsActive = false;
    this.router.navigate(['home']);
  }

  showStarships() {
    this.starshipsActive = true;
    this.homeActive = false;
    this.router.navigate(['starships']);
  }

}

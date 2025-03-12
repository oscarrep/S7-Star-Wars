import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  router = inject(Router);
  starshipsActive: boolean = false;
  homeActive: boolean = true;
  randomColor: string = '';
  @Input() app!: AppComponent;

  ngOnInit() {
    document.documentElement.style.setProperty('--border-color', this.randomizeColor());
  }

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


  randomizeColor(): string {
    const colors = ['red', 'rgb(33, 111, 255)', 'rgb(0, 189, 0)', 'rgb(255, 213, 73)', 'rgb(187, 49, 187)'];
    return this.randomColor = colors[Math.floor(Math.random() * colors.length)];
  }

}
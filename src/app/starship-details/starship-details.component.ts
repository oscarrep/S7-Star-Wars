import { Component, Input } from '@angular/core';
import { Starship } from '../interfaces/starship';
import { StarshipImgComponent } from "../starship-img/starship-img.component";
//import { StarshipImgComponent } from '../starship-img/starship-img.component';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrl: './starship-details.component.scss',
  imports: [StarshipImgComponent],
  //imports: [StarshipImgComponent],
})

export class StarshipDetailsComponent {
  //constructor(public image: StarshipImgComponent) { }
  @Input() starship: Starship | null = null;
}

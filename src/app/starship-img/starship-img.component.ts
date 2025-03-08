import { Component, Input, inject, computed, signal } from '@angular/core';
import { Starship } from '../interfaces/starship';

@Component({
  selector: 'app-starship-img',
  templateUrl: './starship-img.component.html',
  styleUrl: './starship-img.component.scss'
})
export class StarshipImgComponent {

  @Input() starshipId!: string;
  @Input() starship!: Starship;

  imgUrl(): string { return `https://res.cloudinary.com/dojj3zpfw/image/upload/v1741209478/starwars-ships/${this.starshipId}.jpg`; }

}

import { Component, Input, OnInit, inject } from '@angular/core';
import { Starship } from '../interfaces/starship';
import { StarshipsComponent } from "../starships/starships.component";
import { StarshipImgComponent } from '../starship-img/starship-img.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrl: './starship-details.component.scss',
  imports: [StarshipImgComponent],
  standalone: true,
})

export class StarshipDetailsComponent {
  @Input() starship!: Starship;
  @Input() starshipsComponent!: StarshipsComponent;
  @Input() starshipImgComponent!: StarshipImgComponent;
  @Input() starshipId!: string;
  @Input() route!: ActivatedRoute;
  @Input() router!: Router;

  toggleDetails(): void {
    this.starshipsComponent.showDetails = false;
  }
}

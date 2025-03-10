import { Component, inject, Input } from '@angular/core';
import { Starship } from '../interfaces/starship';
import { StarshipsComponent } from "../starships/starships.component";
import { StarshipImgComponent } from '../starship-img/starship-img.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

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
  starshipId!: string;
  selectedShip!: Starship;
  private location = inject(Location);

  constructor(private route: ActivatedRoute) {
    this.selectedShip = history.state.ship;
    this.starshipId = this.route.snapshot.paramMap.get('id')!;
  }

  backBtn(): void {
    this.location.back();
  }
}

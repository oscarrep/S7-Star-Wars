import { Component, OnInit } from '@angular/core';
import { StarshipService } from '../services/starship.service';
import { Starship } from '../interfaces/starship';
import { StarshipDetailsComponent } from "../starship-details/starship-details.component";
import { StarshipImgComponent } from '../starship-img/starship-img.component';

@Component({
  selector: 'app-starships',
  standalone: true,
  imports: [StarshipDetailsComponent, StarshipImgComponent],
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.scss'
})
export class StarshipsComponent implements OnInit {
  starships: Starship[] = [];
  selectedShip!: Starship;
  showDetails: boolean = false;

  constructor(public starshipService: StarshipService) { }

  ngOnInit(): void { this.showStarshipsList() }

  showStarshipsList(): void {
    this.starshipService.getStarshipsList().subscribe({
      next: (response) => {
        this.starships = response.results.map((ship: any) => ({
          name: ship.name,
          model: ship.model,
          manufacturer: ship.manufacturer,
          cost_in_credits: ship.cost_in_credits,
          length: ship.length,
          max_atmosphering_speed: ship.max_atmosphering_speed,
          crew: ship.crew,
          passengers: ship.passengers,
          cargo_capacity: ship.cargo_capacity,
          consumables: ship.consumables,
          hyperdrive_rating: ship.hyperdrive_rating,
          mglt: ship.mglt,
          starship_class: ship.starship_class,
          count: ship.count,
          next: ship.next,
          previous: ship.previous,
          url: ship.url,
        }));
        console.log(this.starships);
      },
      error: (error) => {
        console.error('Error getting ships:', error);
      },
    });
  }

  splitUrl(url: string): string { return url.split('/').slice(-2, -1)[0]; }

  showShip(index: number): void {
    if (index >= 0 && index < this.starships.length) {
      this.selectedShip = this.starships[index];
      this.showDetails = true;
    } 
    else console.error('Invalid index:', index);
  }

  getStarshipIndex(ship: Starship): number { return this.starships.findIndex(s => s.name === ship.name); }

}
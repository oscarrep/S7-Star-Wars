import { Component, OnInit, inject } from '@angular/core';
import { StarshipService } from '../services/starship.service';
import { Starship } from '../interfaces/starship';
import { StarshipDetailsComponent } from "../starship-details/starship-details.component";

@Component({
  selector: 'app-starships',
  imports: [StarshipDetailsComponent],
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.scss'
})
export class StarshipsComponent implements OnInit {

  private starshipService = inject(StarshipService);
  starships: Starship[] = [];
  starship: [] = [];
  showDetails: boolean = false;

  constructor() { }

  ngOnInit(): void { this.getStarships() }

  getStarships(): void {
    this.starshipService.getStarships().subscribe({
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
          comsumables: ship.consumables,
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

  showShip(url: string): void {
    this.starshipService.getShip(url).subscribe({
      next: (ship: any) => {
        this.starship = ship;
        console.log(this.starship);
      },
      error: (error) => {
        console.error('Error getting starship:', error);
      },
    });
    this.showDetails = true;
  }
}
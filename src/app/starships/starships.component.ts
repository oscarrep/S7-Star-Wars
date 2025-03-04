import { Component, OnInit, inject } from '@angular/core';
import { StarshipService } from '../services/starship.service';
import { Starship } from '../interfaces/starship';

@Component({
  selector: 'app-starships',
  imports: [],
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.scss'
})
export class StarshipsComponent implements OnInit {

  private starshipService = inject(StarshipService);
  starships: Starship[] = [];

  constructor() { }
  
  ngOnInit(): void { this.getStarships() }

  getStarships(): void {
    this.starshipService.getStarships().subscribe({
      next: (response) => {
        this.starships = response.results.map((ship: any) => ({
          name: ship.name,
          model: ship.model,
          count: ship.count,
          next: ship.next,
          previous: ship.previous
        }));
        console.log(this.starships);
      },
      error: (error) => {
        console.error('Error getting ships:', error);
      },
    });
  }
}
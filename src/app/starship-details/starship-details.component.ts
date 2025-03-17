import { Component, inject, OnInit, Input } from '@angular/core';
import { Starship } from '../interfaces/starship';
import { StarshipImgComponent } from '../starship-img/starship-img.component';
import { ActivatedRoute, Router } from '@angular/router';
import { StarshipService } from '../services/starship.service';
import { RandomColorService } from '../services/random-color.service';
import { PilotsComponent } from "../pilots/pilots/pilots.component";
import { FilmsComponent } from "../films/films.component";
@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrl: './starship-details.component.scss',
  imports: [StarshipImgComponent, PilotsComponent, FilmsComponent],
  standalone: true,
})

export class StarshipDetailsComponent implements OnInit {
  starshipId!: string;
  selectedShip?: Starship;
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private starshipService = inject(StarshipService);
  colorService = inject(RandomColorService);
  pilots: string[] = []
  films: string[] = []

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.starshipId = params.get('id')!;
      this.selectedShip = history.state.ship;
      if (!this.selectedShip) this.getDetails(this.starshipId);
      else { 
        this.pilots = this.selectedShip.pilots; 
        this.films = this.selectedShip.films; 
      }
    });
  }

  getDetails(id: string): void {
    this.starshipService.getStarshipByID(id).subscribe({
      next: (data) => {
        this.selectedShip = data;
        this.pilots = this.selectedShip?.pilots;
        this.films = this.selectedShip?.films;
        console.log('getDetails:')
        console.log(this.films)
        console.log(this.pilots)
        console.log('-------------')
      },
      error: (err) => console.error('Error loading ship: ', err)
    });
  }

  backBtn(): void {
    this.router.navigate(['/starships']);
  }

}

import { Component, inject, OnInit } from '@angular/core';
import { Starship } from '../interfaces/starship';
import { StarshipImgComponent } from '../starship-img/starship-img.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { StarshipService } from '../services/starship.service';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrl: './starship-details.component.scss',
  imports: [StarshipImgComponent],
  standalone: true,
})

export class StarshipDetailsComponent implements OnInit {
  starshipId!: string;
  selectedShip?: Starship;
  private location = inject(Location);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private starshipService = inject(StarshipService);

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.starshipId = params.get('id')!;
      this.selectedShip = history.state.ship;
      if (!this.selectedShip) this.getDetails(this.starshipId);
    });
  }

  getDetails(id: string): void {
    this.starshipService.getStarshipByID(id).subscribe({
      next: (data) => this.selectedShip = data,
      error: (err) => console.error('Error loading ship: ', err)
    });
  }

  backBtn(): void {
    this.router.navigate(['/starships']);
  }

}

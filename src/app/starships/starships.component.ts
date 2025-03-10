import { Component, HostListener, Input, OnInit, inject } from '@angular/core';
import { StarshipService } from '../services/starship.service';
import { Starship } from '../interfaces/starship';
import { StarshipImgComponent } from '../starship-img/starship-img.component';
import { ActivatedRoute, Router, RouterModule, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-starships',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.scss'
})
export class StarshipsComponent implements OnInit {
  router = inject(Router);
  route = inject(ActivatedRoute);
  starshipService = inject(StarshipService);
  starships: Starship[] = [];
  newStarships: Starship[] = [];
  selectedShip!: Starship;
  nextUrl: string | null = null;

  ngOnInit(): void {
    this.showStarshipsList();
    this.router.events.subscribe((event) => {
    })
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight)
      setTimeout(() => { this.expandList(); }, 200);
  }

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
        this.nextUrl = response.next;
        console.log(this.starships);
      },
      error: (error) => console.error('Error getting ships:', error)
    });
  }

  splitUrl(url: string): string { return url.split('/').slice(-2, -1)[0]; }

  showShip(index: number): void {
    if (index >= 0 && index < this.starships.length) {
      const extractedId = this.splitUrl(this.starships[index].url);
      this.selectedShip = this.starships[index];
      this.router.navigate(['starship-details', extractedId], {
        relativeTo: this.route,
        state: { ship: this.selectedShip }
      });
    }
    else console.error('Invalid index:', index);
  }

  getStarshipIndex(ship: Starship): number { return this.starships.findIndex(s => s.name === ship.name); }

  expandList(): void {
    if (this.nextUrl) {
      this.starshipService.getExpandedList(this.nextUrl).subscribe({
        next: (response) => {
          this.newStarships = response.results.map((ship: any) => ({
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
            starship_class: ship.starship_class,
            next: ship.next,
            previous: ship.previous,
            url: ship.url,
          }));
          this.starships = this.starships.concat(this.newStarships);
          this.nextUrl = response.next;
          console.log(this.starships);
        },
        error: (error) => console.error('Error getting ships:', error)
      });
    }
  }
}
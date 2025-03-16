import { Component, Input, OnInit, inject } from '@angular/core';
import { PilotsService } from '../../services/pilots.service';
import { Pilot } from '../../interfaces/pilot';
import { StarshipDetailsComponent } from '../../starship-details/starship-details.component';
import { Starship } from '../../interfaces/starship';

@Component({
  selector: 'app-pilots',
  imports: [],
  templateUrl: './pilots.component.html',
  styleUrl: './pilots.component.scss'
})
export class PilotsComponent {
  pilotsService = inject(PilotsService);
  @Input() pilots: string[] = [];
  pilotDetails: Pilot[] = []

  //1- take pilot URLs from selected starship (starship-details)
  //2- array with id from each url
  //3- pass array and call api for each element

  ngOnInit(): void { this.getPilots(); }

  getPilots() {
    if (this.pilots && this.pilots.length > 0) {
      this.pilots.forEach((pilotUrl) => {
        this.pilotsService.getPilotByUrl(pilotUrl).subscribe({
          next: (pilot) => {
            this.pilotDetails.push(pilot);
          },
          error: (err) => console.error('Error loading pilot: ', err)
        });
      });
    }
  }
}

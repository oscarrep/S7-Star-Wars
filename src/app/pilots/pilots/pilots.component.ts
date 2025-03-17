import { Component, Input, OnInit, inject } from '@angular/core';
import { PilotsService } from '../../services/pilots.service';
import { Pilot } from '../../interfaces/pilot';

@Component({
  selector: 'app-pilots',
  imports: [],
  templateUrl: './pilots.component.html',
  styleUrl: './pilots.component.scss'
})
export class PilotsComponent implements OnInit {
  pilotsService = inject(PilotsService);
  @Input() pilots: string[] = [];
  pilotDetails: Pilot[] = []

  ngOnInit(): void { this.getPilots(); }

  getPilots() {
    console.log(this.pilots)
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

import { Component, Input, OnInit, inject } from '@angular/core';
import { PilotsService } from '../services/pilots.service';
import { Pilot } from '../interfaces/pilot';
import { PilotImgComponent } from './pilot-img.component';

@Component({
  selector: 'app-pilots',
  imports: [PilotImgComponent],
  templateUrl: './pilots.component.html',
  styleUrl: './pilots.component.scss'
})
export class PilotsComponent implements OnInit {
  pilotsService = inject(PilotsService);
  @Input() pilots: string[] = [];
  pilotDetails: Pilot[] = []
  pilotId!: string;

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

  extractId(url: string): string {
    this.pilotId = url.split('/').filter(Boolean).pop()!;
    return this.pilotId;
  }
}

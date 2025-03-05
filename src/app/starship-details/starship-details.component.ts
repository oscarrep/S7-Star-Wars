import { Component, Input } from '@angular/core';
import { Starship } from '../interfaces/starship';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrl: './starship-details.component.scss'
})
export class StarshipDetailsComponent {
  @Input() starship: Starship | null = null;
}

import { Component, Input, OnInit, inject } from '@angular/core';
import { Starship } from '../interfaces/starship';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrl: './starship-details.component.scss',
  imports: [],
  standalone: true,
})

export class StarshipDetailsComponent {
  @Input() starship!: Starship;
}

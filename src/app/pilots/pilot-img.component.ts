import { Component, Input, OnInit } from '@angular/core';
import { Pilot } from '../interfaces/pilot';

@Component({
  selector: 'app-pilot-img',
  imports: [],
  templateUrl: './pilot-img.component.html',
  styleUrl: './pilot-img.component.scss'
})
export class PilotImgComponent implements OnInit {

  @Input() pilotId!: string;
  @Input() pilot!: Pilot;

  ngOnInit(){
    console.log(this.pilotId)
  }

  imgUrl(): string { 
    return `https://raw.githubusercontent.com/vieraboschkova/swapi-gallery/refs/heads/main/static/assets/img/people/${this.pilotId}.jpg`; }
}

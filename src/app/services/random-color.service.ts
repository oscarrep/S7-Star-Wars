import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomColorService {

  randomColor: string = '';

  randomizeColor(): string {
    const colors = ['red', 'rgb(33, 111, 255)', 'rgb(0, 189, 0)', 'rgb(255, 213, 73)', 'rgb(187, 49, 187)'];
    return this.randomColor = colors[Math.floor(Math.random() * colors.length)];
  }
}

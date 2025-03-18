import { Component, Input } from '@angular/core';
import { Film } from '../interfaces/film';

@Component({
  selector: 'app-film-img',
  imports: [],
  templateUrl: './film-img.component.html',
  styleUrl: './film-img.component.scss'
})
export class FilmImgComponent {

  @Input() filmId!: string;
  @Input() film!: Film;

  imgUrl(): string {
    return `https://res.cloudinary.com/dojj3zpfw/image/upload/v1742261372/${this.filmId}.jpg`;
  }
}

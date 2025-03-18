import { Component, Input, OnInit, inject } from '@angular/core';
import { FilmsService } from '../services/films.service';
import { Film } from '../interfaces/film';
import { FilmImgComponent } from "./film-img.component";

@Component({
  selector: 'app-films',
  imports: [FilmImgComponent],
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss'
})
export class FilmsComponent implements OnInit {
  filmsService = inject(FilmsService);
  @Input() films: string[] = [];
  filmDetails: Film[] = [];
  filmId!: string;

  ngOnInit(): void { this.getFilms(); }

  getFilms() {
    console.log(this.films)
    if (this.films && this.films.length > 0) {
      this.films.forEach((filmUrl) => {
        this.filmsService.getFilmByUrl(filmUrl).subscribe({
          next: (film) => {
            this.filmDetails.push(film);
          },
          error: (err) => console.error('Error loading film: ', err)
        });
      });
    }
  }

  extractId(url: string): string {
    this.filmId = url.split('/').filter(Boolean).pop()!;
    return this.filmId;
  }
}

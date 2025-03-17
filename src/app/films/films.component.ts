import { Component, Input, OnInit, inject } from '@angular/core';
import { FilmsService } from '../services/films.service';
import { Film } from '../interfaces/film';

@Component({
  selector: 'app-films',
  imports: [],
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss'
})
export class FilmsComponent implements OnInit {
  filmsService = inject(FilmsService);
  @Input() films: string[] = [];
  filmDetails: Film[] = []

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
}

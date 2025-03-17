import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../interfaces/film';

@Injectable({ providedIn: 'root' })

export class FilmsService {

  constructor(private http: HttpClient) { }

  getFilmByUrl(url: string): Observable<Film> {
    return this.http.get<Film>(url);
  }
}

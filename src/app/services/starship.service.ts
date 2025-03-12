import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StarshipRes } from '../interfaces/starship-res';
import { Starship } from '../interfaces/starship';

@Injectable({ providedIn: 'root' })

export class StarshipService {

  private shipsUrl: string = 'https://swapi.dev/api/starships/';

  constructor(private http: HttpClient) { }

  getStarshipsList(): Observable<StarshipRes> {
    return this.http.get<StarshipRes>(this.shipsUrl);
  }

  getNextUrl(url: string): Observable<StarshipRes> {
    return this.http.get<StarshipRes>(url);
  }

  getExpandedList(url: string): Observable<StarshipRes> {
    return this.http.get<StarshipRes>(url);
  }

  getStarshipByID(id: string): Observable<Starship> {
    return this.http.get<Starship>(this.shipsUrl + id + '/');
  }

}

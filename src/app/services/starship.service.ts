import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StarshipRes } from '../interfaces/starship-res';

@Injectable({ providedIn: 'root' })

export class StarshipService {

  private shipsUrl: string = 'https://swapi.dev/api/starships/';

  constructor(private http: HttpClient) { }

  getStarshipsList(): Observable<StarshipRes> {
    return this.http.get<StarshipRes>(this.shipsUrl);
  }

  getShip(url: string): Observable<any> {
    return this.http.get(url);
  }


}

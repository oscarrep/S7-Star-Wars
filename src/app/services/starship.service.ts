import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StarshipRes } from '../interfaces/starship-res';
/*import { v2 as CLOUDINARY } from 'cloudinary';
import * as dotenv from 'dotenv';

dotenv.config();

CLOUDINARY.config({
  secure: true,
  cloud_name: process.env['CLOUDINARY_CLOUD_NAME'],
  api_key: process.env['CLOUDINARY_API_KEY'],
  api_secret: process.env['CLOUDINARY_API_SECRET'],
});
*/
@Injectable({ providedIn: 'root' })

export class StarshipService {

  //public imgUrl: string = CLOUDINARY.url('10')
  private shipsUrl: string = 'https://swapi.dev/api/starships/';

  constructor(private http: HttpClient) { }

  getStarshipsList(): Observable<StarshipRes> {
    return this.http.get<StarshipRes>(this.shipsUrl);
  }

  getShip(url: string): Observable<any> {
    return this.http.get(url);
  }


}

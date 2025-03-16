import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pilot } from '../interfaces/pilot';

@Injectable({ providedIn: 'root' })

export class PilotsService {

  constructor(private http: HttpClient) { }

  getPilotByUrl(url: string): Observable<Pilot> {
    return this.http.get<Pilot>(url);
  }
}

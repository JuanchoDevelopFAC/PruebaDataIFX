import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})

export class PersonajesService {

  url = "http://hp-api.herokuapp.com/api/characters/house/";

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  getPersonajes(school: any): Observable<any> {
    return this.http.get(this.url + school);
  }
}

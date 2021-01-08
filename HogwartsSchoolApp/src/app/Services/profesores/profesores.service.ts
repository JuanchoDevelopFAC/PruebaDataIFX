import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  url = "http://hp-api.herokuapp.com/api/characters/staff";

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  getProfesores(): Observable<any> {
    return this.http.get(this.url);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  url = "http://hp-api.herokuapp.com/api/characters/students";

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  getEstudiantes(): Observable<any> {
    return this.http.get(this.url);
  }
}

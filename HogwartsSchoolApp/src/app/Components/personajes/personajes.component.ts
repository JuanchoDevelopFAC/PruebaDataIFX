import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppComponent, DialogData } from '../app-component/app.component';
import { PersonajesService } from 'src/app/Services/personajes/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AppComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData, private personajesService: PersonajesService) { }

  displayedColumns: string[] = ['name', 'patronus', 'age', 'image'];
  ELEMENT_DATA = [];

  ngOnInit(): void {
    this.personajesService.getPersonajes(this.data.school).subscribe((data) => this.ELEMENT_DATA = data);
  }
}

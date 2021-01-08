import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonajesComponent } from '../personajes/personajes.component';
import { EstudiantesComponent } from '../estudiantes/estudiantes.component';
import { ProfesoresComponent } from '../profesores/profesores.component';

export interface DialogData {
  school: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hogwarts School';
  school: string;

  constructor(public dialog: MatDialog) { }

  openSchool(value: string) {
    this.school = value;
    this.dialog.open(PersonajesComponent, { data: { school: this.school } });
  }

  openStudents() {
    this.dialog.open(EstudiantesComponent);
  }

  openStaff() {
    this.dialog.open(ProfesoresComponent);
  }
}


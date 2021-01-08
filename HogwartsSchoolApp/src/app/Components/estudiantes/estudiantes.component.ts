import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppComponent } from '../app-component/app.component';
import { EstudiantesService } from 'src/app/Services/estudiantes/estudiantes.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AppComponent>, private estudiantesService: EstudiantesService) { }

  displayedColumns: string[] = ['name', 'patronus', 'age', 'image'];
  ELEMENT_DATA = [];

  ngOnInit(): void {
    this.estudiantesService.getEstudiantes().subscribe((data) => this.ELEMENT_DATA = data);
  }

}

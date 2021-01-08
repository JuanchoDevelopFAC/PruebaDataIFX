import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppComponent } from '../app-component/app.component';
import { ProfesoresService } from 'src/app/Services/profesores/profesores.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.scss']
})
export class ProfesoresComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AppComponent>, private profesoresService: ProfesoresService) { }

  displayedColumns: string[] = ['name', 'patronus', 'age', 'image'];
  ELEMENT_DATA = [];

  ngOnInit(): void {
    this.profesoresService.getProfesores().subscribe((data) => this.ELEMENT_DATA = data);
  }

}

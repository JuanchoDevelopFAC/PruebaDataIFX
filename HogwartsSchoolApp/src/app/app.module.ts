import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './Components/app-component/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

import { PersonajesComponent } from './Components/personajes/personajes.component';
import { EstudiantesComponent } from './Components/estudiantes/estudiantes.component';
import { ProfesoresComponent } from './Components/profesores/profesores.component';

import { PersonajesService } from 'src/app/Services/personajes/personajes.service';
import { ConvertirEdadPipe } from './Pipes/convertir-edad.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    EstudiantesComponent,
    ProfesoresComponent,
    ConvertirEdadPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [PersonajesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

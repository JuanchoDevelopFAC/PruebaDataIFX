import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertirEdad'
})
export class ConvertirEdadPipe implements PipeTransform {

  transform(value: number, args?: any): any {

    var edad;
    var fecha = new Date();
    var ano = fecha.getFullYear();

    if (value.toString() == "") return edad = "-";
    else {
      edad = ano - value;
      return edad;
    }
  }

}

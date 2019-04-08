import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enamToString'
})
export class EnamPipe implements PipeTransform {

  transform(value: any, enumType: any): any {
    return enumType[value];
  }
}

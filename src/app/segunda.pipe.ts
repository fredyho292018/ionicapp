import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'segunda'
})
export class SegundaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plus'
})
export class PlusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.a + value.b;
  }

}

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'counter'
})
export class CounterPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    if (value >= 10) {
      return value.toString(10) + ' big number';
    }
    return value;
  }

}

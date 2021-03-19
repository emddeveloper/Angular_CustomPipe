import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: number, unitname: string): number {
    if (isNaN(value)) return 0;
    switch (unitname) {
      case 'km':
        return value * 1.604;
      case 'm':
        return value * 1.604 * 1000;
      case 'cm':
        return value * 1.604 * 1000 * 100;
      default:
        throw new Error('Please provide correct unit name');
    }
  }
}

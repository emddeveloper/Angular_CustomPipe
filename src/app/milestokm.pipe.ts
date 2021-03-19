import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'milestokm',
})
export class MilestokmPipe implements PipeTransform {
  transform(value: number): number {
    if (isNaN(value)) {
      return 0;
    }
    return value * 1.604;
  }
}

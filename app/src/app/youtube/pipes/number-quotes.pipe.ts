import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'NumberQuotesPipe',
})
export class NumberQuotesPipe implements PipeTransform {
  transform(value: string | number | undefined): string {
    if (!value) return '';
    const arr = `${value}`.split('');
    const result = [];
    for (let i = 0; i < arr.length; i += 1) {
      const currentNum = arr[arr.length - 1 - i];
      if (i % 3 === 0 && i !== 0) result.push(`${currentNum}'`);
      else result.push(`${currentNum}`);
    }

    return result.reverse().join('');
  }
}

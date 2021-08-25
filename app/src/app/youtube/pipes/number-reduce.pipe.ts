import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'NumberReducePipe',
})
export class NumberReducePipe implements PipeTransform {
  transform(value: string | number | undefined): string {
    if (!value) return '';
    const arr = `${value}`.split('');
    if (arr.length > 5) {
      const newArr = arr.slice(0, -5);
      newArr[newArr.length - 1] = `.${newArr[newArr.length - 1]}m`;
      let result = newArr.join('');
      if (arr.length === 6) result = `0${result}`;
      return result;
    }
    return value.toString();
  }
}

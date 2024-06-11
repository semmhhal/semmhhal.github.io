import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
  standalone: true,
})
export class ShortenPipe implements PipeTransform {
  transform(value: string, length: number): string {
    if (!value) {
      return '';
    }
    return value.length >= length ? value.slice(0, length) + '...' : value;
  }
}

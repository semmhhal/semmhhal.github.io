import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
  standalone: true,
})
export class ShortenPipe implements PipeTransform {
  transform(value: string, length: number): string {
    if (value.length >= length) {
      return value.slice(0, length) + '...';
    }
    return value;
  }
}

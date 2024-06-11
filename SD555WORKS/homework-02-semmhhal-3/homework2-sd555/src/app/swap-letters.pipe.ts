import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'swapLetters',
  standalone: true,
})
export class SwapLettersPipe implements PipeTransform {
  transform(value: string, swapObject: { [key: string]: string }): string {
    if (!value) {
      return '';
    }

    let newSentence = value
      .split('')
      .map((char) => {
        return swapObject[char] ? swapObject[char] : char;
      })
      .join('');

    return newSentence;
  }
}

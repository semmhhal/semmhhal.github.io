import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'swapLetters',
  standalone: true,
})
export class SwapLettersPipe implements PipeTransform {
  transform(value: string, swapObj: { [key: string]: string }): string {
    if (!value || !value.length) {
      return value;
    }
    let newString = '';

    for (let char of value) {
      if (swapObj.hasOwnProperty(char)) {
        newString += swapObj[char];
      } else {
        newString += char;
      }
    }

    return newString;
  }
}

// for (let char of value) {
//   if (swapObj[char]) {
//     newString += swapObj[char];
//   } else {
//     newString += char;
//   }
// }
// return newString;

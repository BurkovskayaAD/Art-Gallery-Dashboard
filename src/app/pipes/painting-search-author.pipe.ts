import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paintingSearchAuthor'
})
export class PaintingSearchAuthorPipe implements PipeTransform {

  transform(paintings, searchPaintingAuthor: string): unknown {
    if (!paintings || !searchPaintingAuthor){
      return paintings;
    }

    return paintings.filter(item =>
      item.author.toLowerCase().indexOf(searchPaintingAuthor.toLowerCase()) !== -1);
  }

}

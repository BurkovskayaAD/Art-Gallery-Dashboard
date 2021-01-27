import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paintingSearchGenre'
})
export class PaintingSearchGenrePipe implements PipeTransform {

  transform(paintings, searchPaintingGenre: string): unknown {
    if (!paintings || !searchPaintingGenre){
      return paintings;
    }

    return paintings.filter(item =>
      item.genre.toLowerCase().indexOf(searchPaintingGenre.toLowerCase()) !== -1);
  }

}

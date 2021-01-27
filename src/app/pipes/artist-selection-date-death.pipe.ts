import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'artistSelectionDateDeath'
})
export class ArtistSelectionDateDeathPipe implements PipeTransform {

  transform(artists, selectionDateDeath: string): unknown {
    if (!artists || !selectionDateDeath) {
      return artists;
    } else if (selectionDateDeath === 'Alive') {
      return artists.filter(item =>
        item.dateDeath === null);
    } else if (selectionDateDeath === 'Death') {
      return artists.filter(item =>
        item.dateDeath !== null);
    }
  }

}

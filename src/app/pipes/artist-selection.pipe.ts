import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'artistSelection'
})
export class ArtistSelectionPipe implements PipeTransform {

  transform(artists, selection: string): unknown {
    if (!artists || !selection){
      return artists;
    } else if (selection === 'Painter'){
      return artists.filter(item =>
        item.occupation === selection);
    } else if (selection === 'Sculptor'){
      return artists.filter(item =>
        item.occupation === selection);
    }else if (selection === 'Photographer'){
      return artists.filter(item =>
        item.occupation === selection);
    }
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'artistSearchName'
})
export class ArtistSearchNamePipe implements PipeTransform {

  transform(artist, searchArtist: string): unknown {
    if (!artist || !searchArtist){
      return artist;
    }

    return artist.filter(item =>
      item.name.toLowerCase().indexOf(searchArtist.toLowerCase()) !== -1);
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'artistSearchCountry'
})
export class ArtistSearchCountryPipe implements PipeTransform {

  transform(artist, searchArtistCountry: string): unknown {
    if (!artist || !searchArtistCountry){
      return artist;
    }

    return artist.filter(item =>
      item.country.toLowerCase().indexOf(searchArtistCountry.toLowerCase()) !== -1);
  }

}

import {Component, OnInit} from '@angular/core';
import {Constants} from '../../Constants';
import {HttpServiceService} from '../../services/http-service.service';

@Component({
  selector: 'app-artists-dashboard',
  templateUrl: './artists-dashboard.component.html',
  styleUrls: ['./artists-dashboard.component.scss'],
})

export class ArtistsDashboardComponent implements OnInit {
  rows;
  columns;
  textArtistAdded;
  textArtistEdited;
  textArtistDisconnect;
  textArtistDeleted;

  loading = false;

  constructor(private http: HttpServiceService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.http.get(Constants.artistsApiUrl).subscribe(
      (artists) => {
        console.log(artists);
        if (artists.error) {
          this.textArtistDisconnect = true;
        } else {
          this.textArtistDisconnect = false;

          const isNewArtist = sessionStorage.getItem('artistAdded');
          if (isNewArtist !== null) {
            this.textArtistAdded = true;
            setTimeout(() => {
              this.textArtistAdded = false;
            }, 2000);
            sessionStorage.removeItem('artistAdded');
          }

          const isEditArtist = sessionStorage.getItem('artistEdited');
          if (isEditArtist !== null) {
            this.textArtistEdited = true;
            setTimeout(() => {
              this.textArtistEdited = false;
            }, 2000);
            sessionStorage.removeItem('artistEdited');
          }

          const isDeleteArtist = sessionStorage.getItem('artistDeleted');
          if (isDeleteArtist !== null) {
            this.textArtistDeleted = true;
            setTimeout(() => {
              this.textArtistDeleted = false;
            }, 2000);
            sessionStorage.removeItem('artistDeleted');
          }
          this.rows = artists;
        }
        this.loading = false;
      }
    );
    this.columns = [
      {prop: 'name', linkColumn: true},
      {prop: 'occupation'},
      {prop: 'country'},
      {prop: 'dateBirth', dateColumn: true},
      {prop: 'dateDeath', dateColumn: true},
      {prop: 'lastModified', dateColumn: true}
    ];
  }
}

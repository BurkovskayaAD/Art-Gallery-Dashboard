import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../Constants';
import * as moment from 'moment';
import {HttpServiceService} from '../../services/http-service.service';

@Component({
  selector: 'app-artists-dashboard',
  templateUrl: './artists-dashboard.component.html',
  styleUrls: ['./artists-dashboard.component.scss'],
})
export class ArtistsDashboardComponent implements OnInit{
  rows;
  columns;
  textArtistAdded;
  textArtistEdited;
  textArtistDisconnect;
  textArtistDeleted;

  loading = false;

  constructor(private http: HttpServiceService) {}

  ngOnInit(): void {
    this.loading = true;
    this.http.get(Constants.artistsApiUrl).subscribe(
      (artists) => {
        console.log(artists);
        if (artists.error){
          this.textArtistDisconnect = true;
        } else {
          this.textArtistDisconnect = false;

          const isNewUser = sessionStorage.getItem('artistAdded');
          if (isNewUser !== null){
            this.textArtistAdded = true;
            setTimeout(() => { this.textArtistAdded = false; }, 1500);
            sessionStorage.removeItem('artistAdded');
          }

          const isEditUser = sessionStorage.getItem('artistEdited');
          if (isEditUser !== null){
            this.textArtistEdited = true;
            setTimeout(() => { this.textArtistEdited = false; }, 1500);
            sessionStorage.removeItem('artistEdited');
          }

          const isDeleteUser = sessionStorage.getItem('artistDeleted');
          if (isDeleteUser !== null){
            this.textArtistDeleted = true;
            setTimeout(() => { this.textArtistDeleted = false; }, 1500);
            sessionStorage.removeItem('artistDeleted');
          }
          this.rows = artists;
        }
        this.loading = false;
      }
    );
    this.columns = [
      { prop: 'name', linkColumn: true},
      { prop: 'occupation' },
      { prop: 'country' },
      { prop: 'dateBirth', dateColumn: true },
      { prop: 'dateDeath', dateColumn: true  },
      { prop: 'lastModified', dateColumn: true }
    ];
  }
}

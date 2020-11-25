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
  @ViewChild('linkTemp') linkTemp: TemplateRef<any>;

  loading = false;

  constructor(private http: HttpServiceService) {}

  ngOnInit(): void {
    this.loading = true;
    this.http.get(Constants.artistsApiUrl).subscribe(
      (artists) => {
        if (artists.error){
          // alert('ERROR');
        } else {
          const isNewUser = sessionStorage.getItem('userAdded');
          if (isNewUser !== null){
            // alert('ERROR');
            sessionStorage.removeItem('userAdded');
          }
          this.rows = artists;
        }

        this.loading = false;
      }
    );
    this.columns = [
      { prop: 'name', cellTemplate: this.linkTemp },
      { prop: 'occupation' },
      { prop: 'country' },
      { prop: 'dateBirth' },
      { prop: 'dateDeath' },
      { prop: 'lastModified'}
    ];
  }
}

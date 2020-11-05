import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../Constants';
import * as moment from 'moment';

@Component({
  selector: 'app-artists-dashboard',
  templateUrl: './artists-dashboard.component.html',
  styleUrls: ['./artists-dashboard.component.css'],
})
export class ArtistsDashboardComponent implements OnInit {
  rows;
  columns;
  @ViewChild('roleTemplate') roleTemplate: TemplateRef<any>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.columns = [
      { prop: 'name', cellTemplate: this.roleTemplate },
      { prop: 'photo' },
      { prop: 'occupation' },
      { prop: 'lastModified'}
    ];
    this.http.get(Constants.artistsApiUrl).subscribe((artists) => {
      this.rows = artists;
    });
  }
}

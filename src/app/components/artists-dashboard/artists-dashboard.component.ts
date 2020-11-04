import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../Constants';

@Component({
  selector: 'app-artists-dashboard',
  templateUrl: './artists-dashboard.component.html',
  styleUrls: ['./artists-dashboard.component.css'],
})
export class ArtistsDashboardComponent implements OnInit {
  rows;
  columns = [
    { prop: 'name' },
    { prop: 'photo' },
    { prop: 'occupation' },
    { prop: 'lastModified' },
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(Constants.artistsApiUrl).subscribe((artists) => {
      this.rows = artists;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-artists-dashboard',
  templateUrl: './artists-dashboard.component.html',
  styleUrls: ['./artists-dashboard.component.css']
})
export class ArtistsDashboardComponent implements OnInit {

  rows;
  columns;
  lastModified;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('http://localhost:3010/artists')
      .subscribe((artists) => {
        this.rows = artists;
        this.columns = [
          { prop: 'name'},
          { prop: 'photo'},
          { prop: 'occupation'},
          { prop: 'lastModified'}
        ];
      });
  }

}

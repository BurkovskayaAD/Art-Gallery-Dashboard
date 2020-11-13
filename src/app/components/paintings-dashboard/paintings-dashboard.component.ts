import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../Constants';
import * as moment from 'moment';


@Component({
  selector: 'app-paintings-dashboard',
  templateUrl: './paintings-dashboard.component.html',
  styleUrls: ['./paintings-dashboard.component.scss'],
})
export class PaintingsDashboardComponent implements OnInit {
  rows;
  columns = [
    { prop: 'name' },
    { prop: 'genre' },
    { prop: 'author' },
    { prop: 'dateCreation' },
    { prop: 'picture' },
    { prop: 'lastModified' },
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(Constants.paintingsApiUrl).subscribe((paintings) => {
      this.rows = paintings;
    });
    const t = moment(this.rows.lastModified);
    t.format('DD-MM-YYYY');
  }
}

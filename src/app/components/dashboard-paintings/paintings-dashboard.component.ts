import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../Constants';
import * as moment from 'moment';
import {HttpServiceService} from '../../services/http-service.service';


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
    { prop: 'lastModified' },
  ];

  constructor(private http: HttpServiceService) {}

  ngOnInit(): void {
    this.http.get(Constants.paintingsApiUrl).subscribe(
      (paintings) => { this.rows = paintings; },
      error => { alert('Something went wrong'); }
    );
    // const t = moment(this.rows.lastModified);
    // t.format('DD-MM-YYYY');
  }
}

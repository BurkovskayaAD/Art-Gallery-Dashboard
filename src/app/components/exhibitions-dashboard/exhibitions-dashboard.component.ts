import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../Constants';

@Component({
  selector: 'app-exhibitions-dashboard',
  templateUrl: './exhibitions-dashboard.component.html',
  styleUrls: ['./exhibitions-dashboard.component.scss'],
})
export class ExhibitionsDashboardComponent implements OnInit {
  rows;
  columns = [
    { prop: 'name' },
    { prop: 'dateStart' },
    { prop: 'dateEnd' },
    { prop: 'about' },
    { prop: 'poster' },
    { prop: 'lastModified' },
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(Constants.exhibitionsApiUrl).subscribe(
      (exhibitions) => { this.rows = exhibitions;},
      error => { alert('Something went wrong'); }
      );
  }
}

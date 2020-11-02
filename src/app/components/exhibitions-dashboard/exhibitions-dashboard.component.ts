import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-exhibitions-dashboard',
  templateUrl: './exhibitions-dashboard.component.html',
  styleUrls: ['./exhibitions-dashboard.component.css']
})
export class ExhibitionsDashboardComponent implements OnInit {

  rows;
  columns;

  constructor(private http: HttpClient) {
    this.allExhibitions();
  }

  ngOnInit(): void {
  }

  allExhibitions(): void {
    this.http.get('http://localhost:3010/exhibitions')
      .subscribe((exhibitions) => {
        this.rows = exhibitions;
        this.columns = [
          { prop: 'name'},
          { prop: 'date'},
          { prop: 'about'},
          { prop: 'poster'},
          { prop: 'lastModified'}
        ];
      });
  }

}

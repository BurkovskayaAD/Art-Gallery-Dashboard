import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-paintings-dashboard',
  templateUrl: './paintings-dashboard.component.html',
  styleUrls: ['./paintings-dashboard.component.css']
})
export class PaintingsDashboardComponent implements OnInit {

  rows;
  columns;

  constructor(private http: HttpClient) {
    this.allPaintings();
  }

  ngOnInit(): void {
  }

  allPaintings(): void {
    this.http.get('http://localhost:3010/paintings')
      .subscribe((paintings) => {
        this.rows = paintings;
        this.columns = [
          { prop: 'name'},
          { prop: 'picture'},
          { prop: 'author'},
          { prop: 'lastModified'}
        ];
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../Constants';

@Component({
  selector: 'app-paintings-dashboard',
  templateUrl: './paintings-dashboard.component.html',
  styleUrls: ['./paintings-dashboard.component.css'],
})
export class PaintingsDashboardComponent implements OnInit {
  rows;
  columns = [
    { prop: 'name' },
    { prop: 'picture' },
    { prop: 'author' },
    { prop: 'lastModified' },
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(Constants.paintingsApiUrl).subscribe((paintings) => {
      this.rows = paintings;
    });
  }
}

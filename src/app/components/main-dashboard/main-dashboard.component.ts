import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const now = moment();
    console.log(now.format('dddd, MMMM DD YYYY, h:mm:ss'));
  }

}

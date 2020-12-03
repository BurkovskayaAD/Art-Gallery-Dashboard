import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Constants } from '../../Constants';
import {HttpServiceService} from '../../services/http-service.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {

  constructor(private http: HttpServiceService) { }

  artist;
  painting;
  exhibition;

  ngOnInit(): void {
    this.http.get(Constants.artistsApiUrl).subscribe(
      (artist) => {this.artist = artist; console.log(this.artist); }
    );
    this.http.get(Constants.paintingsApiUrl).subscribe(
      (painting) => {this.painting = painting; console.log(this.painting); }
    );
    this.http.get(Constants.exhibitionsApiUrl).subscribe(
      (exhibition) => {this.exhibition = exhibition; console.log(this.exhibition); }
    );
  }

}

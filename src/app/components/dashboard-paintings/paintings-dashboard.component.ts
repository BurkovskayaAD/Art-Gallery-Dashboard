import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
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
  columns;
  @ViewChild('linkTemp') linkTemp: TemplateRef<any>;

  loading = false;

  constructor(private http: HttpServiceService) {}

  ngOnInit(): void {
    this.loading = true;
    this.http.get(Constants.paintingsApiUrl).subscribe(
      (paintings) => {
        if (paintings.error){
          // alert('ERROR');
        } else {
          const isNewUser = sessionStorage.getItem('paintingAdded');
          if (isNewUser !== null){
            // alert('ERROR');
            sessionStorage.removeItem('paintingsAdded');
          }
          this.rows = paintings;
        }

        this.loading = false;
      }
    );
    this.columns = [
      { prop: 'name', linkColumn: true},
      { prop: 'genre' },
      { prop: 'author' },
      { prop: 'dateCreation', name: 'Year Creation', yearColumn: true },
      { prop: 'lastModified', dateColumn: true },
    ];
  }
}

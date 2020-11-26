import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../Constants';
import {HttpServiceService} from '../../services/http-service.service';

@Component({
  selector: 'app-exhibitions-dashboard',
  templateUrl: './exhibitions-dashboard.component.html',
  styleUrls: ['./exhibitions-dashboard.component.scss'],
})
export class ExhibitionsDashboardComponent implements OnInit {
  rows;
  columns;
  textExhibitionAdded;
  textExhibitionDisconnect;

  loading = false;

  constructor(private http: HttpServiceService) {}

  ngOnInit(): void {
    this.loading = true;
    this.http.get(Constants.exhibitionsApiUrl).subscribe(
      (exhibitions) => {
        if (exhibitions.error){
          this.textExhibitionDisconnect = true;
        } else {
          this.textExhibitionDisconnect = false;
          const isNewUser = sessionStorage.getItem('exhibitionAdded');
          if (isNewUser !== null){
            this.textExhibitionAdded = true;
            setTimeout(() => { this.textExhibitionAdded = false; }, 2000);
            sessionStorage.removeItem('exhibitionAdded');
          }
          this.rows = exhibitions;
        }

        this.loading = false;
      }
    );
    this.columns = [
      { prop: 'name', linkColumn: true },
      { prop: 'about' },
      { prop: 'dateStart', dateColumn: true },
      { prop: 'dateEnd', dateColumn: true },
      { prop: 'lastModified', dateColumn: true },
    ];
  }
}

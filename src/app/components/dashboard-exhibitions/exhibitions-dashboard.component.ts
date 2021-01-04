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
  textExhibitionEdited;
  textExhibitionDeleted;
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

          const isNewExhibition = sessionStorage.getItem('exhibitionAdded');
          if (isNewExhibition !== null){
            this.textExhibitionAdded = true;
            setTimeout(() => { this.textExhibitionAdded = false; }, 2000);
            sessionStorage.removeItem('exhibitionAdded');
          }

          const isEditExhibition = sessionStorage.getItem('exhibitionEdited');
          if (isEditExhibition !== null){
            this.textExhibitionEdited = true;
            setTimeout(() => { this.textExhibitionEdited = false; }, 2000);
            sessionStorage.removeItem('exhibitionEdited');
          }

          const isDeleteExhibition = sessionStorage.getItem('exhibitionDeleted');
          if (isDeleteExhibition !== null){
            this.textExhibitionDeleted = true;
            setTimeout(() => { this.textExhibitionDeleted = false; }, 2000);
            sessionStorage.removeItem('exhibitionDeleted');
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

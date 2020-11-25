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
  @ViewChild('linkTemp') linkTemp: TemplateRef<any>;

  loading = false;

  constructor(private http: HttpServiceService) {}

  ngOnInit(): void {
    this.loading = true;
    this.http.get(Constants.exhibitionsApiUrl).subscribe(
      (exhibitions) => {
        if (exhibitions.error){
          // alert('ERROR');
        } else {
          const isNewUser = sessionStorage.getItem('exhibitionAdded');
          if (isNewUser !== null){
            // alert('ERROR');
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

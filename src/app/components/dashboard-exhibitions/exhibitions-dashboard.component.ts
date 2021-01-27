import {Component, Input, OnInit} from '@angular/core';
import {Constants} from '../../Constants';
import {HttpServiceService} from '../../services/http-service.service';

@Component({
  selector: 'app-exhibitions-dashboard',
  templateUrl: './exhibitions-dashboard.component.html',
  styleUrls: ['./exhibitions-dashboard.component.scss'],
})

export class ExhibitionsDashboardComponent implements OnInit {
  rows;
  columns;
  textExhibitionDisconnect;
  messages = {textExhibitionAdded: false, textExhibitionEdited: false, textExhibitionDeleted: false};


  loading = false;

  @Input() searchExhibition: string;


  constructor(private http: HttpServiceService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.http.get(Constants.exhibitionsApiUrl).subscribe(
      (exhibitions) => {
        if (exhibitions.error) {
          this.textExhibitionDisconnect = true;
        } else {
          this.textExhibitionDisconnect = false;

          this.messageOutput('exhibitionDeleted', 'textExhibitionDeleted');
          this.messageOutput('exhibitionEdited', 'textExhibitionEdited');
          this.messageOutput('exhibitionAdded', 'textExhibitionAdded');

          this.rows = exhibitions;
        }

        this.loading = false;
      }
    );
    this.columns = [
      {prop: 'name'},
      {prop: 'about'},
      {prop: 'dateStart', dateColumn: true},
      {prop: 'dateEnd', dateColumn: true},
      {prop: 'lastModified', dateColumn: true},
      {prop: 'editOrDelete', buttonColumn: true}
    ];
  }

  messageOutput(key, type): void{
    const b = sessionStorage.getItem(key);
    if (b !== null) {
      this.messages[type] = true;
      setTimeout( () => {
        this.messages[type] = false;
      }, 2000);
      sessionStorage.removeItem(key);
    }
  }

  searchExhibitionChange(searchExhibition: string): void{
    this.searchExhibition = searchExhibition;
  }
}

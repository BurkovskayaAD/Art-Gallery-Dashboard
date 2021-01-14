import {Component, OnInit} from '@angular/core';
import {Constants} from '../../Constants';
import {HttpServiceService} from '../../services/http-service.service';

@Component({
  selector: 'app-paintings-dashboard',
  templateUrl: './paintings-dashboard.component.html',
  styleUrls: ['./paintings-dashboard.component.scss'],
})

export class PaintingsDashboardComponent implements OnInit {
  rows;
  columns;
  textPaintingAdded;
  textPaintingEdited;
  textPaintingDeleted;
  textPaintingDisconnect;

  loading = false;

  constructor(private http: HttpServiceService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.http.get(Constants.paintingsApiUrl).subscribe(
      (paintings) => {
        if (paintings.error) {
          this.textPaintingDisconnect = true;
        } else {
          this.textPaintingDisconnect = false;

          const isNewPainting = sessionStorage.getItem('paintingAdded');
          if (isNewPainting !== null) {
            this.textPaintingAdded = true;
            setTimeout(() => {
              this.textPaintingAdded = false;
            }, 2000);
            sessionStorage.removeItem('paintingAdded');
          }

          const isEditPainting = sessionStorage.getItem('paintingEdited');
          if (isEditPainting !== null) {
            this.textPaintingEdited = true;
            setTimeout(() => {
              this.textPaintingEdited = false;
            }, 2000);
            sessionStorage.removeItem('paintingEdited');
          }

          const isDeletePainting = sessionStorage.getItem('paintingDeleted');
          if (isDeletePainting !== null) {
            this.textPaintingDeleted = true;
            setTimeout(() => {
              this.textPaintingDeleted = false;
            }, 2000);
            sessionStorage.removeItem('paintingDeleted');
          }
          this.rows = paintings;
        }

        this.loading = false;
      }
    );
    this.columns = [
      {prop: 'name'},
      {prop: 'genre'},
      {prop: 'author'},
      {prop: 'dateCreation', name: 'Year Creation', yearColumn: true},
      {prop: 'lastModified', dateColumn: true},
      {prop: 'editOrDelete', buttonColumn: true}
    ];
  }
}

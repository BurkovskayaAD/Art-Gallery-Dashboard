import {Component, Input, OnInit} from '@angular/core';
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
  textPaintingDisconnect;

  messages = {textPaintingAdded: false, textPaintingEdited: false, textPaintingDeleted: false};


  loading = false;

  @Input() searchPainting: string;
  @Input() searchPaintingGenre: string;
  @Input() searchPaintingAuthor: string;

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

          this.messageOutput('paintingDeleted', 'textPaintingDeleted');
          this.messageOutput('paintingEdited', 'textPaintingEdited');
          this.messageOutput('paintingAdded', 'textPaintingAdded');

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

  searchPaintingChange(searchPainting: string): void{
    this.searchPainting = searchPainting;
  }

  searchPaintingGenreChange(searchPaintingGenre: string): void{
    this.searchPaintingGenre = searchPaintingGenre;
  }

  searchPaintingAuthorChange(searchPaintingAuthor: string): void{
    this.searchPaintingAuthor = searchPaintingAuthor;
  }
}

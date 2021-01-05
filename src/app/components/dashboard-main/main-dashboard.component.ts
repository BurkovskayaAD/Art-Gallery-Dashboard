import {AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Constants} from '../../Constants';
import {HttpServiceService} from '../../services/http-service.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})

export class MainDashboardComponent implements OnInit, AfterViewInit {

  constructor(private http: HttpServiceService) {
  }

  artist;
  painting;
  exhibition;

  @ViewChild('linkTemp') linkTemp: TemplateRef<any>;
  @ViewChild('dateTemp') dateTemp: TemplateRef<any>;
  @ViewChild('yearTemp') yearTemp: TemplateRef<any>;

  @Input()
  rowsArtist: object;

  @Input()
  columnsArtist: any;

  @Input()
  rowsPainting: object;

  @Input()
  columnsPainting: any;

  @Input()
  rowsExhibition: object;

  @Input()
  columnsExhibition: any;

  ngOnInit(): void {
    this.http.get(Constants.artistsApiUrl).subscribe(
      (artist) => {
        this.artist = artist;
        console.log(this.artist);
      }
    );
    this.http.get(Constants.paintingsApiUrl).subscribe(
      (painting) => {
        this.painting = painting;
        console.log(this.painting);
      }
    );
    this.http.get(Constants.exhibitionsApiUrl).subscribe(
      (exhibition) => {
        this.exhibition = exhibition;
        console.log(this.exhibition);
      }
    );


    this.http.get(Constants.artistsLatestApiUrl).subscribe(
      (artists) => {
        this.rowsArtist = artists;
      }
    );
    this.columnsArtist = [
      {prop: 'name'},
      {prop: 'occupation'},
      {prop: 'country'},
      {prop: 'dateBirth', dateColumn: true},
      {prop: 'dateDeath', dateColumn: true},
      {prop: 'lastModified', dateColumn: true}
    ];

    this.http.get(Constants.paintingsLatestApiUrl).subscribe(
      (paintings) => {
        this.rowsPainting = paintings;
      }
    );
    this.columnsPainting = [
      {prop: 'name'},
      {prop: 'genre'},
      {prop: 'author'},
      {prop: 'dateCreation', name: 'Year Creation', yearColumn: true},
      {prop: 'lastModified', dateColumn: true},
    ];

    this.http.get(Constants.exhibitionsLatestApiUrl).subscribe(
      (exhibitions) => {
        this.rowsExhibition = exhibitions;
      }
    );
    this.columnsExhibition = [
      {prop: 'name'},
      {prop: 'about'},
      {prop: 'dateStart', dateColumn: true},
      {prop: 'dateEnd', dateColumn: true},
      {prop: 'lastModified', dateColumn: true},
    ];
  }

  ngAfterViewInit(): void {
    this.columnsArtist = this.columnsArtist.map(col => {
      if (col.dateColumn) {
        return {...col, cellTemplate: this.dateTemp};
      }
      if (col.yearColumn) {
        return {...col, cellTemplate: this.yearTemp};
      }
      return col;
    });

    this.columnsPainting = this.columnsPainting.map(col => {
      if (col.dateColumn) {
        return {...col, cellTemplate: this.dateTemp};
      }
      if (col.yearColumn) {
        return {...col, cellTemplate: this.yearTemp};
      }
      return col;
    });

    this.columnsExhibition = this.columnsExhibition.map(col => {
      if (col.dateColumn) {
        return {...col, cellTemplate: this.dateTemp};
      }
      if (col.yearColumn) {
        return {...col, cellTemplate: this.yearTemp};
      }
      return col;
    });
  }

}

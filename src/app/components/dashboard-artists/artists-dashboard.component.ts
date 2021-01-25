import {Component, Input, OnInit} from '@angular/core';
import {Constants} from '../../Constants';
import {HttpServiceService} from '../../services/http-service.service';

@Component({
  selector: 'app-artists-dashboard',
  templateUrl: './artists-dashboard.component.html',
  styleUrls: ['./artists-dashboard.component.scss'],
})

export class ArtistsDashboardComponent implements OnInit {
  rows;
  columns;
  textArtistDisconnect;

  messages = {textArtistAdded: false, textArtistEdited: false, textArtistDeleted: false};

  loading = false;

  @Input() selection: string;
  @Input() searchArtist: string;


  constructor(private http: HttpServiceService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.http.get(Constants.artistsApiUrl).subscribe(
      (artists) => {
        if (artists.error) {
          this.textArtistDisconnect = true;
        } else {
          this.textArtistDisconnect = false;
          this.messageOutput('artistDeleted', 'textArtistDeleted');
          this.messageOutput('artistEdited', 'textArtistEdited');
          this.messageOutput('artistAdded', 'textArtistAdded');
          this.rows = artists;
        }
        this.loading = false;
      }
    );
    this.columns = [
      {prop: 'name'},
      {prop: 'occupation'},
      {prop: 'country'},
      {prop: 'dateBirth', dateColumn: true},
      {prop: 'dateDeath', dateColumn: true},
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

  selectionChange(selectionArtist): void {
    this.selection = selectionArtist;
  }

  searchArtistChange(searchArtist: string): void{
    this.searchArtist = searchArtist;
  }
}

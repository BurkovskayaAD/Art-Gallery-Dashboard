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
  @Input() selectionDateDeath: string;
  @Input() searchArtist: string;
  @Input() searchCountryArtist: string;


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

  selectionChange(selection): void {
    this.selection = selection;
  }

  selectionDateDeathChange(selectionDateDeath): void {
    this.selectionDateDeath = selectionDateDeath;
  }

  searchArtistChange(searchArtist: string): void{
    this.searchArtist = searchArtist;
  }

  searchCountryArtistChange(searchCountryArtist: string): void{
    this.searchCountryArtist = searchCountryArtist;
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../../Constants';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-add-artist-page',
  templateUrl: './add-artist-page.component.html',
  styleUrls: ['./add-artist-page.component.scss']
})
export class AddArtistPageComponent implements OnInit {

  constructor(private http: HttpClient) { }

  @Input() ArtistObj: object;

  ngOnInit(): void {
    this.http.post('http://localhost:3010/artists', this.ArtistObj).subscribe();
  }
}

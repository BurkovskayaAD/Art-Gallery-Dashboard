import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../../Constants';
import {Observable} from 'rxjs';
import {HttpServiceService} from '../../services/http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-artist-page',
  templateUrl: './add-artist-page.component.html',
  styleUrls: ['./add-artist-page.component.scss']
})
export class AddArtistPageComponent implements OnInit {

  constructor(private http: HttpServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  addNewArtist(addArtist: any): void {
    this.http.post(Constants.artistsApiUrl, addArtist).subscribe(
      (data) => {
        sessionStorage.setItem('artistAdded', 'true');
        this.router.navigate(['/artist']);
        },
      error => {
        alert('Something went wrong');
      }
    );
  }
}

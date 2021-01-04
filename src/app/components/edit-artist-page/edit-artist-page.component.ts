import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from '../../services/http-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Constants} from '../../Constants';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit-artist-page',
  templateUrl: './edit-artist-page.component.html',
  styleUrls: ['./edit-artist-page.component.scss']
})
export class EditArtistPageComponent implements OnInit {

  constructor(private http: HttpServiceService,
              private route: ActivatedRoute,
              private router: Router) { }

  private routeSub: Subscription;

  ngOnInit(): void {
  }

  editNewArtist(editNewArtist: any): void {
    this.routeSub = this.route.params.subscribe(param => {
      const idd = String(param.id);
      this.http.post(Constants.artistsEditApiUrl + idd, editNewArtist).subscribe(
        (data) => {
          console.log(editNewArtist);
          console.log(Constants.artistsEditApiUrl + idd);
          sessionStorage.setItem('artistEdited', 'true');
          this.router.navigate(['/artist']);
        },
        error => {
          alert('Something went wrong');
        }
      );
    });
  }

}

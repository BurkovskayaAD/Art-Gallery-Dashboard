import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {HttpServiceService} from '../../services/http-service.service';
import {Constants} from '../../Constants';
import {FormBuilder} from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-artist-form',
  templateUrl: './edit-artist-form.component.html',
  styleUrls: ['./edit-artist-form.component.scss']
})

export class EditArtistFormComponent implements OnInit {

  constructor(private http: HttpServiceService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
  }

  private routeSub: Subscription;
  artistEdit;
  deleteArtist = false;
  DateNow;

  editNewArtist = this.fb.group({
    name: [''],
    country: [''],
    dateBirth: [''],
    dateDeath: [''],
    occupation: [''],
    lastModified: ['']
  });

  @Output() addNewOutput = new EventEmitter();

  get nameError(): any {
    // console.log(this.addNewArtist.get('name').errors);
    return this.editNewArtist.get('name').errors;
  }

  onSubmit(): void {
    this.addNewOutput.emit(this.editNewArtist.value);
    console.log(this.editNewArtist.value);
  }

  onDelete(): void {
    this.deleteArtist = true;
  }

  onDeleteNo(): void {
    this.deleteArtist = false;
  }

  onDeleteYes(): void {
    this.routeSub = this.route.params.subscribe(param => {
      const idd = String(param.id);
      this.http.delete(Constants.artistsEditApiUrl + idd, idd).subscribe(
        (data) => {
          console.log(idd);
          sessionStorage.setItem('artistDeleted', 'true');
          this.router.navigate(['/artist']);
        },
        error => {
          alert('Something went wrong');
        }
      );
    });
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(param => {
      console.log(param);
      const idd = String(param.id);
      console.log(idd);
      this.http.get(Constants.artistsEditApiUrl + idd).subscribe(
        (artistEdit) => {
          this.artistEdit = artistEdit;
          console.log(this.artistEdit);
          this.artistEdit.lastModified = moment().format('YYYY-MM-DD');;
          console.log(this.artistEdit.lastModified);
          // if (this.artistEdit.occupation === 'Painter') {
          //   this.artistEdit.occupation = 0;
          // }
        }
      );
    });

  }

}

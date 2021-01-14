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
    return this.editNewArtist.get('name').errors;
  }

  onSubmit(): void {
    this.addNewOutput.emit(this.editNewArtist.value);
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(param => {
      const idd = String(param.id);
      this.http.get(Constants.artistsEditApiUrl + idd).subscribe(
        (artistEdit) => {
          this.artistEdit = artistEdit;
          this.artistEdit.lastModified = moment().format('YYYY-MM-DD');;
        }
      );
    });

  }

}

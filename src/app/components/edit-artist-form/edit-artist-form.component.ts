import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {HttpServiceService} from '../../services/http-service.service';
import { Constants } from '../../Constants';
import {FormBuilder, Validators} from '@angular/forms';



@Component({
  selector: 'app-edit-artist-form',
  templateUrl: './edit-artist-form.component.html',
  styleUrls: ['./edit-artist-form.component.scss']
})
export class EditArtistFormComponent implements OnInit {

  constructor(private http: HttpServiceService, private fb: FormBuilder, private route: ActivatedRoute) { }

  private routeSub: Subscription;
  artistEdit;

  editNewArtist = this.fb.group({
    name: [''],
    country: [''],
    dateBirth: [''],
    dateDeath: [''],
    photo: [''],
    occupation: ['']
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

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(param => {
      console.log(param);
      const idd = String(param.id);
      console.log(idd);
      this.http.get(Constants.artistsEditApiUrl + idd).subscribe(
        (artistEdit) => {this.artistEdit = artistEdit; console.log(this.artistEdit);
                         // if (this.artistEdit.occupation === 'Painter') {
                         //   this.artistEdit.occupation = 0;
                         // }
        }
      );
    });
  }

}

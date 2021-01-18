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
  artistEditOld;
  fileToUpload: File;
  nameFile: any;
  photoName;

  artistEdit = this.fb.group({
    name: [''],
    country: [''],
    dateBirth: [''],
    dateDeath: [''],
    photo: [''],
    photoOld: [''],
    occupation: [''],
    lastModified: ['']
  });

  @Output() addNewOutput = new EventEmitter();

  get nameError(): any {
    return this.artistEdit.get('name').errors;
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(param => {
      const idd = String(param.id);
      this.http.get(Constants.artistsEditApiUrl + idd).subscribe(
        (artistEditOld) => {
          this.artistEditOld = artistEditOld;
          this.artistEditOld.lastModified = moment().format('YYYY-MM-DD');
          this.photoName = this.artistEditOld.photo;
        }
      );
    });

  }

  onSubmit(): void {
    if (this.fileToUpload === undefined) {
      this.artistEditOld.photo = this.photoName;
      this.addNewOutput.emit(this.artistEditOld);
    } else {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(this.fileToUpload);
      fileReader.onload = () => {
        const formResult = {
          name: this.artistEditOld.name,
          country: this.artistEditOld.country,
          dateBirth: this.artistEditOld.dateBirth,
          dateDeath: this.artistEditOld.dateDeath,
          photo: this.nameFile,
          image: fileReader.result,
          occupation: this.artistEditOld.occupation,
          lastModified: this.artistEditOld.lastModified
        };
        this.addNewOutput.emit(formResult);
      };
      fileReader.onerror = (error) => {
      };
    }
  }


  onChange(event): void {
    this.fileToUpload = event.target.files[0];
    this.nameFile = this.fileToUpload.name;
  }

}

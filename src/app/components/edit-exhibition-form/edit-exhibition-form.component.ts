import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {HttpServiceService} from '../../services/http-service.service';
import {Constants} from '../../Constants';
import {FormBuilder} from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-exhibition-form',
  templateUrl: './edit-exhibition-form.component.html',
  styleUrls: ['./edit-exhibition-form.component.scss']
})

export class EditExhibitionFormComponent implements OnInit {

  constructor(private http: HttpServiceService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
  }

  private routeSub: Subscription;
  exhibitionEdit;
  fileToUpload: File;
  nameFile: any;
  posterName;

  editNewExhibition = this.fb.group({
    name: [''],
    dateStart: [''],
    dateEnd: [''],
    about: [''],
    poster: [''],
    posterOld: [''],
    lastModified: ['']
  });

  @Output() addNewOutput = new EventEmitter();

  get nameError(): any {
    return this.editNewExhibition.get('name').errors;
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(param => {
      const idd = String(param.id);
      this.http.get(Constants.exhibitionsEditApiUrl + idd).subscribe(
        (exhibitionEdit) => {
          this.exhibitionEdit = exhibitionEdit;
          this.posterName = this.exhibitionEdit.poster;
          this.exhibitionEdit.lastModified = moment().format('YYYY-MM-DD');
        }
      );
    });
  }

  onSubmit(): void {
    if (this.fileToUpload === undefined) {
      this.exhibitionEdit.poster = this.posterName;
      this.addNewOutput.emit(this.exhibitionEdit);
    } else {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(this.fileToUpload);
      fileReader.onload = () => {
        const formResult = {
          name: this.exhibitionEdit.name,
          dateStart: this.exhibitionEdit.dateStart,
          dateEnd: this.exhibitionEdit.dateEnd,
          about: this.exhibitionEdit.about,
          poster: this.nameFile,
          image: fileReader.result,
          lastModified: this.exhibitionEdit.lastModified
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

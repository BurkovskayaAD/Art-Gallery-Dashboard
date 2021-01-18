import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {HttpServiceService} from '../../services/http-service.service';
import {Constants} from '../../Constants';
import {FormBuilder} from '@angular/forms';
import * as moment from 'moment';


@Component({
  selector: 'app-edit-painting-form',
  templateUrl: './edit-painting-form.component.html',
  styleUrls: ['./edit-painting-form.component.scss']
})

export class EditPaintingFormComponent implements OnInit {

  constructor(private http: HttpServiceService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
  }

  private routeSub: Subscription;
  paintingEdit;
  deletePainting = false;
  fileToUpload: File;
  nameFile: any;
  pictureName;

  editNewPainting = this.fb.group({
    name: [''],
    genre: [''],
    author: [''],
    dateCreation: [''],
    picture: [''],
    pictureOld: [''],
    lastModified: ['']
  });

  @Output() addNewOutput = new EventEmitter();

  get nameError(): any {
    return this.editNewPainting.get('name').errors;
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(param => {
      const idd = String(param.id);
      this.http.get(Constants.paintingsEditApiUrl + idd).subscribe(
        (paintingEdit) => {
          this.paintingEdit = paintingEdit;
          this.pictureName = this.paintingEdit.picture;
          this.paintingEdit.lastModified = moment().format('YYYY-MM-DD');
        }
      );
    });
  }

  onSubmit(): void {
    if (this.fileToUpload === undefined) {
      this.paintingEdit.picture = this.pictureName;
      this.addNewOutput.emit(this.paintingEdit);
    } else {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(this.fileToUpload);
      fileReader.onload = () => {
        const formResult = {
          name: this.paintingEdit.name,
          genre: this.paintingEdit.genre,
          author: this.paintingEdit.author,
          dateCreation: this.paintingEdit.dateCreation,
          picture: this.nameFile,
          image: fileReader.result,
          lastModified: this.paintingEdit.lastModified
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

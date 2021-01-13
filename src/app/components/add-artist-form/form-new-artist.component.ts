import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {EventEmitter} from '@angular/core';
import {HttpServiceService} from '../../services/http-service.service';
import {Observable, Subscriber} from 'rxjs';

@Component({
  selector: 'app-form-new-artist',
  templateUrl: './form-new-artist.component.html',
  styleUrls: ['./form-new-artist.component.scss']
})
export class FormNewArtistComponent implements OnInit {

  // fileToUpload: File = null;
  fileToUpload: File;

  constructor(private fb: FormBuilder, private http: HttpServiceService) {
  }

  get nameError(): any {
    // console.log(this.addNewArtist.get('name').errors);
    return this.addNewArtist.get('name').errors;
  }

  addNewArtist = this.fb.group({
    name: ['', Validators.required],
    country: ['', Validators.required],
    dateBirth: ['', Validators.required],
    dateDeath: [''],
    photo: ['', Validators.required],
    occupation: ['', Validators.required]
  });

  @Output() addNewOutput = new EventEmitter();
  @Output() addNewOutputImg = new EventEmitter();

  ngOnInit(): void {
  }

  onSubmit(formValue): void {

    const fileReader = new FileReader();
    fileReader.readAsDataURL(this.fileToUpload);

    fileReader.onload = () => {
      const formResult = {
        ...formValue,
        image: fileReader.result,
      };
      console.log(formResult);
      this.addNewOutput.emit(formResult);
    };
    fileReader.onerror = (error) => {
    };


  }

  onChange(event): void {
    this.fileToUpload = event.target.files[0];
  }
}

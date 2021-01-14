import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form-new-artist',
  templateUrl: './form-new-artist.component.html',
  styleUrls: ['./form-new-artist.component.scss']
})
export class FormNewArtistComponent implements OnInit {

  fileToUpload: File;
  nameFile: any;

  constructor(private fb: FormBuilder) {
  }

  get nameError(): any {
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

  ngOnInit(): void {
  }

  onSubmit(formValue): void {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(this.fileToUpload);

    fileReader.onload = () => {
      const formResult = {
        ...formValue,
        photo: this.nameFile,
        image: fileReader.result,
      };
      console.log(formResult);
      this.addNewOutput.emit(formResult);
    };
    fileReader.onerror = (error) => {};
  }

  onChange(event): void {
    this.fileToUpload = event.target.files[0];
    this.nameFile = this.fileToUpload.name;
  }
}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Observable, Subscriber} from 'rxjs';

@Component({
  selector: 'app-form-new-painting',
  templateUrl: './form-new-painting.component.html',
  styleUrls: ['./form-new-painting.component.scss']
})

export class FormNewPaintingComponent implements OnInit {

  fileToUpload: File;
  nameFile: any;

  constructor(private fb: FormBuilder) {
  }

  get nameError(): any {
    return this.addNewPainting.get('name').errors;
  }

  addNewPainting = this.fb.group({
    name: ['', Validators.required],
    genre: ['', Validators.required],
    author: ['', Validators.required],
    dateCreation: ['', Validators.required],
    picture: ['', Validators.required]
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
        picture: this.nameFile,
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

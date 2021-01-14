import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Observable, Subscriber} from 'rxjs';

@Component({
  selector: 'app-form-new-exhibition',
  templateUrl: './form-new-exhibition.component.html',
  styleUrls: ['./form-new-exhibition.component.scss']
})

export class FormNewExhibitionComponent implements OnInit {

  fileToUpload: File;
  nameFile: any;

  constructor(private fb: FormBuilder) {
  }

  get nameError(): any {
    return this.addNewExhibition.get('name').errors;
  }

  addNewExhibition = this.fb.group({
    name: ['', Validators.required],
    dateStart: ['', Validators.required],
    dateEnd: ['', Validators.required],
    about: ['', Validators.required],
    poster: ['', Validators.required],
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
        poster: this.nameFile,
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

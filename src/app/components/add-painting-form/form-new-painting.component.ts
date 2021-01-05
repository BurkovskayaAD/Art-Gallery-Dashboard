import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Observable, Subscriber} from 'rxjs';

@Component({
  selector: 'app-form-new-painting',
  templateUrl: './form-new-painting.component.html',
  styleUrls: ['./form-new-painting.component.scss']
})

export class FormNewPaintingComponent implements OnInit {

  constructor(private fb: FormBuilder) {
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

  onSubmit(): void {
    this.addNewOutput.emit(this.addNewPainting.value);
    const PaintingObj = this.addNewPainting.value;
    console.log(PaintingObj);
  }

  onChangePicture($event: Event): void {
    const file = ($event.target as HTMLInputElement).files[0];
    console.log(file);
    this.convertToBase64Picture(file);
  }

  convertToBase64Picture(file: File): void {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFilePicture(file, subscriber);
    });
    observable.subscribe(d => {
      const data = d;
      console.log(data);
      this.addNewPainting.patchValue({picture: data});
    });
  }

  readFilePicture(file: File, subscriber: Subscriber<any>): void {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      subscriber.next(fileReader.result);
      subscriber.complete();
    };
    fileReader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }
}

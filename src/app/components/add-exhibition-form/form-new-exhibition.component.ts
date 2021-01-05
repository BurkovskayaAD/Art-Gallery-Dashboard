import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Observable, Subscriber} from 'rxjs';

@Component({
  selector: 'app-form-new-exhibition',
  templateUrl: './form-new-exhibition.component.html',
  styleUrls: ['./form-new-exhibition.component.scss']
})

export class FormNewExhibitionComponent implements OnInit {

  constructor(private fb: FormBuilder) {
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

  get nameError(): any {
    // console.log(this.addNewExhibition.get('name').errors);
    return this.addNewExhibition.get('name').errors;
  }

  onSubmit(): void {
    this.addNewOutput.emit(this.addNewExhibition.value);
    console.log(this.addNewExhibition.value);
  }

  onChangePoster($event: Event): void {
    const file = ($event.target as HTMLInputElement).files[0];
    console.log(file);
    this.convertToBase64Poster(file);
  }

  convertToBase64Poster(file: File): void {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFilePoster(file, subscriber);
    });
    observable.subscribe(d => {
      const data = d;
      console.log(data);
      this.addNewExhibition.patchValue({poster: data});
    });
  }

  readFilePoster(file: File, subscriber: Subscriber<any>): void {
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

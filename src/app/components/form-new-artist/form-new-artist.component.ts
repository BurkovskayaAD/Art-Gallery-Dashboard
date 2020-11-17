import {Component, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
// import {EventEmitter} from 'events';
import { EventEmitter } from '@angular/core';
import {Observable, Subscriber} from 'rxjs';

@Component({
  selector: 'app-form-new-artist',
  templateUrl: './form-new-artist.component.html',
  styleUrls: ['./form-new-artist.component.scss']
})
export class FormNewArtistComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  addNewArtist = this.fb.group({
    name: ['', Validators.required],
    country: ['', Validators.required],
    dateBirth: ['', Validators.required],
    dateDeath: [''],
    photo: ['', Validators.required],
    occupation: ['', Validators.required]
  });

  @Output() AddNewOutput = new EventEmitter();

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.AddNewOutput.emit(this.addNewArtist.value);
    const ArtistObj = this.addNewArtist.value;
    console.log(ArtistObj);
  }

  onChange($event: Event): void{
    const file = ($event.target as HTMLInputElement).files[0];
    console.log(file);
    this.convertToBase64(file);
  }

  convertToBase64(file: File): void{
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    observable.subscribe(d => {
      const data = d;
      console.log(data);
      this.addNewArtist.patchValue({photo: data});
    });
  }

  readFile(file: File, subscriber: Subscriber<any>): void{
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

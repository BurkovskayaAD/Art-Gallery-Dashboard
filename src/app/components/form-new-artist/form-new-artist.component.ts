import {Component, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
// import {EventEmitter} from 'events';
import { EventEmitter } from '@angular/core';

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
    // const form = document.querySelector('#aForm');
    // const artistObj = new FormData();
    // artistObj.set('name', form.elements.name.value);
    // artistObj.set('photo', form.elements.photo.files[0]);
    // artistObj.set('occupation', form.elements.occupation.value);
    // console.log(artistObj);
  }
}

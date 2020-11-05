import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-new-artist',
  templateUrl: './form-new-artist.component.html',
  styleUrls: ['./form-new-artist.component.css']
})
export class FormNewArtistComponent implements OnInit {

  addNewArtist: FormGroup;

  constructor() {
    this._createForm();
  }

  // nameControl: FormControl;


  ngOnInit(): void {
    // this.nameControl = new FormControl([myValidator]);
  }

  private _createForm(): void{
    this.addNewArtist = new FormGroup({
      name: new FormControl(null),
      photo: new FormControl(null),
      occupation: new FormControl(null)
    });
  }



// function myValidator(formControl: FormControl) {
//   if (formControl.value.length = 0) {
//     return {myValidator: {message: 'Add name'}};
//   }
//   return null;

}

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

  ngOnInit(): void {
  }

  // public onSubmited(): void{
  //   this.formSubmited = true;
  // }

  private _createForm(): void{
    this.addNewArtist = new FormGroup({
      name: new FormControl(null),
      photo: new FormControl(null),
      occupation: new FormControl(null)
    });
  }


}

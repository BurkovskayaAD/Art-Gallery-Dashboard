import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-new-exhibition',
  templateUrl: './form-new-exhibition.component.html',
  styleUrls: ['./form-new-exhibition.component.css']
})
export class FormNewExhibitionComponent implements OnInit {

  addNewExhibition: FormGroup;

  constructor() {
    this._createForm();
  }

  ngOnInit(): void {
  }
  private _createForm(): void{
    this.addNewExhibition = new FormGroup({
      name: new FormControl(null),
      date: new FormControl(null),
      about: new FormControl(null),
      poster: new FormControl(null)
    });
  }

}

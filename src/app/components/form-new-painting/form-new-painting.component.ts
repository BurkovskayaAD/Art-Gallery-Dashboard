import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-new-painting',
  templateUrl: './form-new-painting.component.html',
  styleUrls: ['./form-new-painting.component.css']
})
export class FormNewPaintingComponent implements OnInit {

  addNewPainting: FormGroup;

  constructor() {
    this._createForm();
  }

  ngOnInit(): void {
  }

  private _createForm(): void{
    this.addNewPainting = new FormGroup({
      name: new FormControl(null),
      picture: new FormControl(null),
      author: new FormControl(null)
    });
  }

}

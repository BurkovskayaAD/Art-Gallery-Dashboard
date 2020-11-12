import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log(this.addNewPainting.value);
  }
}

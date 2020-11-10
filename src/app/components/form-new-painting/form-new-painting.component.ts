import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-new-painting',
  templateUrl: './form-new-painting.component.html',
  styleUrls: ['./form-new-painting.component.css']
})
export class FormNewPaintingComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  addNewPainting = this.fb.group({
    name: ['', Validators.required],
    picture: ['', Validators.required],
    author: ['', Validators.required],
  });

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log(this.addNewPainting.value);
  }
}

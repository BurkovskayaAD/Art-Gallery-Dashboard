import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-new-exhibition',
  templateUrl: './form-new-exhibition.component.html',
  styleUrls: ['./form-new-exhibition.component.css']
})
export class FormNewExhibitionComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  addNewExhibition = this.fb.group({
    name: ['', Validators.required],
    date: ['', Validators.required],
    about: ['', Validators.required],
    poster: ['', Validators.required],
  });

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log(this.addNewExhibition.value);
  }

}

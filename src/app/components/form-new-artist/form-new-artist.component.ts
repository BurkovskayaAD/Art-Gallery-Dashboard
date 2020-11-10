import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-new-artist',
  templateUrl: './form-new-artist.component.html',
  styleUrls: ['./form-new-artist.component.css']
})
export class FormNewArtistComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  addNewArtist = this.fb.group({
    name: ['', Validators.required],
    photo: ['', Validators.required],
    occupation: ['']
  });

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log(this.addNewArtist.value);
  }
}

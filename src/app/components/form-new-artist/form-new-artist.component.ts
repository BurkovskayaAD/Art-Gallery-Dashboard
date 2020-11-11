import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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
    photo: ['', Validators.required],
    occupation: ['', Validators.required]
  });

  // @Input() addNewArtist: object;

  ngOnInit(): void {
  }

  onSubmit(): void{
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

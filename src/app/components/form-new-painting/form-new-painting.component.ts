import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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

  @Output() AddNewOutput = new EventEmitter();

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.AddNewOutput.emit(this.addNewPainting.value);
    const PaintingObj = this.addNewPainting.value;
    console.log(PaintingObj);
  }
}

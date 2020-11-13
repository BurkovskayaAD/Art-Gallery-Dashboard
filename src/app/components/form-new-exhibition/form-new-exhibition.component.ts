import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-new-exhibition',
  templateUrl: './form-new-exhibition.component.html',
  styleUrls: ['./form-new-exhibition.component.scss']
})
export class FormNewExhibitionComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  addNewExhibition = this.fb.group({
    name: ['', Validators.required],
    dateStart: ['', Validators.required],
    dateEnd: ['', Validators.required],
    about: ['', Validators.required],
    poster: ['', Validators.required],
  });

  @Output() AddNewOutput = new EventEmitter();

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.AddNewOutput.emit(this.addNewExhibition.value);
    const ExhibitionObj = this.addNewExhibition.value;
    console.log(ExhibitionObj);
  }

}

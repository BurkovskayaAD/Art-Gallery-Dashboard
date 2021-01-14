import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {HttpServiceService} from '../../services/http-service.service';
import {Constants} from '../../Constants';
import {FormBuilder} from '@angular/forms';
import * as moment from 'moment';


@Component({
  selector: 'app-edit-painting-form',
  templateUrl: './edit-painting-form.component.html',
  styleUrls: ['./edit-painting-form.component.scss']
})

export class EditPaintingFormComponent implements OnInit {

  constructor(private http: HttpServiceService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
  }

  private routeSub: Subscription;
  paintingEdit;
  deletePainting = false;

  editNewPainting = this.fb.group({
    name: [''],
    genre: [''],
    author: [''],
    dateCreation: [''],
    lastModified: ['']
  });

  @Output() addNewOutput = new EventEmitter();

  get nameError(): any {
    return this.editNewPainting.get('name').errors;
  }

  onSubmit(): void {
    this.addNewOutput.emit(this.editNewPainting.value);
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(param => {
      const idd = String(param.id);
      this.http.get(Constants.paintingsEditApiUrl + idd).subscribe(
        (paintingEdit) => {
          this.paintingEdit = paintingEdit;
          this.paintingEdit.lastModified = moment().format('YYYY-MM-DD');
        }
      );
    });
  }

}

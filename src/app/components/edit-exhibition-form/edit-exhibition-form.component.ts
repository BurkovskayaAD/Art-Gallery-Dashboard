import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {HttpServiceService} from '../../services/http-service.service';
import {Constants} from '../../Constants';
import {FormBuilder} from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-exhibition-form',
  templateUrl: './edit-exhibition-form.component.html',
  styleUrls: ['./edit-exhibition-form.component.scss']
})

export class EditExhibitionFormComponent implements OnInit {

  constructor(private http: HttpServiceService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
  }

  private routeSub: Subscription;
  exhibitionEdit;

  editNewExhibition = this.fb.group({
    name: [''],
    dateStart: [''],
    dateEnd: [''],
    about: [''],
    lastModified: ['']
  });

  @Output() addNewOutput = new EventEmitter();

  get nameError(): any {
    return this.editNewExhibition.get('name').errors;
  }

  onSubmit(): void {
    this.addNewOutput.emit(this.editNewExhibition.value);
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(param => {
      const idd = String(param.id);
      this.http.get(Constants.exhibitionsEditApiUrl + idd).subscribe(
        (exhibitionEdit) => {
          this.exhibitionEdit = exhibitionEdit;
          this.exhibitionEdit.lastModified = moment().format('YYYY-MM-DD');
        }
      );
    });
  }

}

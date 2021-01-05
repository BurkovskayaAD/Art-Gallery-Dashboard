import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {HttpServiceService} from '../../services/http-service.service';
import {Constants} from '../../Constants';
import {FormBuilder} from '@angular/forms';

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
    dateCreation: ['']
  });

  @Output() addNewOutput = new EventEmitter();

  get nameError(): any {
    return this.editNewPainting.get('name').errors;
  }

  onSubmit(): void {
    this.addNewOutput.emit(this.editNewPainting.value);
    console.log(this.editNewPainting.value);
  }

  onDelete(): void {
    this.deletePainting = true;
  }

  onDeleteNo(): void {
    this.deletePainting = false;
  }

  onDeleteYes(): void {
    this.routeSub = this.route.params.subscribe(param => {
      const idd = String(param.id);
      this.http.delete(Constants.paintingsEditApiUrl + idd, idd).subscribe(
        (data) => {
          console.log(idd);
          sessionStorage.setItem('paintingDeleted', 'true');
          this.router.navigate(['/painting']);
        },
        error => {
          alert('Something went wrong');
        }
      );
    });
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(param => {
      console.log(param);
      const idd = String(param.id);
      console.log(idd);
      this.http.get(Constants.paintingsEditApiUrl + idd).subscribe(
        (paintingEdit) => {
          this.paintingEdit = paintingEdit;
          console.log(this.paintingEdit);
        }
      );
    });
  }

}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {HttpServiceService} from '../../services/http-service.service';
import { Constants } from '../../Constants';
import {FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-edit-exhibition-form',
  templateUrl: './edit-exhibition-form.component.html',
  styleUrls: ['./edit-exhibition-form.component.scss']
})
export class EditExhibitionFormComponent implements OnInit {

  constructor(private http: HttpServiceService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) { }

  private routeSub: Subscription;
  exhibitionEdit;
  deleteExhibition = false;

  editNewExhibition = this.fb.group({
    name: [''],
    dateStart: [''],
    dateEnd: [''],
    about: ['']
  });

  @Output() addNewOutput = new EventEmitter();

  get nameError(): any {
    return this.editNewExhibition.get('name').errors;
  }

  onSubmit(): void {
    this.addNewOutput.emit(this.editNewExhibition.value);
    console.log(this.editNewExhibition.value);
  }

  onDelete(): void {
    this.deleteExhibition = true;
  }

  onDeleteNo(): void{
    this.deleteExhibition = false;
  }

  onDeleteYes(): void{
    this.routeSub = this.route.params.subscribe(param => {
      const idd = String(param.id);
      this.http.delete(Constants.exhibitionsEditApiUrl + idd, idd).subscribe(
        (data) => {
          console.log(idd);
          sessionStorage.setItem('exhibitionDeleted', 'true');
          this.router.navigate(['/exhibition']);
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
      this.http.get(Constants.exhibitionsEditApiUrl + idd).subscribe(
        (exhibitionEdit) => {this.exhibitionEdit = exhibitionEdit;
                             console.log(this.exhibitionEdit);
        }
      );
    });
  }

}

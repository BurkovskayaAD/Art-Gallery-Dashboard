import {Component, OnInit} from '@angular/core';
import {HttpServiceService} from '../../services/http-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Constants} from '../../Constants';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit-painting-page',
  templateUrl: './edit-painting-page.component.html',
  styleUrls: ['./edit-painting-page.component.scss']
})
export class EditPaintingPageComponent implements OnInit {

  constructor(private http: HttpServiceService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  private routeSub: Subscription;

  ngOnInit(): void {
  }

  editNewPainting(editNewPainting: any): void {
    this.routeSub = this.route.params.subscribe(param => {
      const idd = String(param.id);
      this.http.post(Constants.paintingsEditApiUrl + idd, editNewPainting).subscribe(
        (data) => {
          sessionStorage.setItem('paintingEdited', 'true');
          this.router.navigate(['/painting']);
        },
        error => {
          alert('Something went wrong');
        }
      );
    });
  }

}

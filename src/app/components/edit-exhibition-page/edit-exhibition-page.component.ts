import {Component, OnInit} from '@angular/core';
import {HttpServiceService} from '../../services/http-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Constants} from '../../Constants';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit-exhibition-page',
  templateUrl: './edit-exhibition-page.component.html',
  styleUrls: ['./edit-exhibition-page.component.scss']
})
export class EditExhibitionPageComponent implements OnInit {

  constructor(private http: HttpServiceService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  private routeSub: Subscription;


  ngOnInit(): void {
  }

  editNewExhibition(editNewExhibition: any): void {
    this.routeSub = this.route.params.subscribe(param => {
      const idd = String(param.id);
      this.http.post(Constants.exhibitionsEditApiUrl + idd, editNewExhibition).subscribe(
        (data) => {
          console.log(editNewExhibition);
          console.log(Constants.exhibitionsEditApiUrl + idd);
          sessionStorage.setItem('exhibitionEdited', 'true');
          this.router.navigate(['/exhibition']);
        },
        error => {
          alert('Something went wrong');
        }
      );
    });
  }

}

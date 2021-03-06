import {Component, Input, OnInit} from '@angular/core';
import {HttpServiceService} from '../../services/http-service.service';
import {Constants} from '../../Constants';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-exhibition-page',
  templateUrl: './add-exhibition-page.component.html',
  styleUrls: ['./add-exhibition-page.component.scss']
})

export class AddExhibitionPageComponent implements OnInit {

  @Input() addExhibition;

  constructor(private http: HttpServiceService, private router: Router) {
  }

  ngOnInit(): void {
  }

  addNewExhibition(addExhibition: any): void {
    this.http.post(Constants.exhibitionsApiUrl, addExhibition).subscribe(
      (data) => {
        sessionStorage.setItem('exhibitionAdded', 'true');
        this.router.navigate(['/exhibition']);
      },
      error => {
        alert('Something went wrong');
      }
    );
  }

}

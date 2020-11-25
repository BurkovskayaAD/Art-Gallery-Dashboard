import {Component, Input, OnInit} from '@angular/core';
import {HttpServiceService} from '../../services/http-service.service';
import {Constants} from '../../Constants';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-painting-page',
  templateUrl: './add-painting-page.component.html',
  styleUrls: ['./add-painting-page.component.scss']
})
export class AddPaintingPageComponent implements OnInit {

  @Input() addPainting;

  constructor(private http: HttpServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  addNewPainting(addPainting: any): void {
    this.http.post(Constants.paintingsApiUrl, addPainting).subscribe(
      (data) => {
        sessionStorage.setItem('paintingAdded', 'true');
        this.router.navigate(['/exhibition']);
      },
      error => {
        alert('Something went wrong');
      }
    );
  }

}

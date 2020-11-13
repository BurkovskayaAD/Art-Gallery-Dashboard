import {Component, Input, OnInit} from '@angular/core';
import {HttpServiceService} from '../../services/http-service.service';
import {Constants} from '../../Constants';

@Component({
  selector: 'app-add-painting-page',
  templateUrl: './add-painting-page.component.html',
  styleUrls: ['./add-painting-page.component.scss']
})
export class AddPaintingPageComponent implements OnInit {

  @Input() addPainting;

  constructor(private http: HttpServiceService) { }

  ngOnInit(): void {
  }

  addNewPainting(addPainting: any): void {
    this.http.post(Constants.paintingsApiUrl, addPainting).subscribe();
  }

}

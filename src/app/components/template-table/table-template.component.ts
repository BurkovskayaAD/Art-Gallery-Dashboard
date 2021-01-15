import {AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Constants} from '../../Constants';
import {HttpServiceService} from '../../services/http-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-table-template',
  templateUrl: './table-template.component.html',
  styleUrls: ['./table-template.component.scss']
})
export class TableTemplateComponent implements OnInit, AfterViewInit {

  constructor(private http: HttpServiceService, private route: ActivatedRoute, private router: Router) {
  }

  private routeSub: Subscription;
  delete = false;
  idRow;

  @ViewChild('linkTemp') linkTemp: TemplateRef<any>;
  @ViewChild('dateTemp') dateTemp: TemplateRef<any>;
  @ViewChild('yearTemp') yearTemp: TemplateRef<any>;
  @ViewChild('buttonTemp') buttonTemp: TemplateRef<any>;


  @Input()
  rows: object;

  @Input()
  columns: any;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.columns = this.columns.map(col => {
      if (col.linkColumn) {
        return {...col, cellTemplate: this.linkTemp};
      }
      if (col.dateColumn) {
        return {...col, cellTemplate: this.dateTemp};
      }
      if (col.yearColumn) {
        return {...col, cellTemplate: this.yearTemp};
      }
      if (col.buttonColumn) {
        return {...col, cellTemplate: this.buttonTemp};
      }
      return col;
    });
  }

  onDelete(row): void {
    this.delete = true;
    this.idRow = row.toString();
  }

  onDeleteNo(): void {
    this.delete = false;
  }

  onDeleteYes(): void {
    this.routeSub = this.route.params.subscribe(param => {
      const idd = this.idRow;
      const href = this.router.url + 's';
      console.log(href);

      if (href === '/exhibitions') {
        this.http.delete(Constants.exhibitionsApiUrl + '/' + idd, idd).subscribe(
          (data) => {
            sessionStorage.setItem('exhibitionDeleted', 'true');
            this.delete = false;
            location.reload();
          },
          error => {
            alert('Something went wrong');
          }
        );
      } else if (href === '/paintings') {
        this.http.delete(Constants.paintingsApiUrl + '/' + idd, idd).subscribe(
          (data) => {
            sessionStorage.setItem('paintingDeleted', 'true');
            this.delete = false;
            location.reload();
          },
          error => {
            alert('Something went wrong');
          }
        );
      } else {
        this.http.delete(Constants.artistsApiUrl + '/' + idd, idd).subscribe(
          (data) => {
            sessionStorage.setItem('artistDeleted', 'true');
            this.delete = false;
            location.reload();
          },
          error => {
            alert('Something went wrong');
          }
        );
      }

    });
  }

}

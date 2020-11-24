import {AfterViewInit, Component, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import { ArtistsDashboardComponent } from '../dashboard-artists/artists-dashboard.component';
import * as moment from 'moment';

@Component({
  selector: 'app-table-template',
  templateUrl: './table-template.component.html',
  styleUrls: ['./table-template.component.scss']
})
export class TableTemplateComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild('linkTemp') linkTemp: TemplateRef<any>;

  @Input()
  rows: object;

  @Input()
  columns: any;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const newCol = {
      ...this.columns[0],
      cellTemplate: this.linkTemp
    };
    console.log(this.columns);
    this.columns = [newCol, ...this.columns.slice(1)];
    console.log(this.columns);
  }

}

import {Component, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import { ArtistsDashboardComponent } from '../dashboard-artists/artists-dashboard.component';
import * as moment from 'moment';

@Component({
  selector: 'app-table-template',
  templateUrl: './table-template.component.html',
  styleUrls: ['./table-template.component.scss']
})
export class TableTemplateComponent implements OnInit {

  constructor() { }

  @ViewChild('linkTemp') linkTemp: TemplateRef<any>;

  @Input()
  rows: object;

  @Input()
  columns: object;

  ngOnInit(): void {
  }

}

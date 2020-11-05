import {Component, Input, OnInit, Output, TemplateRef} from '@angular/core';
import { ArtistsDashboardComponent } from '../artists-dashboard/artists-dashboard.component';
import * as moment from 'moment';

@Component({
  selector: 'app-table-template',
  templateUrl: './table-template.component.html',
  styleUrls: ['./table-template.component.css']
})
export class TableTemplateComponent implements OnInit {
  roleTemplate: TemplateRef<any>;

  @Input()
  rows: object;

  @Input()
  columns: object;

  constructor() { }

  ngOnInit(): void {
  }
}

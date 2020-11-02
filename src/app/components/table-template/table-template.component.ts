import {Component, Input, OnInit} from '@angular/core';
import { ArtistsDashboardComponent } from '../artists-dashboard/artists-dashboard.component';

@Component({
  selector: 'app-table-template',
  templateUrl: './table-template.component.html',
  styleUrls: ['./table-template.component.css']
})
export class TableTemplateComponent implements OnInit {


  @Input()
  rows: object;

  @Input()
  columns: object;

  constructor() { }

  ngOnInit(): void {
  }

}

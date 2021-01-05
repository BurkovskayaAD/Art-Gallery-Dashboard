import {AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-table-template',
  templateUrl: './table-template.component.html',
  styleUrls: ['./table-template.component.scss']
})
export class TableTemplateComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  @ViewChild('linkTemp') linkTemp: TemplateRef<any>;
  @ViewChild('dateTemp') dateTemp: TemplateRef<any>;
  @ViewChild('yearTemp') yearTemp: TemplateRef<any>;

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
      return col;
    });
  }

}

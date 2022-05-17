import { Component, ContentChild, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { ColumnDirective } from './directives/column.directive';
import { IDictionary } from './models/types';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() rows: IDictionary[] = [];
  @Input() page = 1;
  @Input() pageSize = 10;
  @Input() totalRows = 0;

  @ContentChildren(ColumnDirective) columns!: QueryList<ColumnDirective>;

  constructor() { }

  ngOnInit(): void {
  }
}

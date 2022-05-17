import { ContentChild, Directive, Input } from '@angular/core';
import { COL_DATE_TYPE } from '../models/types';
import { CellDirective } from './cell.directive';
import { HeaderDirective } from './header.directive';

@Directive({
  selector: 'ngvn-column',
})
export class ColumnDirective {
  @Input() header = '';
  @Input() key = '';
  @Input() renderKey = '';
  @Input() dataType = COL_DATE_TYPE.TEXT;

  @ContentChild(CellDirective, { static: true }) tplCell!: CellDirective;
  @ContentChild(HeaderDirective, { static: true }) tplHeader!: HeaderDirective;

  constructor() {}
}

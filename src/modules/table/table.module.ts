import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColumnDirective } from 'src/app/modules/table/table/directives/column.directive';
import { TableComponent } from 'src/app/modules/table/table/table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { HeaderDirective } from 'src/app/modules/table/table/directives/header.directive';
import { CellDirective } from 'src/app/modules/table/table/directives/cell.directive';

@NgModule({
  declarations: [TableComponent, ColumnDirective, HeaderDirective, CellDirective],
  imports: [CommonModule, NzTableModule],
  exports: [TableComponent, ColumnDirective, HeaderDirective, CellDirective],
})
export class TableModule {}

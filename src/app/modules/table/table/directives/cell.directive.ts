import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCell]',
})
export class CellDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}

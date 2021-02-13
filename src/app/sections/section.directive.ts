import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[sectionsHost]'
})
export class SectionDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}

import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  constructor(
    private readonly templateRef:TemplateRef<any>,
    private readonly  viewContainer:ViewContainerRef
  ) { }

  @Input() set appUnless(condition:boolean)
  {
    //logic
  }

}

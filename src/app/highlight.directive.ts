import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    private readonly el:ElementRef
  ) { 
    el.nativeElement.style.backgroundcolor ='yellow';
  }

  @HostListener('mouseenter') onMouseEnter()
  {

  }

  @HostListener('mouseleave') onMouseLeave()
  {
    
  }

  @HostListener('click') onClick()
  {
    if(this.el.nativeElement.id=== 'btnadd')
    {

    }
  }

  @Input() appHighlight = '';

}

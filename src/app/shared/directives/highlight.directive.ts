import { Directive, HostBinding, HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  private element: HTMLElement;

  constructor(el: ElementRef) {
    this.element = el.nativeElement;
   }

   @HostBinding('style.background')
   style = 'lightgray';

   @HostListener('mouseenter')
   onMouseEnter() {
     this.highlight('grey');
   }

   @HostListener('mouseleave')
   onMouseLeave() {
     this.highlight('lightgray');
   }

   private highlight(color: string) {
     this.element.style.backgroundColor = color;
   }

}

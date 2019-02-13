import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appTextClick]'
})
export class TextClickDirective {

  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostListener('click')
  onClick() {
    this.render.setStyle(this.el.nativeElement, 'font-style', 'italic');
  }
}

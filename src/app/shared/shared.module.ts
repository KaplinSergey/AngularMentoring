import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { EnamPipe } from './pipes/enam.pipe';

@NgModule({
  declarations: [HighlightDirective, EnamPipe],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    EnamPipe
  ]
})
export class SharedModule { }

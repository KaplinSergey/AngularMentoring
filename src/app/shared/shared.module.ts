import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { EnamPipe } from './pipes/enam.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [HighlightDirective, EnamPipe, OrderByPipe],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    EnamPipe,
    OrderByPipe
  ]
})
export class SharedModule { }

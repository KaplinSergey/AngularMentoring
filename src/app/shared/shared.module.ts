import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { EnamPipe } from './pipes/enam.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';

const exportedEntities = [HighlightDirective, EnamPipe, OrderByPipe];

@NgModule({
  declarations: [...exportedEntities],
  imports: [
    CommonModule
  ],
  exports: [...exportedEntities]
})
export class SharedModule { }

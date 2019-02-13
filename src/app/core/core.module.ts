import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ChangeHostElementDirective } from './directives/change-host-element.directive';
import { TextClickDirective } from './directives/text-click.directive';

@NgModule({
  declarations: [ContactUsComponent, ChangeHostElementDirective, TextClickDirective],
  imports: [
    CommonModule
  ],
  exports: [ContactUsComponent]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ChangeHostElementDirective } from './directives/change-host-element.directive';

@NgModule({
  declarations: [ContactUsComponent, ChangeHostElementDirective],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }

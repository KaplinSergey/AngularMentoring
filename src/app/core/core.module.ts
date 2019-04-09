import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ChangeHostElementDirective } from './directives/change-host-element.directive';
import { TextClickDirective } from './directives/text-click.directive';
import { LocalStorageService } from './services/localstorage/local-storage.service';
import { AppSettingsService } from './services/appsettings/app.settings.service';

@NgModule({
  declarations: [ContactUsComponent, ChangeHostElementDirective, TextClickDirective],
  imports: [
    CommonModule
  ],
  exports: [ContactUsComponent]
})
export class CoreModule { }

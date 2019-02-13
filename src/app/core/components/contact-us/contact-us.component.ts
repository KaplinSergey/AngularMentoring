import { Component, Optional, OnInit, Inject, InjectionToken } from '@angular/core';
import { ConstantsService } from '../../services/constants/constants.service';
import { LocalStorageService } from '../../services/localstorage/local-storage.service';
import { GeneratorService } from '../../services/generator/generator.service';
import { ConfigOptionsService } from '../../services/configoptions/config-options.service';
import { GeneratorServiceNFactory, StringGenerator } from '../../services/generator/generator-service-n.factory';
import { ConfigModel } from '../../models/config-model';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  providers: [
    { provide: ConstantsService, useValue: { App: 'TaskManager', Ver: '1.0'} },
    { provide: LocalStorageService, useClass: LocalStorageService },
    { provide: StringGenerator, useFactory: GeneratorServiceNFactory(5), deps: [GeneratorService] }
  ]
})
export class ContactUsComponent implements OnInit {

  constructor(
    @Inject(ConstantsService) private constant: string,
    @Optional() private localStorage: LocalStorageService,
    @Inject(StringGenerator) private stringGenerator: string,
    @Optional() private configOptionsService: ConfigOptionsService
  ) { }

  ngOnInit() {
  }

  getConstant() {
    return this.constant;
  }

  getRandomString(): string {
    return this.stringGenerator;
  }

  getConfig(): ConfigModel {
    return this.configOptionsService.get();
  }

  setConfig(configObject) {
    this.configOptionsService.set(configObject);
  }

  getLocalStorageItem(): number {
    return this.localStorage.getItem();
  }

  setLocalStorageItem(item: number) {
    this.localStorage.setItem(item);
  }

  removeLocalStorageItem() {
    this.localStorage.removeItem();
  }
}

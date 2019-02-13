import { Injectable } from '@angular/core';
import { ConfigModel } from '../../models/config-model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private config: ConfigModel;

  constructor() { }

  get() {
    return this.config;
  }

  set(configModel) {
    for (const prop in configModel) {
      if (this.config.hasOwnProperty(prop)) {
         this.config[prop] = configModel[prop];
      }
    }
  }
}

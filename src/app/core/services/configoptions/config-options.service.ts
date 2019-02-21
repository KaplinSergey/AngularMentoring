import { Injectable } from '@angular/core';
import { ConfigModel } from '../../models/config-model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private config: ConfigModel;

  constructor() {
    this.config = new ConfigModel(1, 'test', 'test@gmail.com');
  }

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

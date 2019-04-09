import { Injectable } from '@angular/core';
import { CoreModule } from '../../core.module';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(name: string, item: string) {
    window.localStorage.setItem(name, item);
  }

  getItem(name: string) {
    return window.localStorage.removeItem(name);
  }

  removeItem(name: string) {
    window.localStorage.removeItem(name);
  }
}

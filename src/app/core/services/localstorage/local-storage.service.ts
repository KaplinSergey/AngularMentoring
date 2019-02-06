import { Injectable } from '@angular/core';
import { LocalStorage } from '../../models/local-storage';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private localStorage: LocalStorage;

  constructor() { }

  setItem(item: number) {
    this.localStorage.item = item;
  }

  getItem() {
    return this.localStorage.item;
  }

  removeItem() {
    this.localStorage.item = 0;
  }
}

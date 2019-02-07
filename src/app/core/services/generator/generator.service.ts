import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor() { }

  getRandomString(stringLength: number): string {
    let randomString = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < stringLength; i++) {
      randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomString;
  }
}

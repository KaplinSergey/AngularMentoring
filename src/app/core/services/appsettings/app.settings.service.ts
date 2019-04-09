import { Injectable } from '@angular/core';
import { CoreModule } from '../../core.module';
import { LocalStorageService } from '../localstorage/local-storage.service';
import { HttpClient } from '@angular/common/http';
import { AppSettingsModel } from '../../models/app.settings-model';

@Injectable({
    providedIn: 'root'
})
export class AppSettingsService {
    private appSettingsFilePath = 'assets/app-settings.json';
    private settings = new AppSettingsModel();

    constructor(
        private localStorage: LocalStorageService,
        private http: HttpClient) { }

    loadSettings() {
        console.log('Try get settings from local storage ');
        if (!this.loadSettingsFromLocalStorage()) {
            console.log('Try get settings from file');
            this.loadSettingsFromFile();
        }
    }

    private loadSettingsFromLocalStorage(): boolean {
        const localStorageSettings = [];

        for (const key in this.settings) {
            if (this.settings.hasOwnProperty(key)) {
                const item = this.localStorage.getItem(key);
                if (item) {
                    localStorageSettings.push(this.localStorage.getItem(key));
                }
            }
        }

        if (localStorageSettings.length > 0) {
            this.settings = new AppSettingsModel(...localStorageSettings);
            return true;
        } else {
            return false;
        }
    }

    private setSettingsToLocalStorage(setting: AppSettingsModel) {
        for (const key in this.settings) {
            if (this.settings.hasOwnProperty(key)) {
                this.localStorage.setItem(key, this.settings[key]);
            }
        }
    }

    private loadSettingsFromFile(): Promise<any> {
        return this.http
            .get(this.appSettingsFilePath)
            .toPromise()
            .then(response => {
                this.settings = <AppSettingsModel>response;
                console.log('Set settings from file to local storage');
                this.setSettingsToLocalStorage(this.settings);
            })
            .catch(() => {
                console.log('Set default settings to local storage');
                this.settings = new AppSettingsModel(true, 'dev');
                this.setSettingsToLocalStorage(this.settings);
            });
    }
}

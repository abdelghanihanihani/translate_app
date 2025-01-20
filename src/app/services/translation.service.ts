import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  direction: 'ltr' | 'rtl' = 'ltr'; // Default direction

  constructor(private translate: TranslateService) {
    this.initTranslationsConfig();
  }

  initTranslationsConfig() {
    this.translate.addLangs(['en', 'ar']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.direction = this.getCurrentLang() === 'en' ? 'ltr' : 'rtl';

  }

  setLang(lang: string) {
    return this.translate.use(lang);
  }

  getCurrentLang() {
    return this.translate.currentLang;
  }

  setDirection() {
    this.direction = this.getCurrentLang() === 'en' ? 'ltr' : 'rtl';
  }

  getCurrentDirection() {
    return this.direction;
  }
}

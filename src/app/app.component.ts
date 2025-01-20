import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {BidiModule} from '@angular/cdk/bidi';
import {TranslationService} from './services/translation.service';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, TranslateModule, BidiModule, ReactiveFormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AppComponent {
  title = 'translate_app';
  direction: 'ltr' | 'rtl' = 'ltr'; // Default direction
  form: FormGroup;

  constructor(private translate: TranslationService, private fb: FormBuilder) {
    this.form = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
    this.direction = this.translate.getCurrentDirection();
  }

  changeLangEn() {
    this.translate.setLang('en').subscribe(() => {
      this.translate.setDirection()
      this.direction = this.translate.getCurrentDirection();

    });
  }

  changeLangAr() {
    this.translate.setLang('ar').subscribe(() => {
      this.translate.setDirection()
      this.direction = this.translate.getCurrentDirection();

    });

  }
}

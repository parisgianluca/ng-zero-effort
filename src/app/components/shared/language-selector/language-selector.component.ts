import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SettingsRepository } from '../../../state/settings.repository';
import { SupportedLanguages } from '../../../app.const';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [MatMenuModule, MatIconModule, TranslateModule],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss',
})
export class LanguageSelectorComponent {
  settingsRepository = inject(SettingsRepository);
  selectedLanguage = this.settingsRepository.getLanguage();
  languages = Object.values(SupportedLanguages);

  constructor() {
    this.settingsRepository.settings$
      .pipe(
        takeUntilDestroyed(),
        tap((settings) => (this.selectedLanguage = settings.language))
      )
      .subscribe();
  }

  changeLanguage(language: SupportedLanguages) {
    this.settingsRepository.setLanguage(language);
  }

  readonly SupportedLanguages = SupportedLanguages;
}

import { Component, Input, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SettingsRepository } from '../../../state/settings.repository';
import { SupportedLanguages } from '../../../app.const';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [MatMenuModule, MatIconModule, TranslateModule, CommonModule],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss',
})
export class LanguageSelectorComponent {
  @Input() size: 'small' | 'regular' | 'large' = 'large';

  settingsRepository = inject(SettingsRepository);
  selectedLanguage: string | undefined;
  languages = Object.values(SupportedLanguages);

  constructor() {
    this.settingsRepository.language$
      .pipe(
        takeUntilDestroyed(),
        tap((language) => {
          this.selectedLanguage = language;
        })
      )
      .subscribe();
  }

  changeLanguage(language: SupportedLanguages) {
    this.settingsRepository.setLanguage(language);
  }

  readonly SupportedLanguages = SupportedLanguages;
}

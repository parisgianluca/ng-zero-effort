import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SettingsRepository } from './state/settings.repository';
import { TranslateService } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  settingsRepository = inject(SettingsRepository);
  translateService = inject(TranslateService);

  constructor() {
    const savedLanguage = this.settingsRepository.getLanguage();
    this.translateService.setDefaultLang(savedLanguage);
    this.translateService.use(savedLanguage);

    this.settingsRepository.settings$
      .pipe(takeUntilDestroyed())
      .subscribe((settings) => {
        this.translateService.use(settings.language);
      });
  }
}

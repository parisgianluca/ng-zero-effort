import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SettingsRepository } from './state/settings.repository';
import { TranslateService } from '@ngx-translate/core';
import { SupportedLanguages } from './app.const';

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
    this.translateService.setDefaultLang(SupportedLanguages.ENGLISH);

    this.settingsRepository.language$.subscribe((language) => {
      this.translateService.use(language);
    });
  }
}

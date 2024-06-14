import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SupportedLanguages } from './app.const';
import { NotificationComponent } from './components/shared/notification/notification.component';
import {
  Notification,
  NotificationRepository,
} from './state/notifications.repository';
import { SettingsRepository } from './state/settings.repository';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NotificationComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  settingsRepository = inject(SettingsRepository);
  translateService = inject(TranslateService);
  notificationRepository = inject(NotificationRepository);

  loading = true;

  constructor() {
    this.translateService.setDefaultLang(SupportedLanguages.ENGLISH);

    this.settingsRepository.language$.subscribe((language) => {
      this.translateService.use(language);
    });
  }

  onNotificationClosed(notification: Notification) {
    this.notificationRepository.deleteNotification(notification.id);
  }
}

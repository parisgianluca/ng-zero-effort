import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SettingsRepository } from '../../../../state/settings.repository';
import { LanguageSelectorComponent } from '../../../shared/language-selector/language-selector.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    LanguageSelectorComponent,
    MatTooltipModule,
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent {
  settingsRepository = inject(SettingsRepository);

  toggleSidebar() {
    this.settingsRepository.toggleSidebar();
  }
}

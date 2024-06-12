import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SettingsRepository } from '../../../state/settings.repository';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, SidebarComponent, TopbarComponent, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  settingsRepository = inject(SettingsRepository);

  sidebar = true;

  constructor() {
    this.settingsRepository.sidebar$
      .pipe(
        takeUntilDestroyed(),
        tap((sidebar) => (this.sidebar = sidebar))
      )
      .subscribe();
  }
}

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
import { LoadingComponent } from '../../shared/loading/loading.component';
import { AuthRepository } from '../../../state/auth.repository';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterModule,
    SidebarComponent,
    TopbarComponent,
    CommonModule,
    LoadingComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  authRepository = inject(AuthRepository);
  settingsRepository = inject(SettingsRepository);

  sidebar = true;

  authLoading$ = this.authRepository.loading$;

  constructor() {
    this.settingsRepository.sidebar$
      .pipe(
        takeUntilDestroyed(),
        tap((sidebar) => (this.sidebar = sidebar))
      )
      .subscribe();
  }
}

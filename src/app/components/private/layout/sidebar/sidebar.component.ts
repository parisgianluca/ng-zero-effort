import { V } from '@angular/cdk/keycodes';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { AuthRepository } from '../../../../state/auth.repository';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatIconModule,
    RouterModule,
    CommonModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  authRepository = inject(AuthRepository);

  user$ = this.authRepository.user$;

  sidebar: Sidebar = {
    groups: [
      {
        label: 'Menu',
        items: [
          {
            icon: 'dashboard',
            label: 'Dashboard',
            routerLink: ['/private/dashboard'],
          },
        ],
      },
    ],
  };
}

interface Sidebar {
  groups: SidebarGroup[];
}

interface SidebarGroup {
  label: string;
  items: SidebarItem[];
}

interface SidebarItem {
  label: string;
  routerLink: string[];
  icon: string;
}

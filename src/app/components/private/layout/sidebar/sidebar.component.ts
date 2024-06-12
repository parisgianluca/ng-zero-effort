import { V } from '@angular/cdk/keycodes';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIconModule, RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
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

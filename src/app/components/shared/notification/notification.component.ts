import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Notification } from '../../../state/notifications.repository';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent {
  @Input() notification: Notification | undefined;

  @Output() closed = new EventEmitter<Notification>();
}

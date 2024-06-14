import { Injectable } from '@angular/core';
import { createStore, select, setProp, withProps } from '@ngneat/elf';
import { NotificationSeverity } from '../app.const';
import {
  addEntities,
  deleteEntities,
  getAllEntities,
  getEntitiesCount,
  selectAllEntities,
  withEntities,
} from '@ngneat/elf-entities';
import { v4 as uuidv4 } from 'uuid';

export interface Notification {
  id: string;
  severity: NotificationSeverity;
  message: string;
}

const store = createStore(
  { name: 'notifications' },
  withEntities<Notification>()
);

@Injectable({ providedIn: 'root' })
export class NotificationRepository {
  notifications$ = store.pipe(selectAllEntities());

  addNotification(notification: {
    severity: NotificationSeverity;
    message: string;
  }) {
    const notifications = store.query(getAllEntities());

    if (notifications.length === 3) {
      store.update(deleteEntities(notifications[0].id));
    }

    const id = uuidv4();
    store.update(addEntities({ ...notification, id }));

    setTimeout(() => {
      store.update(deleteEntities(id));
    }, 5000);
  }

  deleteNotification(id: string) {
    store.update(deleteEntities(id));
  }
}

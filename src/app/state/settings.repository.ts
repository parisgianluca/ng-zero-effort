import { Injectable } from '@angular/core';
import { createStore, select, setProp, withProps } from '@ngneat/elf';
import { persistState, localStorageStrategy } from '@ngneat/elf-persist-state';
import { SupportedLanguages } from '../app.const';

interface SettingsState {
  language: SupportedLanguages;
  sidebar: boolean;
}

const initialState: SettingsState = {
  language: SupportedLanguages.ENGLISH,
  sidebar: true,
};

const store = createStore(
  { name: 'settings' },
  withProps<SettingsState>(initialState)
);

persistState(store, { key: 'settings', storage: localStorageStrategy });

@Injectable({ providedIn: 'root' })
export class SettingsRepository {
  language$ = store.pipe(select(({ language }) => language));
  sidebar$ = store.pipe(select(({ sidebar }) => sidebar));

  setLanguage(language: SupportedLanguages) {
    store.update(setProp('language', language));
  }

  toggleSidebar() {
    store.update((state) => ({
      ...state,
      sidebar: !state.sidebar,
    }));
  }
}

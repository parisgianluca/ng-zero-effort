import { Injectable } from '@angular/core';
import { createStore, withProps } from '@ngneat/elf';
import { persistState, localStorageStrategy } from '@ngneat/elf-persist-state';
import { SupportedLanguages } from '../app.const';

interface SettingsState {
  language: SupportedLanguages;
}

const initialState: SettingsState = {
  language: SupportedLanguages.ENGLISH,
};

const settingsStore = createStore(
  { name: 'settings' },
  withProps<SettingsState>(initialState)
);

persistState(settingsStore, { key: 'settings', storage: localStorageStrategy });

@Injectable({ providedIn: 'root' })
export class SettingsRepository {
  settings$ = settingsStore.asObservable();

  setLanguage(language: SupportedLanguages) {
    settingsStore.update((state) => ({ ...state, language }));
  }

  getLanguage() {
    return settingsStore.getValue().language;
  }
}

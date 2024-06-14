import { Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import { createStore, select, setProp, withProps } from '@ngneat/elf';
import {
  excludeKeys,
  localStorageStrategy,
  persistState,
} from '@ngneat/elf-persist-state';

interface AuthState {
  user: User | null;
  loading: boolean;
}

const initialState: AuthState = {
  user: null,
  loading: false,
};

const store = createStore({ name: 'auth' }, withProps<AuthState>(initialState));

persistState(store, {
  key: 'auth',
  storage: localStorageStrategy,
  source: () => store.pipe(excludeKeys(['loading'])),
});

@Injectable({ providedIn: 'root' })
export class AuthRepository {
  user$ = store.pipe(select(({ user }) => user));
  loading$ = store.pipe(select(({ loading }) => loading));

  setLoading(loading: boolean) {
    store.update(setProp('loading', loading));
  }

  setUser(user: User | null) {
    store.update(setProp('user', user));
  }
}
